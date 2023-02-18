import './index.css'

const UserProfileDetails = props => {
  const {userProfileData} = props
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
  } = userProfileData

  return (
    <div>
      <div className="user-bio-container">
        <div className="user-img-container">
          <img src={profilePic} alt="user profile" className="user-img" />
        </div>
        <div className="user-info">
          <p className="user-username">{userName}</p>
          <div className="count-container">
            <p className="user-post-count">{postsCount} posts</p>
            <p className="user-follrs-count">{followersCount} followers</p>
            <p className="user-follng-count">{followingCount} following</p>
          </div>
          <p className="user-name">{userName}</p>
          <p className="user-bio">{userBio}</p>
        </div>
      </div>
      <hr />
                  <ul>
        {stories.map(eachItem => (
          <li key={eachItem.id}>
            <img src={eachItem.image} alt="user story" className="" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserProfileDetails
