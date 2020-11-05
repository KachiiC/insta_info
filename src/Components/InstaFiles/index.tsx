import React from 'react'

type InstaData = {
    full_name: string,
    biography: string,
    username: string,
    profile_pic_url: string,
    following: number,
    follower: number,
    total_post: number,
}

const InstaFiles: React.FC<InstaData> = ({
    full_name, biography, username, profile_pic_url,
    following, follower, total_post}) => {
    
        return (
            <div>
            <h1>Insta Files</h1>
                <img src={profile_pic_url} alt="profile-pic"/>
                <h3>Full Name: {full_name}</h3>
                <h3>Username: {username}</h3>
                <h3>Bio: {biography}</h3>
                <h3>Following: {following}</h3>
                <h3>Followers: {follower}</h3>
                <h3>Total Posts: {total_post}</h3>
            </div>
        )

}


export default InstaFiles