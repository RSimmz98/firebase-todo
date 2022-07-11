import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {Button, Stack, Center} from "@chakra-ui/react"

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
      <Center >
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit" colorScheme="teal">Add</Button>
      </Center>
    </form>
  );
}
