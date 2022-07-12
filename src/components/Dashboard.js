import { Text, Button } from '@chakra-ui/react'
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../AuthContext"





export default function Title() {
   const [error, setError] = useState("")
   const { currentUser, logout } = useAuth()
   const history = useNavigate()


   async function handleLogout() {
      setError("")

      try {
         await logout()
         history.push("/login")
      } catch {
         setError("Failed to log out")
      }
   }
   return (
      <>
         <Text
            size="xl"
            align="center"
            fontSize="50px"
            p={4}>Todo App</Text>
            <div>
            <Button variant="link" onClick={handleLogout} type="submit">
          Log Out
        </Button>
            </div>
      </>
   )
}
