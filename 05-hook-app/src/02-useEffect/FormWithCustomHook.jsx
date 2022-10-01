import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm( 
        {
            username: '',
            email: '',
            password: ''
        }
    )
    // const {username, email, password} = formState;

    return (

        <>
            <h1>FormWithCustomHook Simple</h1>
            <hr />

            <input type="text" className="form-control" name="username" placeholder="username" value={ username } onChange={ onInputChange } />
            <input type="email" className="form-control" name="email" placeholder="josa@josa.dev" value={ email } onChange={ onInputChange } />
            <input type="password" className="form-control" name="password" placeholder="password" value={ password } onChange={ onInputChange } />

            <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
        </>

    )
}
