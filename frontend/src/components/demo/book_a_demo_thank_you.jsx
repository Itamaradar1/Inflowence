import {Link} from "react-router-dom";


const BookADemoThankYouContainer = () => {

    return(
        <div className="hero min-h-screen bg-background" style={{backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thank you, our sales team will reach out to you shortly to book a demo.</span>
                </label>
              </div>
              
           </div>
          </div>
        </div>
      </div>

    )
}

export default BookADemoThankYouContainer;