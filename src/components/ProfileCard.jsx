import { profile_card } from "../static/data"
import '../css/profilecard.css'

export default function ProfileCard(){
    return(
            <div className = 'profile-card-terms-policy'>
                <div className = 'profile_card'>
                <div class = 'roles'>
                    <p className = 'artists'>Artists</p>
                    <p className = 'photographers'>Photographers</p>
                </div>
                
                {profile_card.map((card) => (
                    <div className="card" key={card.id}>
                        <div className= "content-absolute">
                            <div className= 'profile_alignment'>
                                <img className="profile-card-img" src = {`../public/images/profile/${card.profile}`} />
                                <div className = 'online'></div>
                                <div className="name_alignment">
                                    <p className="icon_name">{card.name}</p>
                                    <p className="icon_username">{card.username}</p>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className = 'background-relative'>
                            <img className="profile-card-background" src = {`../public/images/main/${card.background}`} />
                        </div>
                        
                    </div>
                ))}
                </div>

                <div className = 'terms-policy'>
                    <p className = 'terms-policy-text'>Privacy TermsofService CookieNotice</p>
                </div>

            </div>
      
    )
}