import React from 'react'
// Data

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

        const profileStats = [
            {   name: " Post", profile_prop : total_post    }, 
            {   name: " Following", profile_prop: following },
            {   name: " Followers", profile_prop: follower  }
        ]

        const displayProfileStats = profileStats.map((stat) => (
            <li>
                <span className="profile-stat-count">
                    {stat.profile_prop}
                </span>
                {stat.name}
            </li>
        ))
    
        return (
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={profile_pic_url} alt="profile-dp" />
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
                            {displayProfileStats}
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