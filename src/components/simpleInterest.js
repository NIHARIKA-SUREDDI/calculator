import React, { useState } from "react";
import "../styles/simpleInterest.css";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Chart } from "react-google-charts";

function SimpleInterest() {
    
    const [principal, setPrincipal] = useState(1000);
    const [Rateofinterest, setRateofinterest] = useState(1);
    const [Timeperiod, setTimeperiod] = useState(1);

     

    

    const Interest =(principal*Rateofinterest*Timeperiod)/100;
    const totalAmount = principal + Interest
  
    const data = [
      ["Task", "Simple Interest Calculator"],
      ["Principal", principal],
      ["Interest", Interest],
     ]

     const options = {
      title: "Simple Interest Piechart",
      is3D: true,
    };
    function handleprincipal(val){
      setPrincipal(val)
    }


    return (
        <div className="container">
            <h1>Simple Interest Calculator</h1>
            <div style={{display:'flex'}}>
            <div style={{border:'1px solid',borderRadius:'.5rem',padding:'10px'}}>              
              <div className="container-form">  
                 <div class="circle">
                  <span className="interest-fields">
                      <p>Principal Amount</p>
                      
                      <div className="container-form-input">
                      <span>₹</span>
                      <input
                       value={principal} 
                       onChange={(e) =>{
                        console.log(typeof e.target.value)
                        if(e.target.value<1000||e.target.value>10000000){
                          return;
                        }
                        setPrincipal(Number(e.target.value))

                      }}

                      
                      />
                      </div>

                  </span>
                  <Slider 
                   min={1000}
                   max={10000000}
                   value={principal}
                   onChange={(value) => {
                       setPrincipal(value);
                   }}
                    />   
                          
                 </div>
                <div class="title">
                    <span className="interest-fields">                       
                      <p>Rate of Interest(p.a)</p>
                     
                      <div className="container-form-input">
                      <input
                       value={Rateofinterest} 
                       onChange={(e) =>{
                        if(e.target.value<1||e.target.value>50){
                          return;
                        }
                        setRateofinterest(e.target.value)}}
                       
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
                  }}
                       />
                  </div>
                <div class="box">
                   <span className="interest-fields">
                        <p>Timeperiod</p>                    
                       <div className="container-form-input">
                          <input 
                           value={Timeperiod}
                           onChange={(e) =>{
                            if(e.target.value<1||e.target.value>30){
                              return;
                            }
                             setTimeperiod(e.target.value)}}/>
                           <span>Yr</span>
                          </div>
                          </span>
                          <Slider  
                          min={1}
                          max={30}
                         value={Timeperiod}
                         onChange={(value) => {
                            setTimeperiod(value);
                        }}
                          />     
                   </div>
                  
               </div>
         

               
           <div className="sample">
           
           <p><span>Principal amount </span><span>₹{principal.toLocaleString("en-In")}</span></p> 
           <p><span>Total Interest </span><span>₹ {Math.round(Interest).toLocaleString("en-IN")}</span></p> 
           <p><span>Total amount </span><span>₹ {Math.round(totalAmount).toLocaleString("en-IN")}</span></p>

           </div>
          
           </div>
           
           <div>
           <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
          />
           </div>
           </div>
           
  </div>

          

    );
}

export default SimpleInterest;


