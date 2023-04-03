import React from 'react';
import { useParams } from 'react-router-dom';

const UserEdit = () => {
    let {uid} = useParams();
    console.log(uid);
    return (
        <div className='UserEdit'>
            Modifier un utilisateur
        </div>
    );
};

export default UserEdit;