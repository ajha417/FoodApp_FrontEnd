import React from 'react'
import {AiFillLinkedin,AiFillInstagram,AiFillFacebook,AiFillGithub} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>GoFoodes:The taste for everyone</h2>
        <p>We are focused towared the healthy and tasty food items</p>
        <br />
        <em>We look forward for genuine feedback</em>
        <strong>All rights reserved &copy; GoFoodies Pvt. Ltd.</strong>
      </div>
      <aside>
        <h4>Follow us on</h4>
        <a href="https://www.instagram.com"><AiFillInstagram/></a>
        <a href="https://www.facebook.com"><AiFillFacebook/></a>
        <a href="https://www.github.com"><AiFillGithub/></a>
        <a href="https://www.linkedin.com"><AiFillLinkedin/></a>
      </aside>
    </footer>
  )
}

export default Footer