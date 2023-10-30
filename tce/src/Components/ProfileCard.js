import React from 'react'
import './ProfileCard.css'
export default function ProfileCard(props){
    return(
        <>
            <div className="profile-card-box">
                <img src="https://wallpapercave.com/wp/wp2460331.jpg" alt="" />
                <div>
                    <ul>
                        <li><h1>{props.name}</h1></li>
                        <li>
                            <span>USN : {props.usn}</span>
                            <span>Email : {props.email}</span>
                        </li>
                        <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex soluta delectus nesciunt exercitationem quis maxime laudantium debitis ipsum itaque!</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}