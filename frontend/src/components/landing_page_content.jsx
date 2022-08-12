import {useNavigate} from "react-router-dom";
import React, { useState } from "react";

const LandingPageContent = (props) => {

  const navigate = useNavigate();

  return (
    <>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'}}>
      <div className="hero-overlay bg-opacity-70" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Happy to see you here</h1>
            <p className="mb-5 text-2xl">We connect influencers with companies. Get started and learn more.</p>
            <button className="btn btn-primary " onClick={ () => {navigate("/register")}}>Get Started</button>
          </div>
        </div>
    </div>
       <div className="hero min-h-screen">
       <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="mockup-phone">
        <div className="camera" /> 
        <div className="display">
          <div className="artboard artboard-demo phone-2 text-black " style={{backgroundImage: 'url(https://api.lorem.space/image/face?w=350&h=700)'}}></div>
        </div>
      </div>
         <div className="flex flex-col w-3/4 ">
           <h1 className="text-5xl font-bold">ALL IN ONE</h1>
           <p className="py-6 text-2xl">The influencer landscape is constantly changing and evolving. <span className="font-black">Inflowence</span> helps us stay on top of trends and reach consumers in an authentic, effective, and efficient way.</p> 
           <p className="py-6 text-2xl">The <span className="font-black">Inflowence</span> Marketing Platform provides end-to-end relationship management, workflow automation, and measurement for integrated influencer, advocacy, referral, and loyalty marketing programs at scale that benefit multiple touchpoints and marketing functions.</p>           
         </div>
       </div>
     </div>
     </>
  );
}
export default LandingPageContent;