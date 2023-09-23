import React from 'react'
import { Tooltip } from 'react-tooltip'

import "./ToolTip.css"
const ToolTip = ({ position}) => {
  return <>
       <div id='tooltip'>
       <a
  data-tooltip-id="my-tooltip"
  data-tooltip-content="Thanks For Hovering Me "
  data-tooltip-place={position}
   
>
  Please Hover Me !
</a>
<Tooltip id="my-tooltip" />
       </div>
  
  </>
}

export default ToolTip
