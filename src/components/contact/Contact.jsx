import React from 'react'
import {motion} from 'framer-motion'
import burger from '../../assets/burger2.png'
const Contact = () => {
  return (
    <>
      <section className='contact'>
        <motion.form
        initial={{x:"-100vh",opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{delay:0.5}}
        >
            <h3>Contact us</h3>
            <input type="text" name="name" id="name" placeholder='Enter your name' />
            <input type="email" name="email" id="email" placeholder='Email' />
            <textarea name="message" id="message" placeholder='Message' cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
        </motion.form>
        <motion.div className='formBorder'
        initial={{x:"100vh",opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{delay:0.5}}
        >
            
            <motion.div
            initial={{y:"-100vh",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:1}}
            >
                <img src={burger} alt="BurgerImage" />
            </motion.div>

        </motion.div>
      </section>
    </>
  )
}

export default Contact