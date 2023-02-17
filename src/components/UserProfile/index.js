import {Component} from 'react'

import Cookies from 'js-cookie'
import Header from '../Header'
import UserProfileDetails from '../UserProfileDetails'

class UserProfile extends Component {
  state = {userProfileData: {}}

  componentDidMount() {
    this.getUserProfile()
  }

  getUserProfile = async () => {
    const {match} = this.props
    const {params} = match
    const {userId} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/insta-share/users/${userId}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const userDetails = data.user_details
      const UserData = {
        id: userDetails.id,
        userId: userDetails.user_id,
        userName: userDetails.user_name,
        profilePic: userDetails.profile_pic,
        followersCount: userDetails.followers_count,
        followingCount: userDetails.following_count,
        userBio: userDetails.user_bio,
        posts: userDetails.posts,
        postsCount: userDetails.posts_count,
        stories: userDetails.stories,
      }
      this.setState({userProfileData: UserData})
    }
  }

  renderUserProfileData = () => {
    const {userProfileData} = this.state
    return (
      <div>
        <UserProfileDetails userProfileData={userProfileData} />
      </div>
    )
  }

  render() {
    return (
      <div className="user-profile-bg-container">
        <Header />
        {this.renderUserProfileData()}
      </div>
    )
  }
}

export default UserProfile
