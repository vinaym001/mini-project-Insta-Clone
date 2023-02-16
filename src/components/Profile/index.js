import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'

class Profile extends Component {
  state = {userProfile: {}}

  componentDidMount() {
    this.getProfileData()
  }

  getProfileData = async () => {
    const apiUrl = 'https://apis.ccbp.in/insta-share/my-profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const proData = data.profile
      const profileData = {
        id: proData.id,
        userId: proData.user_id,
        userName: proData.user_name,
        profilePic: proData.profile_pic,
        followersCount: proData.followers_count,
        followingCount: proData.following_count,
        userBio: proData.user_bio,
        posts: proData.posts,
        postsCount: proData.posts_count,
        stories: proData.stories,
      }
      this.setState({userProfile: profileData})
    }
  }

  render() {
    return (
      <div className="profile-bg-container">
        <Header />
      </div>
    )
  }
}

export default Profile
