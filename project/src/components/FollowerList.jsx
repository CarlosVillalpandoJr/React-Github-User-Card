import React from 'react';

const FollowerList = props => {
    console.log('FollowerList Props', props)
    return (
        <>
            <h3>Followers</h3>
            <div className='follower-list'>
                {props.followerData.map((follower, index) => {
                    return (
                    <div className='follower-card' key={follower.id}>
                        <img src={follower.avatar_url} />
                        <h4>{follower.login}</h4>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default FollowerList;