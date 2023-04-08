import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
const MyOrders = () => {
    const arr = [1,2,3,4,5];
  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map(i=>(
                            <tr key={i}>
                        <td>#sfad3423dsf</td>
                        <td>Processing</td>
                        <td>{23}</td>
                        <td>₹{5400}</td>
                        <td>COD</td>
                        <td><Link to={`/order/${"adsffdf"}`}><AiOutlineEye/></Link></td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default MyOrders