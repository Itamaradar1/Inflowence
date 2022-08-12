import {Link} from "react-router-dom";


const LoginForgetPassword = () => {

  return(
    <div className="hero min-h-screen bg-background" style={{backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'}}>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Send me a magic link</button>
          </div>
        </div>
      </div>
    </div>
  </div>

)
}

export default LoginForgetPassword;