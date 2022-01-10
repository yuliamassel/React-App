import React from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../Components/Button/Index'

const Main = () => {

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/signup')
    }
    const handleClick2 = () =>{
        navigate('/login')
    }

    return (
        <div className='wrapper d-flex justify-content-center align-items-center'>
            <h1 className='text-white fw-bold fs-1'>Zwallet</h1>
            <Button name="signup" className="btn-main" onClick={handleClick}>SignUp</Button>
            <Button name="login" className="btn-main one" onClick={handleClick2}>Login</Button>
        </div>
    )
}

export default Main
