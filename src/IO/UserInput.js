import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.usernameHandler}/>
        </div>
    );
};

export default userInput;