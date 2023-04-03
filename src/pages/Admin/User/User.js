import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    let navigate = useNavigate();

    const infos =(userId)=>{
        navigate("../edit/" +userId)
    }
    return (
        <div className='User'>
            User List <br/>
            <button onClick={()=>infos(2)}>User 2</button>
            <button onClick={()=>infos(3)}>User 3</button>
            <button onClick={()=>infos(4)}>User 4</button>
        </div>
    );
};

export default User;