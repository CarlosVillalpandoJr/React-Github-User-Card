import React from 'react';

const UserCard = props => {
    // console.log('UserCard Props: ', props)
    return (
        <>
            <div className='user-card'>
                <img src={props.userData.avatar_url} />
                <h3>{props.userData.name} | {props.userData.login}</h3>
                <p>{props.userData.bio}</p>
                <p>Following: {props.userData.following}<br></br>Followers: {props.userData.followers}</p>
            </div>
        </>
    )
}

export default UserCard;