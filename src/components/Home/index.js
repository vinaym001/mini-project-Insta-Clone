import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import Slicker from '../Slicker'
import Posts from '../Posts'
import SearchContext from '../../context/SearchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  fail: 'FAILURE',
}

class Home extends Component {
  state = {
    storyDataList: [],
    postsList: [],
    isLiked: false,
    apiStatus: apiStatusConstants.initial,
    searchResult: {},
  }

  componentDidMount() {
    this.getUserStoryData()
    this.getPostData()
  }

  getPostData = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})
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
      this.setState({
        postsList: postData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.fail})
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

  renderLoaderView = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

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

  renderNopostView = () => {
    const onRetry = () => {
      this.setState({apiStatus: apiStatusConstants.progress}, this.renderPosts)
    }
    return (
      <>
        <img
          src="https://res.cloudinary.com/dzf4nrbvt/image/upload/v1676539801/alert-triangle_hkmcpf.png"
          alt="page not found"
          className="page not found"
        />
        <p className="home-fail-text">Something went wrong. Please try again</p>
        <button type="button" className="retry-btn" onClick={onRetry}>
          Try again
        </button>
      </>
    )
  }

  renderViewOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.progress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderPosts()
      case apiStatusConstants.fail:
        return this.renderNopostView
      default:
        return null
    }
  }

  render() {
    const {storyDataList} = this.state
    return (
      <SearchContext.Consumer>
        {value => {
          const {searchResult} = value
          console.log(searchResult)
          return (
            <div className="home-bg-container">
              <Header />
              <Slicker storyDataList={storyDataList} />
              {this.renderViewOnApiStatus()}
            </div>
          )
        }}
      </SearchContext.Consumer>
    )
  }
}

export default Home
