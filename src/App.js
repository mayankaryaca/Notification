import './App.css';
import React, { useEffect, useState } from 'react';
import './Styles.css';
import Header from './Component/HeaderComponent';
import { CircularProgress } from '@material-ui/core';
import Footer from './Component/FooterComponent';
import Notification from './Component/NotificationComponent';

function App() {
  const [userToken,setUserToken] = useState(localStorage.getItem('adminToken'));
  const [userName,setUserName] = useState('Admin');
  const [notificationData,setNotificationData] = useState([]);
  const [loading,setLoading] = useState(true);


  const getUserToken = (data) => {
    setUserToken(data);
  }
  const getUserName = (data) => {
    setUserName(data);
  }

  const fetchNotification = (token) => {
    let myHeaders = new Headers();
    myHeaders.append("x-api-key", "AJalp94dfG14ju70pLJhzD0Hzpp7oOZ5egTmTEC1");
    myHeaders.append("Authorization", `Bearer ${token}`);

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://cors-anywhere.herokuapp.com/https://7ktgzkl5ce.execute-api.us-east-1.amazonaws.com/prod/notifications", requestOptions)
    .then(response => response.json())
    .then((result) => {
        setNotificationData(result);
        setLoading(false);
      myHeaders = new Headers();
    }).catch((error) => {
      console.log('API Error', error)
      setNotificationData([]);
      setLoading(false);
    });
     
  }

 useEffect(() => {fetchNotification(userToken)},[userToken]);


  return (
    <div>
    <Header selectedUserToken={getUserToken} selectedUserName={getUserName}/>
      {
       loading ?     <CircularProgress />
       :  <div className='notification-list-container'>
      <Notification user={userName} data={notificationData}/>
          </div>
     }

     <Footer />
 
    </div>
  );
}

export default App;
