import { SharedLayout } from '../SharedLayout/sharedLayout';
// import { HomePage } from 'pages/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { ContactsPage } from '../Pages/ContactsPage';
import { ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  return (
    <ChakraProvider>
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<LoginPage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={RegisterPage}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
              }
            />
          </Route>

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactsPage} />
            }
          />
        </Routes>
      </>
    </ChakraProvider>
  );
};