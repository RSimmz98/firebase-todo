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
  
    <Center bg="gray">
      <Box bg="gray">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
        <button
          id="i"
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon w={4} h={4} color="teal" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon w={4} h={4}/>
        
        </button>
        <button 
          id="i" 
          className="button-delete"
          onClick={() => handleDelete(todo.id)}
      
           >
          <DeleteIcon w={4} h={4}/>
        </button>
      </Box>
      </Center>
     );
}
