import './index.css'

const Posts = (props)=>{
    const {postDetailsItems} = props
    const {comments,
        createdAt,
        likesCount,
        postDetails,
        postId,
        profilePic,
        userId,
        userName,
    createdAt} = postDetailsItems
    return(
        <li className="post-li-container">
            <div className="post-upper-container">
                <img src={profilePic} alt="post author profile" className="post-user-profile-img"/>
                <p>{userName}</p>
            </div>

            <img src={postDetails.image_url} alt="post" className="post-img"/>
            <div className="post-lower-container">
            <div>
                <button type="button" className="like-button"><BsHeart size={30}/></button>

            </div>

            </div>
        </li>
    )
}

export default Posts