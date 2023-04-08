import React from 'react'
import { motion } from 'framer-motion'
import me2 from '../../assets/MyImg.jpeg'
const Founder = () => {
    const option ={
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        }
    }
  return (
    <>
      <section className='founder'>
        <motion.div {...option}>
            <img src={me2} alt="founderimage" width={200} height={200}/>
            <h3>Amit Jha</h3>
            <p>Hello everyone! Welcome to GoFoodies:The taster for everyone</p><br />
        </motion.div>

      </section>
    </>
  )
}

export default Founder