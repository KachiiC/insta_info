import React from 'react';
// CSS
import './App.css';
// Components
import InstaHeader from "Components/InstaHeader"
// Data
import InstaInfo from "Data/InstaInfo" 

const App = () => {

  return (

    <div className="App">
      <InstaHeader
        profile_pic_url={InstaInfo.profile_pic_url}
        full_name={InstaInfo.full_name}
        username={InstaInfo.username}
        biography={InstaInfo.biography}
        following={InstaInfo.following}
        follower={InstaInfo.follower}
        total_post={InstaInfo.total_post}
      />
    </div>

  )

};

export default App;
