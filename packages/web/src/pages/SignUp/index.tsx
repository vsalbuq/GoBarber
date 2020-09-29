import React, { useCallback } from 'react';
import {
  FiMail, FiLock, FiUser, FiArrowLeft,
} from 'react-icons/fi';
import * as Yup from 'yup';

import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name required'),
        email: Yup.string().required('E-mail required').email('Invalid e-mail'),
        password: Yup.string().min(6, 'Password must have at least 6 digits'),
      });

      await schema.validate(data, {
        abortEarly: true,
      });
    } catch (err) {
      console.error(data);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />

          <Button type="submit">Sign Up</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Back to sign in
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
