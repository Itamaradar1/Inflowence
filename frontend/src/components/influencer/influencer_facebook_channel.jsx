import React from "react";
import profile from "../../assets/images/profile.jpeg"


const InfluencerFacebookChannels = (props) => {


  return (
 <>
  <div className="flex flex-col mx-7 mb-14">
    <div className="flex flex-col w-4/4 card bg-contentcard shadow-lg p-6 rounded-box  place-items-left ">
      <div className="flex flex-row justify-center items-center ">
        <section className="h-screen w-screen ">
          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
              {/* card 1 */}
                <div className="px-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-lg">
                  <div className="flex mb-4">
                  <label className="btn btn-ghost btn-circle avatar">
                    <img className="w-10 rounded-full" src={profile} alt="no img"/>
                    </label>
                    <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">Nai propulsion</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">26 September at 08:25</span>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
                    One of my favorite quotes !!!<br></br>
                    <span className="font-black">He who can no longer pause to wonder and stand rapt in awe, is as good as dead; his eyes are closed.</span></p>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex ">
                        <svg className="p-0.5 h-6 w-6 rounded-full z-20 bg-white dark:bg-gray-800 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#18AFFF" /><stop offset="100%" stopColor="#0062DF" /></linearGradient><filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1} /><feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" /><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2={-1} k3={1} operator="arithmetic" result="shadowInnerInner1" /><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0" /></filter><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z" /></defs><g fill="none"><use fill="url(#a1)" xlinkHref="#b1" /><use fill="black" filter="url(#c1)" xlinkHref="#b1" /><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z" /></g></svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">665</span>
                      </div>  
                        <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">354 comments</div>
                    </div>
                </div>

                  {/* card 2 */}
                <div className="px-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-lg">
                  <div className="flex mb-4">
                  <label className="btn btn-ghost btn-circle avatar">
                    <img className="w-10 rounded-full" src={profile} alt="no img"/>
                    </label>
                    <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">Nai propulsion</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">6 August at 08:25</span>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">Another jam from Mr Einstein : I love to travel, but I hate to arrive.</p>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex ">
                        <svg className="p-0.5 h-6 w-6 rounded-full z-20 bg-white dark:bg-gray-800 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#18AFFF" /><stop offset="100%" stopColor="#0062DF" /></linearGradient><filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1} /><feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" /><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2={-1} k3={1} operator="arithmetic" result="shadowInnerInner1" /><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0" /></filter><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z" /></defs><g fill="none"><use fill="url(#a1)" xlinkHref="#b1" /><use fill="black" filter="url(#c1)" xlinkHref="#b1" /><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z" /></g></svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">1,334</span>
                      </div>  
                        <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">1,998 comments</div>
                    </div>
                </div>

                  {/* card 3 */}
                <div className="px-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-lg">
                  <div className="flex mb-4">
                  <label className="btn btn-ghost btn-circle avatar">
                    <img className="w-10 rounded-full" src={profile} alt="no img"/>
                    </label>
                    <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">Nai propulsion</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">16 Mai at 17:55</span>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">Cant get enough of his mindset !!! A question that sometimes drives me hazy — am I or are the others crazy?</p>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex ">
                        <svg className="p-0.5 h-6 w-6 rounded-full z-20 bg-white dark:bg-gray-800 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#18AFFF" /><stop offset="100%" stopColor="#0062DF" /></linearGradient><filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1} /><feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" /><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2={-1} k3={1} operator="arithmetic" result="shadowInnerInner1" /><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0" /></filter><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z" /></defs><g fill="none"><use fill="url(#a1)" xlinkHref="#b1" /><use fill="black" filter="url(#c1)" xlinkHref="#b1" /><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z" /></g></svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">2,756</span>
                      </div>  
                        <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">4,756 comments</div>
                    </div>
                </div>

                    {/* card 4 */}
                <div className="px-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-lg">
                  <div className="flex mb-4">
                  <label className="btn btn-ghost btn-circle avatar">
                    <img className="w-10 rounded-full" src={profile} alt="no img"/>
                    </label>
                    <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">Nai propulsion</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">29 December at 11:25</span>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">A hundred times every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.</p>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex ">
                        <svg className="p-0.5 h-6 w-6 rounded-full z-20 bg-white dark:bg-gray-800 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#18AFFF" /><stop offset="100%" stopColor="#0062DF" /></linearGradient><filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1} /><feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" /><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2={-1} k3={1} operator="arithmetic" result="shadowInnerInner1" /><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0" /></filter><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z" /></defs><g fill="none"><use fill="url(#a1)" xlinkHref="#b1" /><use fill="black" filter="url(#c1)" xlinkHref="#b1" /><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z" /></g></svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">6,847</span>
                      </div>  
                        <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">5,978 comments</div>
                    </div>
                </div>

                    {/* card 5 */}
                <div className="px-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-lg">
                  <div className="flex mb-4">
                  <label className="btn btn-ghost btn-circle avatar">
                    <img className="w-10 rounded-full" src={profile} alt="no img"/>
                    </label>
                    <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">Nai propulsion</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">7 November at 17:05</span>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">Let us not forget <br></br>
                  All religions, arts and sciences are branches of the same tree.
                  <br></br>
                  Look deep into nature, and then you will understand everything better.</p>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex ">
                        <svg className="p-0.5 h-6 w-6 rounded-full z-20 bg-white dark:bg-gray-800 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#18AFFF" /><stop offset="100%" stopColor="#0062DF" /></linearGradient><filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1} /><feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" /><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2={-1} k3={1} operator="arithmetic" result="shadowInnerInner1" /><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0" /></filter><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z" /></defs><g fill="none"><use fill="url(#a1)" xlinkHref="#b1" /><use fill="black" filter="url(#c1)" xlinkHref="#b1" /><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z" /></g></svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">8,976</span>
                      </div>  
                        <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">3,453 comments</div>
                    </div>
                </div>

                    {/* card 6 */}
                <div className="px-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-lg">
                  <div className="flex mb-4">
                  <label className="btn btn-ghost btn-circle avatar">
                    <img className="w-10 rounded-full" src={profile} alt="no img"/>
                    </label>
                    <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">Nai propulsion</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">19 November at 08:25</span>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">Great spirits have always encountered violent opposition from mediocre minds.
                  <br></br>
                  Unthinking respect for authority is the greatest enemy of truth.</p>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex ">
                        <svg className="p-0.5 h-6 w-6 rounded-full z-20 bg-white dark:bg-gray-800 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#18AFFF" /><stop offset="100%" stopColor="#0062DF" /></linearGradient><filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1} /><feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" /><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2={-1} k3={1} operator="arithmetic" result="shadowInnerInner1" /><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0" /></filter><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z" /></defs><g fill="none"><use fill="url(#a1)" xlinkHref="#b1" /><use fill="black" filter="url(#c1)" xlinkHref="#b1" /><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z" /></g></svg>
                        <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">34</span>
                      </div>  
                        <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">376 comments</div>
                    </div>
                </div>
              
          </div>
        </section>
      </div>
    </div>
  </div>

</>
);
}

export default InfluencerFacebookChannels;