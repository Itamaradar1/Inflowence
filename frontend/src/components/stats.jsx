


const StatsBar = (props) => {
  return (

    <div className="stats shadow-lg bg-contentcard mb-[5%] ">
      <div className="stat">
        <div className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
          <div className="stat-title">Campaigns</div>
          <div className="stat-value">3</div>
          <div className="stat-desc">45% more than last month</div>
      </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div className="stat-title">Followers</div>
          <div className="stat-value">108K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            </div>
              <div className="stat-title">New posts</div>
              <div className="stat-value">240</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
          <div className="stat-title">Sponsored posts</div>
          <div className="stat-value text-secondary">48</div>
          <div className="stat-desc">45% more than last month</div>
      </div>
    
  </div>
);
}

export default StatsBar;