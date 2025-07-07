import { useNavigate } from "react-router-dom"
import {useAuth } from "../context/AuthContext"
const Profile = () => {
    const { logout } = useAuth();
    const navigate = useNavigate()
     

    return<>
    profile
    </>
}

export default Profile;