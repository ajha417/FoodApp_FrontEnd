import React from 'react'
import {motion} from "framer-motion"
const MenuCard = ({imgSrc,price,itemNum,title,handler,delay}) => {
  return (
    <motion.div className='menuCard'
        initial={{x:"-100%",opacity:0}}
        whileInView = {{x:0,opacity:1}}
        transition={{delay}}
    >
        <div>{itemNum}</div>
        <main>
            <img src={imgSrc} alt={itemNum} />
            <h5>₹ {price}</h5>
            <p>{title}</p>
            <button onClick={()=>handler(itemNum)}>Buy now</button>
        </main>
    </motion.div>
  )
}

export default MenuCard