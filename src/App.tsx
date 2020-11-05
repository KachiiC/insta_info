import React, { useEffect, useState } from 'react';
// CSS
import './App.css';
// Components
import InstaHeader from "Components/InstaHeader"
// Data
// import InstaInfo from "Data/InstaInfo" 

interface Props {
    user: string
}

const App: React.FC<Props> = ({user}) => {

    const [inputUserName, setInputUserName] = useState("")
    const [profileData, setProfileData] = useState({
        full_name: "", 
        biography: "",
        username: "",
        profile_pic_url: "",
        following: "", 
        follower: "", 
        total_post: ""
    })
    const [showResult, setShowResult] = useState(false)

    const onSubmit = data => {
        const username = document.getElementById("profile-username").value
        setInputUserName(username)
    }

    useEffect(() => {
        fetch(`https://easy-instagram-service.p.rapidapi.com/username?username=${inputUserName}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "985371e109mshb5666c0424d5dcfp1b7485jsndf2afe5a3591",
                "x-rapidapi-host": "easy-instagram-service.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    },[inputUserName])

    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" id="profile-username" name="profile" />
            </form>
            <div>
                {showResult && 
                    <InstaHeader
                    profile_pic_url={profileData.profile_pic_url}
                    full_name={profileData.full_name}
                    username={profileData.username}
                    biography={profileData.biography}
                    following={profileData.following}
                    follower={profileData.follower}
                    total_post={profileData.total_post}
                    />
                }
            </div>
        </div>

    )
        
        
}


export default App;
