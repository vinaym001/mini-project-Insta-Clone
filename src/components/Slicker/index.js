import {Component} from 'react'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import './index.css'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}
const apiStatusConstants = {
  initial: 'INITIAL',
  progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  fail: 'FAILURE',
}

class Slicker extends Component {
  renderSlider = () => {
    const {storyDataList} = this.props
    return (
      <Slider {...settings}>
        {storyDataList.map(eachLogo => {
          const {userId, userName, storyUrl} = eachLogo
          return (
            <div className="slick-item" key={userId}>
              <img className="logo-image" src={storyUrl} alt="user story" />
              <p className="stories-name">{userName}</p>
            </div>
          )
        })}
      </Slider>
    )
  }

  renderLoaderView = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  //   renderViewOnApiStatus = () => {
  //     const {apiStatus} = this.state
  //     switch (apiStatus) {
  //       case apiStatusConstants.progress:
  //         return this.renderLoaderView()
  //       case apiStatusConstants.success:
  //         return this.renderSlider()
  //       default:
  //         return null
  //     }
  //   }

  render() {
    const {storyDataList} = this.props
    return (
      <div className="main-container">
        <div className="slick-container">
          {storyDataList.length > 0
            ? this.renderSlider()
            : this.renderLoaderView()}
        </div>
      </div>
    )
  }
}

export default Slicker
