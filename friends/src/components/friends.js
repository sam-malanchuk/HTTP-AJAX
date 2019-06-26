import React from 'react';
import './Friends.css';

function Friends(props) {
    function deleteItem() {
        console.log("item should delete");
    };
    function updateItem() {
        console.log("item should update");
    };
    return (
        <div className="itemsContainer">
            {props.friends.map(friend => {
                return (
                    <div className="friendItem" key={friend.id}>
                       <div className="friendContent">
                            <div className="friendName">{friend.name}</div>
                            <div className="friendID">ID: {friend.id}</div>
                            <div className="friendAge">Age: {friend.age}</div>
                            <div className="friendEmail">{friend.email}</div>
                        </div>
                        <div className="friendCRUD">
                            <div className="update" onClick={updateItem}>Update</div>
                            <div className="delete" onClick={deleteItem}>Delete</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Friends;