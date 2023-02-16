import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'

import Header from '../Header'
import Slicker from '../Slicker'
import Posts from '../Posts'

class Home extends Component {
  state = {storyDataList: [], postsList: [], isLiked: false}

  componentDidMount() {
    this.getUserStoryData()
    this.getPostData()
  }

  getPostData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/insta-share/posts'
    const options = {
      method: 'GET',
      headers: {
        //* headers should be separate object in options
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const postData = data.posts.map(eachItem => ({
        comments: eachItem.comments,
        createdAt: eachItem.created_at,
        likesCount: eachItem.likes_count,
        postDetails: eachItem.post_details,
        postId: eachItem.post_id,
        profilePic: eachItem.profile_pic,
        userId: eachItem.user_id,
        userName: eachItem.user_name,
      }))
      this.setState({postsList: postData})
    }
  }

  getUserStoryData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/insta-share/stories'
    const options = {
      method: 'GET',
      headers: {
        //* headers should be separate object in options
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const storyData = data.users_stories.map(eachItem => ({
        storyUrl: eachItem.story_url,
        userId: eachItem.user_id,
        userName: eachItem.user_name,
      }))
      this.setState({storyDataList: storyData})
    }
  }

  onLikeClicked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }))
  }

  renderPosts = () => {
    const {postsList, isLiked} = this.state
    return (
      <ul>
        {postsList.map(eachItem => (
          <Posts
            key={eachItem.postId}
            postDetailsItems={eachItem}
            onLikeClicked={this.onLikeClicked}
            isLiked={isLiked}
          />
        ))}
      </ul>
    )
  }

  renderNopostView = () => (
    <>
      <img
        src="https://res.cloudinary.com/dzf4nrbvt/image/upload/v1676539801/alert-triangle_hkmcpf.png"
        alt="page not found"
        className="page not found"
      />
    </>
  )

  render() {
    const {storyDataList, postsList} = this.state

    return (
      <div className="home-bg-container">
        <Header />
        <Slicker storyDataList={storyDataList} />
        {postsList.length > 0 ? this.renderPosts() : this.renderNopostView()}
      </div>
    )
  }
}

export default Home
