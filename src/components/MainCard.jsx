import { main_content } from "../static/data"
import '../css/maincard.css'

export default function MainCard(){
    return(
        <div className="main">

        {main_content.map((content) => (
            <>
          <div className="main-card" key={content.id}>
              <div className="profile-alignment">
                <img className = 'profile' src = {`../images/profile/${content.profile}`} />
                <div className = 'user-details-alignment'>
                    <p className = 'name'>{content.name}</p>
                    <p className = 'username'>{content.username}</p>
                </div>
                <div className = 'profile-menu'></div>
                <div className = 'profile-menu'></div>
                <div className = 'profile-menu'></div> 
              </div>
              <div className="description">
                <p className = 'text'>{content.description}<span style={{color: '#FF5E8A'}}>Read More</span></p>
              </div>
              <div className= "likes">
                <img className = 'white-heart' src = '../images/icons/heart-white.svg'/>
              </div>
              <div className = 'background-image'>
                <img className = 'main-image' src = {`../images/main/${content.image}`} />
              </div>
              
              <div className="divider"></div>
              <div className = 'other-users-interests'>
                <img src = '../images/icons/heart-black.svg' className = 'users-likes'/>
                <p className = 'likes-no'>9.8k</p>
                <img src = '../images/icons/comment.svg' className = 'users-comment'/>
                <p className = 'comment-no'>8.6k</p>
                <img src = '../images/icons/share.svg' className = 'users-share'/>
                <p className = 'share-no'>7.2k</p>
              </div>
          </div>
          
          
          </>
        ))}
        </div>

    )
}