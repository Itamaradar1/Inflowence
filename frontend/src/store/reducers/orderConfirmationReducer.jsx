const initialState = {
    orderConfirmation: false
}


export const OrderConfirmationReducer = (state=initialState, action) => {
    let newState = {...state};
    console.log(' in the order reducer')
    switch(action.type){
        case "confirmOrder":
                newState.orderConfirmation = true;
                return newState;  
            case "unconfirmOrder":
                newState.orderConfirmation = false;
                return newState;  
        default:
            return newState;
    }
  }