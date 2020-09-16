import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form action="">
        <h1>Sign In</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Password" />

        <button type="submit">Sign In</button>

        <a href="forgot">I forgot my password</a>
      </form>

      <a href="Signup">
        <FiLogIn />
        Sign Up
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
