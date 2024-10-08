import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authentication/authenticationOperation';
import { NavLink } from 'react-router-dom';
import {
  Heading,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      maxW="sm"
      mx="auto"
      mt={10}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="lg"
    >
      <Heading>Create Account</Heading>
      <FormControl id="name" mb={4} isRequired>
        <FormLabel>Username</FormLabel>
        <Input type="text" name="name" placeholder="Username" focusBorderColor="#fa991c"/>
      </FormControl>
      <FormControl id="email" mb={4} isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" placeholder="Email" focusBorderColor="#fa991c" />
      </FormControl>
      <FormControl id="password" mb={4} isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" placeholder="Password" focusBorderColor="#fa991c"/>
      </FormControl>
      <Button type="submit"  colorScheme="cyan" color="white" width="full">
        Register
      </Button>
      <Button as={NavLink} to="/login"  colorScheme="cyan"
         variant='outline' width="full" mt={4}>
        Login
      </Button>
    </Box>
  );
};