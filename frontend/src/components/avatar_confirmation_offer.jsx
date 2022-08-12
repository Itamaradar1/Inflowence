import { useEffect, useState } from "react";


const OfferConfirmation = (props) => {

    const [visible, setVisible] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
        setVisible(false);
        }, 5000);
        return () => clearTimeout(timer)
    }, []);
      

    return (
        <>
        {visible ? (
            <div className="alert alert-success shadow-lg fixed top-0">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Offer Sent!</span>
          </div>
        </div>) : ''}
        </>
    )
}

export default OfferConfirmation;