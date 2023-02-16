import {Component} from 'react'
import Slider from 'react-slick'

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

  render() {
    return (
      <div className="main-container">
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    )
  }
}

export default Slicker
