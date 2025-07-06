import { useNavigate } from "react-router-dom"
import {useAuth } from "./../context/AuthContext"
const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate()
     const handleLogout = () => {
            localStorage.removeItem('auth_token')
            localStorage.removeItem('isAuthenticated')
            logout()
            // toast.success('Logged out successfully!')
            setTimeout(() => {
            navigate("/signin")
            }, 2000)
        }

    return<>
    now we are in Dashboard
    <button className="" onClick={handleLogout}>Logout</button>
    </>
}

export default Dashboard;