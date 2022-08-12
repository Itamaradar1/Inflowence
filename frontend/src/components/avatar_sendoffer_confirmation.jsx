import checkmark from '../assets/svg/icons8-done.svg'
import OfferConfirmation from './avatar_confirmation_offer';

const AvatarSendOfferConfirmation = (props) => {
    
  
    return (
        <>
        <OfferConfirmation />
        <div className="flex flex-col items-center mt-8 space-y-4">
            <img className='h-14' src={checkmark} alt="no-img"></img>
            <h2 className='font-bold'>Offer Sent!</h2>
        </div>
        </>
    )
}

export default AvatarSendOfferConfirmation;