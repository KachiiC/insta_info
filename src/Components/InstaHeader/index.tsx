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

const InstaHeader: React.FC<InstaData> = ({
    full_name, biography, username, profile_pic_url,
    following, follower, total_post}) => {
    
        return (

            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={profile_pic_url} alt="" />
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{username}</h1>
                        <button className="btn profile-edit-btn">Edit Profile</button>
                        <button className="btn profile-settings-btn" aria-label="profile settings">
                            <i className="fas fa-cog" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="profile-stats">
                        <ul>
                            <li><span className="profile-stat-count">{total_post}</span> Posts</li>
                            <li><span className="profile-stat-count">{follower}</span> Followers</li>
                            <li><span className="profile-stat-count">{following}</span> Following</li>
                        </ul>
                    </div>
                    <div className="profile-bio">
                        <h4>{full_name}</h4>
                        <p>{biography}</p>
                    </div>
                </div>
            </div>
            
        )

}


export default InstaHeader