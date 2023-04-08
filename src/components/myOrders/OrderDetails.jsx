import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"Rajkot Tramba 360020"}
                </p>
            </div>
            <div>
                <h1>Contact Details</h1>
                <p>
                    <b>Name</b>
                    {"Amit Kumar Jha"}
                </p>
                <p>
                    <b>Contact no:</b>
                    {8799463393}
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Preparing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"29-03-2023"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"06-04-2023"}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    #{"34lkjaflk3faldsjk"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"06-04-2023"}
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    ₹ {7640}
                </p>
                <p>
                    <b>Shipping Charge</b>
                    ₹ {40}
                </p>
                <p>
                    <b>Total Amount</b>
                    ₹ {7640+40}
                </p>
                
            </div>

            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Cheese burger</h4>
                    <div>
                        <span>{6}</span> x <span>{220}</span>
                    </div>
                </div>
                <div>
                    <h4>Veg Cheese burger</h4>
                    <div>
                        <span>{2}</span> x <span>{200}</span>
                    </div>
                </div>
                <div>
                    <h4>Cheese burger with Fries</h4>
                    <div>
                        <span>{4}</span> x <span>{420}</span>
                    </div>
                </div>
                <div>
                    <h4 style={{fontWeight:800}}>Sub Total</h4>
                    <div style={{fontWeight:800}}>₹{4578}</div>
                </div>
            </article>
        </main>
    </section>
  )
}

export default OrderDetails