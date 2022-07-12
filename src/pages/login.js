import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {auth} from '../firebase'
import {useState} from 'react'
import{signInWithEmailAndPassword,
       onAuthStateChanged, signOut} from 'firebase/auth'

export default function Login() {

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');


  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
   const login = async () => {
    try{
    const user = await signInWithEmailAndPassword(
        auth,
        loginEmail, 
        loginPassword
      )
        console.log(user)
       } catch (error) {
      console.log(error.message)
    }
  };

  const logout = async () => {
    await signOut(auth)
  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            keep track of your daily todos <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email"
                onChange={(event) =>{
                  setLoginEmail=(event.target.value)
                  }}
                   />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                  onChange={(event) =>{
                  setLoginPassword=(event.target.value)
                  }}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                type="submit"
                onClick={login}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
                <div>{user?.email}</div>
              <div>{user?.password}</div>
                <Text>
                Dont have an account?
           
              </Text>
                     <Button
                type="submit"
                onClick={logout}>signOut</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
