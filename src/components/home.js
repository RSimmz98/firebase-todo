
import React, { useContext, useState } from "react"
import {Button, Center } from '@chakra-ui/react'
import AddTodo from '../components/AddTodo'
import Title from '../components/Title'
import Todo from '../components/Todo'
import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from '../firebase';
  import { useNavigate } from 'react-router-dom';
  import { UserAuth } from '../context/AuthContext';

export default function Home(){

  
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
      const { user, logout } = UserAuth();
      const navigate = useNavigate();
    
      const handleLogout = async () => {
        try {
          await logout();
          navigate('/');
          console.log('You are logged out')
        } catch (e) {
          console.log(e.message);
        }
      };

    return (
      <>
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
     
   
      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
      </>
  )
}