import './index.css'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const Header = () => (
  <div>
    <nav className="nav-container">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dzf4nrbvt/image/upload/v1676516080/insta_icon_login_cvg0vu.svg"
          alt="website logo"
          className="header-website-logo"
        />
      </Link>
      <h1 className="logo-name">Insta Share</h1>
      <div className="nav-right-container">
        <div className="search-input-container">
          <input
            type="search"
            placeholder="Search Caption"
            className="header-search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        <Link className="home-link" to="/">
          <p>Home</p>
        </Link>
        <Link className="profile-link" to="/profile">
          <p>Profile</p>
        </Link>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  </div>
)

export default Header
