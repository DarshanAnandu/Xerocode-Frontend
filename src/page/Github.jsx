import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Github = () => {
    const { _id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const UserDataWithToken = async () => {
            
            localStorage.setItem("githubId", _id);
            try {
                const response = await axios.get(`https://xerocodee-e5rc.onrender.com/github/callback`);
                if (response.status === 200) {
                    navigate(`/home/${_id}`);
                }
                else {
                    console.log("User not found");
                }
            } catch (error) {
                console.log(error)
            }
        }
        UserDataWithToken();

    })
    return (
        <>
            
        </>

    )
}

export default Github
