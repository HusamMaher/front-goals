
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { createGoal } from '../features/goals/goalsSlice'

const GoalForm = () => {
    const [text, setText] = useState("")
    const { isError, isSuccess, goals, meesage } = useSelector((state) => state.goal)

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        if (!text) toast.error("please enter goal")

        dispatch(createGoal({ text }))
        e.preventDefault()
    }
    useEffect(() => {
        if (isError) toast.error(meesage)
    }, [isError, isSuccess])
    return (
        <>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label>
                            Goal
                        </label>
                        <input
                            name='text'
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder='enter your goals' />


                    </div>
                    <div className='form-group'>
                        <button className='btn' type='submit'>submit</button>
                    </div>
                </form>

            </section>
        </>
    )
}

export default GoalForm