import './index.css'
import {Link} from 'react-router-dom'
import {BsHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {MdShare} from 'react-icons/md'
import {FcLike} from 'react-icons/fc'

const Posts = props => {
  const {postDetailsItems, onLikeClicked, isLiked} = props

  const onLiked = () => {
    onLikeClicked()
  }

  const {
    comments,
    createdAt,
    likesCount,
    postDetails,
    profilePic,
    userId,
    userName,
  } = postDetailsItems
  return (
    <li className="post-li-container" key={userId}>
      <Link to={`/users/${userId}`}>
        <div className="post-upper-container">
          <img
            src={profilePic}
            alt="post author profile"
            className="post-user-profile-img"
          />
          <p className="post-username">{userName}</p>
        </div>
      </Link>
      <div className="post-img">
        <img
          src={postDetails.image_url}
          alt="post"
          className="user-post-image"
        />
      </div>

      <div className="post-lower-container">
        <div className="social-button-container">
          {isLiked ? (
            <button type="button" className="social-buttons" onClick={onLiked}>
              <FcLike size={25} />
            </button>
          ) : (
            <button type="button" className="social-buttons" onClick={onLiked}>
              <BsHeart size={25} />
            </button>
          )}
          <button type="button" className="social-buttons">
            <FaRegComment size={25} />
          </button>
          <button type="button" className="social-buttons">
            <MdShare size={25} />
          </button>
        </div>
        {isLiked ? (
          <p className="post-likes">{likesCount + 1} likes</p>
        ) : (
          <p className="post-likes">{likesCount} likes</p>
        )}
        <ul className="comment-container">
          {comments.map(eachItem => (
            <li className="post-comments">
              <span className="span-element">{eachItem.user_name} </span>
              {eachItem.comment}
            </li>
          ))}
        </ul>
        <p className="time">{createdAt}</p>
      </div>
    </li>
  )
}

export default Posts
