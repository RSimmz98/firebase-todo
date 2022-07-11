import {Text, Stack} from '@chakra-ui/react'
import AddTodo from './components/AddTodo'
import Title from './components/Title'
function App() {
  return (
    <>
      <div>
    <Title />
    </div>
      <div>
           <AddTodo />
    </div>
    </>
  );
}

export default App;
