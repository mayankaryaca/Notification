import React, { useEffect, useState} from 'react';
import ContractNotificationItem from './ContractNotificationItem';
import MessageNotificationItem from './MessageNotificationItem';
import NoNotifications from './NotAvailableNotificationsComponent';
import ProductNotificationItem from './ProductNotificationItem';
import { Checkbox, CircularProgress, FormControlLabel, FormGroup } from '@material-ui/core';


function Notification(props){
    const [hasData, setHasData] = useState(false);
    const [loading,setLoading] = useState(true);
    const [canFilter, setCanFilter] = useState(false);
    const [filterMessages,setFilterMessages] = useState(true);
    const [filterProducts,setFilterProducts] = useState(true);
    const [filterContracts,setFilterContracts] = useState(true);

    const initializeNotifications = () => {
        if(props.data.length < 1 || props.data === undefined ){
            setHasData(false);
            setLoading(false);
        }else{
            setLoading(false);
            setHasData(true);
        }

        if(props.user.includes("Admin")){
            setCanFilter(true);
        }else{
            setCanFilter(false);
        }
    }

    const filterHandler = () => {
        if(filterContracts || filterProducts || filterMessages){
            setHasData(true)
        }else{
            setHasData(false)
        }
    }

    useEffect(() => { 
        initializeNotifications();
        setFilterMessages(true);
        setFilterProducts(true);
        setFilterContracts(true);
    },[props]);

    useEffect((filterHandler),[filterMessages,filterProducts,filterContracts]);


    return (
        <section>
        <div>
            <p className='notification-type-header'>Notifications</p>
            {
                canFilter ? <div >
                    <FormGroup row={true} >
                        <FormControlLabel  
                            control={<Checkbox checked={filterContracts}  onChange={() => {
                                setFilterContracts(!filterContracts);
                            }} name="contracts" style={{
                                transform: "scale(.7)",
                            }}/>}
                            label={<span>Contracts</span>}
                        />
                        <FormControlLabel className='filter-item'
                            control={<Checkbox checked={filterProducts} onChange={() => {
                                setFilterProducts(!filterProducts);
                            }} name="products" style={{
                                transform: "scale(.7)",
                            }}/>}
                            label={<span>Products</span>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={filterMessages} onChange={() => {
                                setFilterMessages(!filterMessages);
                            }} name="messages" style={{
                                transform: "scale(.7)",
                            }} />}
                            label={<span>Messages</span>}
                        />
                        </FormGroup>

                </div> : <></>
            }
      
                </div>
                { loading ?  <CircularProgress /> :
                        <div className='notificationcontainer'>
                        { hasData ? <div></div> : <NoNotifications message/> }
                        { 
                            props.data.map((item) => {
                                if(item.notification_type === 'NEW_MESSAGE' && filterMessages){
                                    return <MessageNotificationItem key={item.notification_id} className='card' item={item}/>

                                }else if( item.notification_type === 'NEW_CONTRACT' && filterContracts){
                                    return <ContractNotificationItem key={item.notification_id} className='card' item={item} />

                                }else if (item.notification_type === 'NEW_PRODUCT' && filterProducts){
                                    return <ProductNotificationItem key={item.notification_id} className='card' item={item} />
                                }
                            })
                        }


                </div>
                }
        </section>
    );

}
export default Notification;
