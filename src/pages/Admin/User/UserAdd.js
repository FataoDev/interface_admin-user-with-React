import React,{useState,useNavigate} from 'react';
import {userService} from '@/_services'

const UserAdd = () => {
    // let navigate=useNavigate()
    const [user,setUsers]=useState([])
    // const [user,setUsers]=useState({
    //     nom:'',
    //     prenom:'',
    //     pseudo:'',
    //     email:'',
    //     password:''
    // })

    const onChange=(e)=>{
        setUsers({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //  // Soumission du formulaire
    //  const onSubmit=(e)=>{
    //     e.preventDefault()
    //     // console.log(user)
    //     // userService.updateUser(user)
    //     // .then(res => {
    //     //     navigate('../index')
    //     // })
    //     // .catch(err => console.log(err))
    // }


    return (
        <div className='UserAdd'>
            Ajouter un utilisateur

            <form>
                <div className='group'>
                    <label htmlFor='login'>Nom</label>
                    <input type='Text' name='nom' value={user.nom} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='login'>Prénom</label>
                    <input type='Text' name='prenom' value={user.prenom} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='login'>Pseudo</label>
                    <input type='Text' name='pseudo' value={user.pseudo} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='login'>Email</label>
                    <input type='Text' name='email' value={user.email} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='login'>Password</label>
                    <input type='Password' name='password' value={user.password} onChange={onChange}/>
                </div>
                 <div className='group'>
                     <button>Modifier</button>
                 </div>
            </form>
        </div>
    );
};

export default UserAdd;