import React from 'react'
import MenuCard from './MenuCard'
import BurgerImg from '../../assets/burger1.png'
import BurgerImg1 from '../../assets/burger2.png'
import BurgerImg2 from '../../assets/burger3.png'
const Menu = () => {
  const AddtoCartHandler = (itemNum)=>{

  }
  return (
    <>
      <section id='menu'>
        <h1>MENU</h1>
        <div>
          <MenuCard 
           imgSrc={BurgerImg}
           price={200}
           itemNum={"Item 1"} 
           title="Cheese burger"
           delay={0.1}
           handler={AddtoCartHandler}/>
           <MenuCard 
           imgSrc={BurgerImg1}
           price={500}
           itemNum={"Item 2"} 
           delay={0.3}
           title="Veg Cheese burger"
           handler={AddtoCartHandler}/>
           <MenuCard 
           imgSrc={BurgerImg2}
           price={800}
           delay={0.7}
           itemNum={"Item 3"} 
           title="Cheese burger with french fries"
           handler={AddtoCartHandler}/>
        </div>
      </section>  
    </>
  )
}

export default Menu