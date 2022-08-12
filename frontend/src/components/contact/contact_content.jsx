import React from "react";


const Contact = (props) => {

  // const navigate = useNavigate();

  return (
    <div className="hero min-h-screen" 
      style={{backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'}}>
      <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-contentcard text-2xl ">
          <div className="max-w-xl">
            <p className="mb-5"> <span className="bg-textbg">Get in Touch! </span></p>
            <p className="mb-10"> <span className="bg-textbg">Interested in learning about your influencer marketing potential, an overview of the Inflowence marketing platform, or just connecting with us?</span></p>
            <p className="mb-5"><span className="bg-textbg">
            Simply leave us a few details about yourself with a brief message, and we'll be in touch shortly, or reach out to the team here →</span></p>
          </div>

            <div className="w-full bg-grey-500">
              <div className="container mx-16 py-8">
                <div className="w-96 mx-auto bg-contentcard rounded-xl shadow">
                  <div className="mx-16 py-4 px-8 text-main text-xl font-bold border-b border-grey-500">Contact US
                  </div>
                    <form name="Contact form" id="Contact form" action>
                      <div className="py-4 px-8">
                        <div className="mb-4">
                        <label className="block text-main text-sm font-bold mb-2">Email</label>
                        <input className=" border rounded w-full py-2 px-3 text-main" type="text" name="Email" id="Email"  placeholder="Enter Your Email" />
                        </div>
                          <div className="mb-4">
                          <label className="block text-main text-sm font-bold mb-2">Full name</label>
                          <input className=" border rounded w-full py-2 px-3 text-main" type="text" name="Full name" id="Full name"  placeholder="Enter Your Full Name" />
                          </div>
                            <div className="mb-4">
                            <label className="block text-main text-sm font-bold mb-2">Phone</label>
                            <input className=" border rounded w-full py-2 px-3 text-main" type="text" name="Massage" id="Massage"  placeholder="Enter Your Phone number" />
                            </div>
                              <div className="mb-4">
                              <label className="block text-main text-sm font-bold mb-2">Massage</label>
                              <input className=" border rounded w-full py-2 px-3 text-main" type="text" name="Massage" id="Massage" placeholder="Enter Your Massage" />
                              </div>
                                <div className="mb-4">
                                <button className="btn btn-primary ">
                                Submit
                                </button>
                                </div>
                      </div>
                    </form>
                  </div>
              </div>
            </div>

        </div>
    </div>

  );
}
export default Contact;