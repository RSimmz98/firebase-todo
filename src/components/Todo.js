import React from "react";
import {Button,Box,Stack, Center, VStack, HStack} from '@chakra-ui/react'
import { CheckCircleIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'

export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
  
    <Center h={24}  gap={4} >
  
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
        className='w-64 flex flex-col py-2  border-2 border-blue-500 mt-4'
        
      />
        <button
          id="i"
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon w={6} h={6} color="green.500" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon w={6} h={6}/>
        
        </button>
        <button 
          id="i" 
          className="button-delete"
          onClick={() => handleDelete(todo.id)}
      
           >
          <DeleteIcon color="red.500" w={6} h={6}/>
        </button>
      </Center>
     );
}
