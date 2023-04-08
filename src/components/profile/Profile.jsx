import React from 'react'
import { motion } from 'framer-motion'
import me from '../../assets/MyImg.jpeg'
import { Link } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'

const Profile = () => {
    const option = {
        initial:{
            x:"-100%",
            opacity:0
        }
        ,
        animate:{
            x:0,
            opacity:1
        }
    }
  return (
    <section className='profile'>
        <main>
            <motion.img src={me} alt="User profile" {...option} transition={{delay:0.3}}/>
            <motion.h5 {...option} transition={{delay:0.3}}>
                Amit Kumar Jha
            </motion.h5>
            <motion.div {...option} transition={{delay:0.3}}>
                <Link to="/admin/dashboard"
                    style={{borderRadius:0,backgroundColor:"rgb(40,40,40)"}}
                ><MdDashboard/>
                    Dashboard</Link>
            </motion.div>
            <motion.div 
                initial={{x:"-100vw",opacity:0}}
                animate={{x:0,opacity:1}}>
                    <Link to="/myorders"

                    >My Orders</Link>
            </motion.div>
            <motion.button
            initial={{x:"-100vw",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{delay:0.3}}
            >
                    Logout
            </motion.button>
        </main>

    </section>
  )
}

export default Profile