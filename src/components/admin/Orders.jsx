import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
import {GiArmoredBoomerang} from "react-icons/gi"


const Orders = () => {
    const arr = [1,2,3,4]
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
                        <th>Users</th>
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
                        <td>Rohit</td>
                        <td>
                            <Link to={`/order/${"adsffdf"}`}><AiOutlineEye/></Link>
                            <button>
                                <GiArmoredBoomerang/>
                            </button>
                        </td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default Orders