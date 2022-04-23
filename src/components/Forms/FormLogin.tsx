import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IUserLogin } from '../../models/IUserLogin'
import { loginUser } from '../../services/LoginService'
import { errorForm } from '../../store/reducers/errorSlice'
import ErrorText from '../UI/Error/ErrorText'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const FormLogin: FC = () => {
    const dispatch = useTypedDispatch()

    const dataLogin: IUserLogin = {
        username: '',
        password: ''
    }

    const handleLogin = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (dataLogin.username !== '' && dataLogin.username !== '') {
            dispatch(loginUser(dataLogin))
        } else {
            dispatch(errorForm('Inputs must be filled!'))
        }
    }

    return (
        <FormWrapper method='POST' onSubmit={e => handleLogin(e)}>
            <Input 
                label='Login'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dataLogin.username = e.target.value}
            />
            <Input 
                label='Password'
                type='password'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dataLogin.password = e.target.value}
            />
            <Button type='submit' variant="contained">
                <LoginOutlinedIcon />
                Login
            </Button>
            <ErrorText />
        </FormWrapper>
    )
}

export default FormLogin