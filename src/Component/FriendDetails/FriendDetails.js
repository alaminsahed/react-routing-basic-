import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
     {/* {id} have to the same in the app.js.. useParams catch the data from path. it can be used after */}
    const {id} = useParams();
    const [friend, setFriends] = useState({}); {/* {} instead of [] cause get object not array. check in the json link */}
   useEffect(()=>{
       {/* dynamic url. use `` $ {} */}
       const url = `https://jsonplaceholder.typicode.com/users/${id}` 
       fetch(url)
       .then(res=>res.json())
       .then(data=> setFriends(data));
   })
    return (
        <div>
            <h1>this is friend details:{id}</h1>
            <h2>name:{friend.name}</h2>
        </div>
    );
};

export default FriendDetails;