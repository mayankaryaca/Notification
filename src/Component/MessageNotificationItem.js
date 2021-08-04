import React from 'react';
import  '../Styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';



function MessageNotificationItem(props){
   
    const formatDate = (date) => {
        const dateVar = new Date(date); 
        
        return new Intl.DateTimeFormat("en", {
            year: "numeric",
            month: "long",
            day: "2-digit"
          }).format(dateVar);
    }

    return (
        <div className='message'>
            <p className='notification-header inline'>Message</p>
            <p className='date '>{formatDate(props.item.date)}</p>
            <div className='notification-item-grid-container'>
            <p className='notification-item'>From : </p>
            <p className='notification-item'>{props.item.from}</p>
            <p className='notification-item'>Message : </p>
            <p className='notification-item message-item'>{props.item.message}</p> 
           
            </div>
            <LazyLoadImage
                className="message-image"
                effect="blur"
                src={"https://images.unsplash.com/photo-1533750446969-255bbf191920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1324&q=80"} />
        </div>
    );

}
export default MessageNotificationItem;

