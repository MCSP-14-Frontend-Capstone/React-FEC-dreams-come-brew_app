import React from 'react'
import coffee1 from './images/coffee-1.jpeg'
import coffee2 from './images/coffee-2.jpeg'
import coffee3 from './images/coffee-3.jpeg'
import coffee4 from './images/coffee-4.jpeg'
import coffee5 from './images/coffee-5.jpeg'
import coffee6 from './images/coffee-6.jpeg'

const About = () => {
  return (<div className='aboutBody'>
        <div className='aboutContainer'>
      <div className='aboutme'>
        <h1 className='aboutme-h'>About Dreams Come Brew</h1>
        <p className='aboutme-p'>The fog was as thick as pea soup. This was a problem. Gary was driving but couldn't see a thing in front of him. He knew he should stop, but the road was narrow so if he did, it would be right in the center of the road. He was sure that another car would end up rear-ending him, so he continued forward despite the lack of visibility. This was an unwise move. It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. Only the slowest in the group do. That was the lesson they were about to learn that day.</p>
      </div>
      <div className='about-b-bdr'></div>
    </div>
    {/* split */}
    <div className='aboutPhotosContainer'>
        <h1>Photos</h1>
      <div>
        <img className="aboutpics" src={coffee1} alt=' '/>
        <img className="aboutpics" src={coffee2} alt=' '/>
        <img className="aboutpics" src={coffee3} alt=' '/>
        <img className="aboutpics" src={coffee4} alt=' '/>
        <img className="aboutpics" src={coffee5} alt=' '/>
        <img className="aboutpics" src={coffee6} alt=' '/>
        <img className="aboutpics" src={coffee5} alt=' '/>
        <img className="aboutpics" src={coffee6} alt=' '/>
      </div>
    </div>
  </div>

  )
}

export default About;