import './index.css'
import {FaSearch} from 'react-icons/fa'

const Header = () => (
  <div>
    <nav className="nav-container">
      <img
        src="https://res.cloudinary.com/dzf4nrbvt/image/upload/v1676516080/insta_icon_login_cvg0vu.svg"
        alt="website logo"
        className="header-website-logo"
      />
      <div className="nav-right-container">
        <div className="search-input-container">
          <input
            type="search"
            placeholder="Search Caption"
            className="header-search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        <p className="home-link">Home</p>
        <p className="profile-link">Profile</p>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  </div>
)

export default Header
