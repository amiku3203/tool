import React from 'react'
import { useState } from 'react'

import "./ToolTipPostions.css"
import ToolTip from './ToolTip'
const ToolTipPostions = () => {
  const [position,setPostion]=useState("top");

  return <>
     <select  className='SelectedValueButton'  value={position} onChange={(e)=>setPostion(e.target.value)}>
       <option value="top">Top</option>
       <option value="left">Left</option>
       <option value="right">Right</option>
       <option value="bottom">Bottom</option>
     </select>
  
   <ToolTip  position={position} />
  
  </>
}

export default ToolTipPostions
