
import React from "react";

const AboutUs = (props) => {


  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'}}>
    <div className="hero-overlay bg-opacity-60" />
    <div className="hero-content text-center text-contentcard text-2xl">
    <div className="max-w-6xl">
            <p className="mb-5"> <span className="bg-textbg">We are here to impact! </span></p>
            <p className="mb-10"> <span className="bg-textbg">At Inflowence, we are committed to putting people before profits and processes, knowing that the outcome will be the strongest, and we can focus on building a healthy and successful culture. To put people first acknowledges that it must be for ‘all people’ and we believe this is done by creating a safe space for all backgrounds and developing a culture that encourages vulnerability. 
            We know that investing in our people requires us to do it in a way that is fundamentally inclusive and recognizes the importance of diversity.
            </span></p>
            <p className="mb-5"><span className="bg-textbg">
            </span>Let us not forget, we are all the same but different...  </p>
            </div>
    </div>
  </div>

  );
}
export default AboutUs;