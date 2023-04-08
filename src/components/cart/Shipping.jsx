import React from 'react'
import {Country,State} from 'country-state-city'
const Shipping = () => {
  return (
    <section className='shipping'>
        <main>
            <h1>Shipping Details</h1>
            <form>
                <div>
                    <label>House No.</label>
                    <input type="text" placeholder="Enter house number:" name="HouseNo" id="HouseNo" />
                </div>
                <div>
                    <label>Country</label>
                    <select>
                     <option value="">Select Country</option>
                     {
                         Country && Country.getAllCountries().map(i=>(
                             
                             <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                        ))
                     }
                    </select>
                </div>
                <div>
                    <label>State</label>
                    <select>
                     <option value="">Select State</option>
                     {
                         State && State.getStatesOfCountry("IN").map(i=>(
                            <option value={i.isoCode} key={i.isoCode}>{i.name}</option>

                        ))
                     }
                    </select>
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" name="city" id="city" placeholder="Enter City name:" />
                </div>
                <div>
                    <label>Pincode:</label>
                    <input type="number" name="pincode" id="pincode" placeholder="Enter pincode:" />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="number" name="phonenum" id="phonenum" placeholder="Enter Phone number:" />
                </div>
                
                    <button type="submit">Confirm Order</button>
                
            </form>
        </main>
    </section>
  )
}

export default Shipping