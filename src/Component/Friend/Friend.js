import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    {/* use History hook */}
    const History = useHistory();
    const handelNav = (id) =>{
      const url = `/friend/${id}`;
      History.push(url);
    }
     {/* end use History hook */}
    const friendStyle = {
        border:'1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius:'20px'
    }
    return (
        <div style={friendStyle}>
           <h2>name:{name}</h2>
            <p>email:{email}</p>
             {/* dynamic path according to id. It shows in the bar and in app.js, it's load the page according this route */}
            <p>id:<Link to={`/friend/${id}`}>this is {id}</Link></p> 
            {/* another way of routing. use useHistory routing hook */}
            <button onClick={()=>handelNav(id)}>click me</button>

        </div>
    );
};

export default Friend;