
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout, reset } from "../features/auth/authSlice"

export function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onClick = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }
    return (

        <header className="header">
            <div className="logo">
                <Link to="/">Goal setter</Link>
            </div>
            <ul>
                {user ? (<li>
                    <button className="btn" onClick={onClick} ><FaSignInAlt />logout</button>
                </li>) : (<> <li>
                    <Link to="/login" ><FaSignInAlt />login</Link>
                </li>
                    <li>
                        <Link to="/register"><FaUser />Register</Link>
                    </li></>)
                }


            </ul>
        </header>
    )
}
