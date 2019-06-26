import React from 'react';
import './Friends.css';

function Friends(props) {
    return (
        <div className="itemsContainer">
            {props.friends.map(friend => {
                return (
                    <div className="friendItem">
                        <div className="friendName">Name: {friend.name}</div>
                        <div className="friendID">ID: {friend.id}</div>
                        <div className="friendAge">Age: {friend.age}</div>
                        <div className="friendEmail">Email: {friend.email}</div>
                        <div className="friendCRUD">
                            <button className="update">Update</button>
                            <button className="delete">Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Friends;