import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {Button,  Center} from "@chakra-ui/react"

export default function AddTodo() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Center  gap={2} >
        <input
          type="text" 
          className="w-80 border-4 border-indigo-200 border-t-indigo-500 h-12  text-md break-all leading-tight text-gray-700"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit" variant="outline" size="lg" colorScheme="blue">Add</Button>
      </Center>
    </form>
  );
}

//className='border p-3
