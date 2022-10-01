import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./message";


export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'Josa',
        email: 'josa@josa.dev'
    });
    

    const { username, email } = formState;

    const onInputChange = ({target}) => {

        // console.log(event.target.name)
        // console.log(event.target.value)

        const { name, value } = target;
        setFormState( {
            ...formState,
            [ name ]: value
        } )

    }

    useEffect(() => {
        // console.log('useEffect cambiado')
    
    }, [])

    useEffect(() => {
        // console.log('formState cambiado')
        return() => {

        }
    }, [formState])
    
    useEffect(() => {
        // console.log('email cambiado')
    
    }, [email])

    return (

        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input type="text" className="form-control" name="username" placeholder="username" value={ username } onChange={ onInputChange } />
            <input type="email" className="form-control" name="email" placeholder="josa@josa.dev" value={ email } onChange={ onInputChange } />
            {
                    (username === 'Josa2') && <Message />
            }

        </>

    )
}
