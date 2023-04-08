/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import BurgerImg from '../../assets/burger1.png'
import BurgerImg1 from '../../assets/burger2.png'
import BurgerImg2 from '../../assets/burger3.png'

const CartItems = ({title,increment,decrement,img,value})=>(
    <div className='cartItem'>
        <div>
            <h4>{title}</h4>
            <img src={img} alt="Item image" />
        </div>
        
        
        <div>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value}/>
            <button onClick={increment}>+</button>
        </div>
    </div>
)

const Cart = () => {
    const increment = (item)=>{

    }
    const decrement = (item)=>{

    }
  return (
    <section className='cart'>
        <main>
            <CartItems 
                title={"Cheese Burger"}
                img={BurgerImg}
                value={0}
                increment={()=>increment(1)}
                decrement={()=>decrement(1)}
            />
            <CartItems 
                title={"Veg Cheese Burger"}
                img={BurgerImg1}
                value={0}
                increment={()=>increment(1)}
                decrement={()=>decrement(1)}
            />
            <CartItems 
                title={"Cheese Burger with fries"}
                img={BurgerImg2}
                value={0}
                increment={()=>increment(1)}
                decrement={()=>decrement(1)}
            />
        <article>
            <div>
                <h4>Sub Total</h4>
                <h5>₹ {2000}</h5>
            </div>
            <div>
                <h4>Shipping Charge</h4>
                <h5>₹ {70}</h5>
            </div>
            <div>
                <h4>Total</h4>
                <h5>₹ {2000+70}</h5>
            </div>
            <Link to='/shipping'>Checkout</Link>
        </article>
        </main>

    </section>
  )
}

export default Cart