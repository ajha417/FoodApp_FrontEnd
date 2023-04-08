import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <section className='paymentSuccess'>
        <main>
            <h1>Order Confirmed</h1>
            <p>Congratulation!!! Your order placed successfully. You can track your order
                status below.
            </p>
            <Link to="/myorders">Check Orders</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess