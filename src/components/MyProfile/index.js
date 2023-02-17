import './index.css'

const MyProfile = props => {
  const {myProfileDetails} = props
  const {
    id,
    userId,
    userName,
    profilePic,
    followersCount,
    followingCount,
    userBio,
    posts,
    postsCount,
    stories,
  } = myProfileDetails

  return (
    <div>
      <div className="bio-container">
        <div className="profile-img-container">
          <img src={profilePic} alt="my profile" className="profile-img" />
        </div>
        <div className="profile-info">
          <p className="pro-username">{userName}</p>
          <div className="count-container">
            <p className="pro-post-count">{postsCount} posts</p>
            <p className="pro-follrs-count">{followersCount} followers</p>
            <p className="pro-follng-count">{followingCount} following</p>
          </div>
          <p className="pro-name">{userName}</p>
          <p className="pro-bio">{userBio}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default MyProfile
