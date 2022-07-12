import {Text, Stack} from '@chakra-ui/react'
import React from 'react';
import AddTodo from './components/AddTodo'
import Title from './components/Dashboard'
import Todo from './components/Todo'
import { AuthProvider } from "./AuthContext"
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from './firebase';
  import SignUp from './pages/signup'
import Login from './pages/login'
import { Routes, Route, BrowserRouter} from 'react-router-dom'


function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className="App">
     <BrowserRouter> 
     <AuthProvider>
        <div>
        <Routes>
        <Route
           path="/"
            element={<Title />}
            />
          <Route
           path="/signup"
            element={<SignUp />}
            />
        <Route
           path="/login"
            element={<Login />}
            />

        </Routes>
      </div>
        <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
