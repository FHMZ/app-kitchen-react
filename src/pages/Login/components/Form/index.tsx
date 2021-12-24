import React, { FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import Input from '../../../../components/Input'
import { useValidateForm } from '../../../../hooks/Form'
import { useLoginProvider } from '../../../../providers/KdsProvider'
import { useShowPassword } from '../../hooks/Login'
import PasswordIconButton from '../IconButton'
import { StyledBoxForm, StyledLoginButton } from './style'

interface IFormProps {
  id?: string
  onSubmit?: () => any
  children: React.ReactNode
}

export interface ILogin {
  userName: string
  userPassword: string
}

const initForm: ILogin = {
  userName: '',
  userPassword: '',
}

const Form: React.FC<IFormProps> = ({ id, onSubmit, children }) => (
  <StyledBoxForm id={id} onSubmit={onSubmit} component="form">
    {children}
  </StyledBoxForm>
)

const LoginForm: React.FC = () => {
  const { form, error, setError, onChange } = useValidateForm(initForm)
  const { isPasswordVisible, onPasswordVisible } = useShowPassword()
  const { setKdsProps } = useLoginProvider()

  const history = useHistory()
  const isFieldText = isPasswordVisible ? 'text' : 'password'

  const handleValidateForm = () => {
    let fields = { userName: '', userPassword: '' }
    fields.userName = form.userName ? '' : 'Campo usuário não pode ser vázio'
    fields.userPassword = form.userPassword
      ? ''
      : 'Campo senha não pode ser vázio'
    setError({ ...fields })
    return Object.values(fields).every((ex) => ex === '')
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (handleValidateForm()) {
      const res = require('../../../../assets/mocks/login.json')
      if (res) {
        setKdsProps(res.store.id, res.store.id, res.profile)
        history.push(res.profile.mainScreenUrl)
      }
    }
  }

  return (
    <Form>
      <Input
        id="username"
        label="Usuário"
        name="userName"
        required={true}
        autoFocus={true}
        value={form.userName}
        variant="filled"
        onChange={onChange}
        color="success"
        error={error.userName}
      />
      <Input
        id="password"
        label="Senha"
        name="userPassword"
        required={true}
        type={isFieldText}
        value={form.userPassword}
        variant="filled"
        onChange={onChange}
        endAdornment={
          <PasswordIconButton
            onClick={onPasswordVisible}
            isVisible={isPasswordVisible}
          />
        }
        color="success"
        error={error.userPassword}
      />
      <StyledLoginButton
        color="primary"
        fullWidth={true}
        variant="contained"
        onClick={handleSubmit}
      >
        Entrar
      </StyledLoginButton>
    </Form>
  )
}

export default LoginForm
