import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
        password2: ""
    })
    const { name, password, email, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    const onChange = (e) => {

        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        if (password !== password2) {
            toast.error("password do not match")
        } else {
            const userData = { name, email, password }
            dispatch(register(userData))
        }
        e.preventDefault()
    }
    useEffect(() => {
        if (isError) toast.error(message)

        if (isSuccess || user) {
            toast.success("welcome")
            navigate("/")
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message])
    if (isLoading) return <Spinner />
    return (
        <>

            <section className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>please create account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className='form-control'
                            id="name"
                            name='name'
                            value={name}
                            placeholder="enter you name"
                            onChange={onChange}
                        />
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
                            type="text"
                            className='form-control'
                            id="password"
                            name='password'
                            value={password}
                            placeholder="enter you password"
                            onChange={onChange}
                        />
                        <input
                            type="text"
                            className='form-control'
                            id="password2"
                            name='password2'
                            value={password2}
                            placeholder="confirm password"
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

export default Register