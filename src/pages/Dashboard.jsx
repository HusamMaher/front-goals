import React from 'react'
import { Header } from '../components/Header'
import { useSelector } from 'react-redux'
import GoalForm from '../components/goalForm'
const Dashboard = () => {
    const { user } = useSelector((state) => state.auth)

    return (
        <>
            <section className='heading'>
                <h1>welcome {user && user.user.name}</h1>
                <p>
                    Goals Dashboard
                </p>


            </section>
            <section className='homecontent'>

                {user ? <GoalForm /> : <h1>login to see more ....</h1>}

            </section>
        </>
    )
}

export default Dashboard