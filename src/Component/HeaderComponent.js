import React, { useEffect, useState } from 'react';
import  '../Styles.css';

function Header(props){
    const [userData,setUserData] = useState([]);

    localStorage.setItem('adminToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6IkFETUlOIn0.hR8qytQy9l75YMCW9k9wDYOVJk4qG-qyHC7jqX0I0Ig');
    localStorage.setItem('foreignCustomerToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6IkZPUkVJR04ifQ.iTlQm0tUOJ4Boz72mOtsu3MXOgu7BOtR2dOG6xGSy00');
    localStorage.setItem('domesticCustomerToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6IkRPTUVTVElDIn0.OdCKqt8b3WpWe5mPt5GwdxapSilObJv9p_JyxZwW17w');
    
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "AJalp94dfG14ju70pLJhzD0Hzpp7oOZ5egTmTEC1");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const fetchUsers = (token) => {
        myHeaders.append("Authorization", `Bearer ${token}`);
    
        fetch("http://cors-anywhere.herokuapp.com/https://7ktgzkl5ce.execute-api.us-east-1.amazonaws.com/prod/users", requestOptions)
        .then(response => response.json())
        .then((result) => {
          myHeaders = new Headers();
          setUserData(result);
          document.getElementById(`login0`).classList.add('is-active');
        })
        .catch(error => console.log('error', error));
    }

    useEffect( () => {  
        fetchUsers(localStorage.getItem('adminToken'));
    },[]);
  
    const activeLogin = (user) => {
        toggleButtonClass(user);
        if(user === userData[0].name){
            //Admin
            props.selectedUserToken(localStorage.getItem('adminToken'));
        }else if (user === userData[1].name){
            //Domestic
            props.selectedUserToken(localStorage.getItem('domesticCustomerToken'));            
        }else if( user === userData[2].name){
            // International 
            props.selectedUserToken(localStorage.getItem('foreignCustomerToken'));            
        }
        props.selectedUserName(user);   
    }
  

    const toggleButtonClass = (user) => {
        userData.forEach((item) => {
            // console.log(item.id)
            if(item.name === user){
                document.getElementById(`login${item.id}`).classList.add('is-active');
            }else{
                document.getElementById(`login${item.id}`).classList.remove('is-active');
            }
        })

   }

 
    return (
        <header className="header"> 
            <p className='text-header'>Mavennet Front End Assignment</p>
            <div className='login-header'>
                {
                   userData.map((item) => {
                        return <button key={item.id} id={`login${item.id}`} onClick={ () => activeLogin(`${item.name.trim()}`)}>{item.name}</button>
                    })  
                }
            </div>
        </header>
    );

}


export default Header;