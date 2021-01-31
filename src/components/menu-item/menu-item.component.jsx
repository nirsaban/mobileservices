import React from 'react';
import { withRouter} from 'react-router-dom'
import './menu-item.style.scss';

const MenuItem = ({title,imageUrl,size,linkUrl,match,history})=>
 {

 
return(<div  className={`${size} menu-item`}>
<div className = 'background-image' style= {{backgroundImage:`url(${imageUrl})`}} onClick ={()=>history.push(`${match.url}${linkUrl}`)}/>
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle' >SHOP NOW</span>
      
    </div>
  </div>
)}
export default withRouter(MenuItem)