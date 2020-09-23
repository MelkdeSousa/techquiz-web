import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BsArrowRight as ArrowRight } from 'react-icons/bs'

import { useAuth } from '../../contexts/auth'

import logoTechQuiz from '../../assets/logo_techquiz.svg'

import { Container, Form, Header, Image, Link, Input, Button } from './styles'

const Login: React.FC = () => {
  const history = useHistory()

  const { login } = useAuth()

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    try {
      await login({
        email: userEmail,
        password: userPassword
      })
      
      history.push('/')
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Header>
          <Image src={logoTechQuiz} />
          <Link to="/register">
            Register
            <ArrowRight size={20} color="#eaeaea" />
          </Link>
        </Header>

        <Input
          name="email"
          placeholder="E-mail"
          type="email"
          value={userEmail}
          onChange={({ target: { value } }) => setUserEmail(value)}
        />

        <Input
          name="password"
          placeholder="Password"
          type="password"
          value={userPassword}
          onChange={({ target: { value } }) => setUserPassword(value)}
        />
        
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default Login
