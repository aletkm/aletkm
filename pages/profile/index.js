import react from 'react';
import Agreements from './agreements';
import { 
    MdLiveHelp
 } from "react-icons/md";

 import {
    FaHome,
    FaUserAlt,
    FaEnvelope,
    FaHandshake,
    FaKey,
    FaShoppingCart,
    FaClipboard,

 } from 'react-icons/fa';

const Profile = () =>{

return(

     
    <div className="row bg-transparent">
    <div className="col-3 bg-transparent">
        <div className="nav flex-column nav-pills bg-transparent" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a className="list-group-item list-group-item-action active" id="v-pills-account-tab" data-toggle="pill" href="#v-pills-account" role="tab" aria-controls="v-pills-account" aria-selected="true"><FaHome size="30px"/> ACCOUNT OVERVIEW</a>
        <a className="list-group-item list-group-item-action" id="v-pills-detail-tab" data-toggle="pill" href="#v-pills-detail" role="tab" aria-controls="v-pills-detail" aria-selected="false"><FaUserAlt size="30px" /> ACCOUNT DETAILS</a>
        <a className="list-group-item list-group-item-action" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><FaEnvelope size="30px" /> MESSAGES</a>
        <a className="list-group-item list-group-item-action" id="v-pills-pswsec-tab" data-toggle="pill" href="#v-pills-pswsec" role="tab" aria-controls="v-pills-pswsec" aria-selected="false"><FaKey size="30px" /> PASSWORD & SECURITY</a>
        <a className="list-group-item list-group-item-action" id="v-pills-agreements-tab" data-toggle="pill" href="#v-pills-agreements" role="tab" aria-controls="v-pills-agreements" aria-selected="false"><FaHandshake size="30px" /> AGREEMENTS</a>
        <a className="list-group-item list-group-item-action" id="v-pills-history-tab" data-toggle="pill" href="#v-pills-history" role="tab" aria-controls="v-pills-history" aria-selected="false"><FaShoppingCart size="30px"/> TRANSACTION HISTORY</a>
        <a className="list-group-item list-group-item-action" id="v-pills-content-tab" data-toggle="pill" href="#v-pills-content" role="tab" aria-controls="v-pills-content" aria-selected="false"><FaClipboard size="30px" /> CONTENT CREATOR</a>
        <a className="list-group-item list-group-item-action" id="v-pills-help-tab" data-toggle="pill" href="#v-pills-help" role="tab" aria-controls="v-pills-help" aria-selected="false"><MdLiveHelp size="30px" /> NEED HELP?</a>
        </div>
    </div>
    <div className="col-9 bg-transparent">
        <div className="tab-content " id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="v-pills-account" role="tabpanel" aria-labelledby="v-pills-account-tab">...account...</div>
        <div className="tab-pane fade" id="v-pills-detail" role="tabpanel" aria-labelledby="v-pills-detail-tab">...detail...</div>
        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...Mensagens...</div>
        <div className="tab-pane fade" id="v-pills-pswsec" role="tabpanel" aria-labelledby="v-pills-pswsec-tab">...Password...</div>
        <div className="tab-pane fade" id="v-pills-agreements" role="tabpanel" aria-labelledby="v-pills-agreements-tab"><Agreements /></div>
        <div className="tab-pane fade" id="v-pills-history" role="tabpanel" aria-labelledby="v-pills-history-tab">...History...</div>
        <div className="tab-pane fade" id="v-pills-content" role="tabpanel" aria-labelledby="v-pills-content-tab">...Content...</div>
        <div className="tab-pane fade" id="v-pills-help" role="tabpanel" aria-labelledby="v-pills-help-tab">...Help...</div>
        </div>
    </div>
    </div>

  

)
}

export default Profile;