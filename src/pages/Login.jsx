import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import { FaSignInAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Spinner from '../components/Spinner'
import { login, reset } from '../features/auth/authSlice'



const Login = () => {
    const [formData, setFormData] = useState({
        password: "",
        email: "",

    })
    const { password, email, } = formData
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const onChange = (e) => {

        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        const userData = { email, password }

        loginShema.validate(userData).then((res) => {
            console.log(res);
            if (res === false) toast.error("invalid creditial")
            else dispatch(login(userData))
        }).catch(e => {
            toast.error(e.message)
        })

        e.preventDefault()
    }
    useEffect(() => {

        if (isError) {
            toast.error(message)

        }
        if (isSuccess || user) {
            toast.success("welcome back")
            navigate("/")
        }
        dispatch(reset())
    }, [user, isError, message])

    if (isLoading) return <Spinner />

    //ui 
    return (
        <>

            <section className='heading'>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>logIn with your email</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">

                        <input
                            type="text"
                            className='form-control'
                            id="email"
                            name='email'
                            value={email}
                            placeholder="enter you email"
                            onChange={onChange}
                        />
                        <input
                            type="password"
                            className='form-control'
                            id="password"
                            name='password'
                            value={password}
                            placeholder="enter you password"
                            onChange={onChange}
                        />

                    </div>
                    <div className="form-groub">
                        <button
                            type="submit"
                            className='btn btn-block'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login



let loginShema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(6)

});

