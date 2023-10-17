import React, { useState } from "react";
import "../styles/simpleInterest.css";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';



function SimpleInterest() {
    
    const [principal, setPrincipal] = useState(1000);
    const [Rateofinterest, setRateofinterest] = useState(1);
    const [Timeperiod, setTimeperiod] = useState(1);
    // const [totalAmount, setTotalAmount] = useState("")

    const Interest =(principal*Rateofinterest*Timeperiod)/100;
    const totalAmount = principal + Interest;
    return (
        <div className="container">
            <h1>Simple Interest Calculator</h1>
            <div style={{border:'1px solid',borderRadius:'.5rem'}}>              
              <div className="container-form">  
                 <div class="circle">
                  <span>
                      <p>Principal Amount</p>
                       {/* <h3 >₹{principal}</h3>  */}
                      <div className="container-form-input">
                      <span>₹</span>
                      <input
                       value={principal} 
                       onChange={(e) => setPrincipal(e.target.value)}
                      
                      />
                      </div>

                  </span>
                  <Slider
                       min={1000}
                       max={10000000}
                         value={principal}
                         onChange={(value) => {
                           setPrincipal(value);
                         }} />   
                          
                 </div>
                <div class="title">
                    <span>                       
                      <p>Rate Of Interest(p.a)</p>
                      {/* <h3>{Rateofinterest} %</h3> */}
                      <div className="container-form-input">
                      <input
                       value={Rateofinterest} 
                       onChange={(e) => setRateofinterest(e.target.value)}
                       
                      />
                      <span>%</span>
                      </div>
                   </span>
                   <Slider
                       min={1}
                       max={50}
                         value={Rateofinterest}
                         onChange={(value) => {
                          setRateofinterest(value);
                         }} />
                   
                </div>
                <div class="box">
                   <span>
                        <p>Timeperiod</p>                    
                        {/* <h3>{Timeperiod} Yr</h3>         */}
                        <div className="container-form-input">
                          <input 
                           value={Timeperiod}
                           onChange={(e) => setTimeperiod(e.target.value)}/>
                           <span>Yr</span>
                          </div>
                          </span>
                          <Slider
                          min={1}
                          max={30}
                         value={Timeperiod}
                         onChange={(value) => {
                           setTimeperiod(value);
                         }} />     
                   
                    
                </div>
               
              
         </div>
         
           <div className="sample">
            
           <p><span>principal amount </span><span>₹{principal.toLocaleString("en-In")}</span></p> 
           <p><span>Total Interest </span><span>₹{Interest.toLocaleString("en-In")}</span></p> 
           <p><span>Total amount </span><span>₹{totalAmount.toLocaleString("en-In")}</span></p>

           </div>
           </div>
        </div>

    );
}
export default SimpleInterest;
