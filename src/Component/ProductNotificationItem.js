import React from 'react';
import  '../Styles.css';


function ProductNotificationItem(props){

    const formatDate = (date) => {
        const dateVar = new Date(date); 
        
        return new Intl.DateTimeFormat("en", {
            year: "numeric",
            month: "long",
            day: "2-digit"
          }).format(dateVar);
    }
 
    return (
        <div className='product'>
            <p className='notification-header inline'>PRODUCT</p>
            <p className='date '>{formatDate(props.item.created_at)}</p>
            <div className='notification-item-grid-container'>
            <p className='notification-item'>Product Id : </p>
            <p className='notification-item message-item'>{props.item.product_id}</p>
            <p className='notification-item'>Type : </p>
            <p className='notification-item'>{props.item.product_type}</p>
            <p className='notification-item'>Number : </p>
            <p className='notification-item'>{props.item.vin}</p>   
            </div>
          
        </div>
    );

}
export default ProductNotificationItem;

