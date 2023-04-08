import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceFill} from 'react-icons/ri'
import me from "../../assets/MyImg.jpeg"

const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>
            <article>
                <h4>GoFoodies: The place for foodies</h4>
                <p>We are GoFoodies. We provide the best test and
                    out motto is taste with health.
                </p>
                <p>Explore various types of food and snacks. Click below to 
                    see the various items.
                </p>
                <Link to='/'>
                    <RiFindReplaceFill/>
                </Link>
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                <div>
                    <img src={me} alt="founder photo"/>
                    <h3>Amit Kumar Jha</h3>
                </div>
                <p>I am Amit Kumar Jha, founder of GoFoodies. Affiliate to 
                    taste with health...
                </p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About