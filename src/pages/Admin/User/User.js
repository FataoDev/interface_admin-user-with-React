import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { userService } from '@/_services/user_service';


const User = () => {
    //let navigate = useNavigate();
    const [users,setUsers]=useState([])
    const flag = useRef(false)


    useEffect(()=>{   
        if(flag.current===false){
            userService.getAllUsers()
            .then(res => {
                console.log(res.data.data)
                setUsers(res.data.data)
            })
            .catch(err => console.log(err))
        }
        return ()=> flag.current=true
    },[])

    // const infos =(userId)=>{
    //     navigate("../edit/" +userId)
    // }
    return (
        <div className='User'>
            User List <br/>
            {/* <button onClick={()=>infos(2)}>User 2</button>
            <button onClick={()=>infos(3)}>User 3</button>
            <button onClick={()=>infos(4)}>User 4</button> */}
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // eslint-disable-next-line array-callback-return
                        users.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.nom}</td>
                                <td>{user.prenom}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;