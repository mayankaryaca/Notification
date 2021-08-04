import React from 'react';
import  '../Styles.css';


function ContractNotificationItem(props){
    const formatDate = (date) => {
        const dateVar = new Date(date); 
        
        return new Intl.DateTimeFormat("en", {
            year: "numeric",
            month: "long",
            day: "2-digit"
          }).format(dateVar);
          
    }
    return (
        <div className='contract'>
            <p className='notification-header'>Contract</p>
            <div className='notification-item-grid-container'>
            <p className='notification-item'>Sender : </p>
            <p className='notification-item'>{props.item.sender}</p>
            <p className='notification-item'>Reciever : </p>
            <p className='notification-item'>{props.item.receiver}</p>
            <p className='notification-item'>Expiring on : </p>
            <p className='notification-item'>{formatDate(props.item.expiration_date)}</p> 
            </div>
          
        </div>
    );

}
export default ContractNotificationItem;

