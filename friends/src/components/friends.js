import React from 'react';

function Friends(props) {
    return (
        <div>
            {props.friends.map(friend => {
                return <p>{friend.name} is my number {friend.id} friend and he is {friend.age} years old. You can reach him at {friend.email}</p>
            })}
        </div>
    );
};

export default Friends;