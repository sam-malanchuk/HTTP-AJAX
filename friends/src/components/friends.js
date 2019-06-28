import React from 'react';
import { Link } from 'react-router-dom';
import './Friends.css';

function Friends(props) {
    return (
        <div className="itemsContainer">
            {props.friends.map(friend => {
                return (
                    <div className="friendItem" key={friend.id}>
                       <div className="friendContent">
                            <div className="friendName">{friend.name}</div>
                            <div className="friendID">ID #{friend.id}</div>
                            <div className="friendAge">Age: {friend.age}</div>
                            <div className="friendEmail">{friend.email}</div>
                        </div>
                        <div className="friendCRUD">
                            <Link to={`/edit/${friend.id}`} className="update">Update</Link>
                            <Link to={`/delete/${friend.id}`} className="delete">Delete</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Friends;