import React from 'react';

import './menu-item.style.scss';

const MenuItem = ({title,img,size})=>(
<div  className={`${size} menu-item`}>
<div className = 'background-image' style= {{backgroundImage:`url(${img})`}}/>
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)
export default MenuItem