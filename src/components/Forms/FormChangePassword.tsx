import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IChangePassword } from '../../models/IChangePassword'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'
import { changePassword } from '../../services/SettingsService'

const FormChangePassword: FC = () => {
    const dispatch = useTypedDispatch()
    
    const handleChangePassword = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(changePassword(newPassword))
    }

    const newPassword: IChangePassword = {
        old_password: '',
        new_password: '',
        new_password2: ''
    }
    return (
        <FormWrapper method='PUT' onSubmit={e => handleChangePassword(e)}>
            <Input label='Old password' onChange={e => newPassword.old_password = e.target.value}/>
            <Input label='New password' onChange={e => newPassword.new_password = e.target.value}/>
            <Input label='New password' onChange={e => newPassword.new_password2 = e.target.value}/>
            <Button type='submit' variant="contained">Change password</Button>
        </FormWrapper>
    )
}

export default FormChangePassword