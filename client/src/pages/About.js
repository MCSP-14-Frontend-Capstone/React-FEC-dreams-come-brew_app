import React from 'react'

const About = () => {
  return (<div className='aboutBody'>
        <div className='aboutContainer'>
      <div className='aboutme'>
        <h1 className='aboutme-h'>About Dreams Come Brew</h1>

        {/* <p className='aboutme-p'>The fog was as thick as pea soup. This was a problem. Gary was driving but couldn't see a thing in front of him. He knew he should stop, but the road was narrow so if he did, it would be right in the center of the road. He was sure that another car would end up rear-ending him, so he continued forward despite the lack of visibility. This was an unwise move. It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. Only the slowest in the group do. That was the lesson they were about to learn that day.</p> */}

        <p className='aboutme-p'>We believe in brewing high quality organic Arabica coffee. Our Dreams Come Brew coffee beans come from plants grown in moist, fertile, well-drained soil, under shaded canopies receiving a healthy dose of sunshine each day. Our beans have a smoother, sweeter taste, with flavor notes ranging from chocolate and sugar to hints of fruits or berries. Thanks for stopping by. We enjoy providing your dream brew.</p>

      </div>
      <div className='about-b-bdr'></div>
    </div>
    {/* split */}
    <div className='aboutPhotosContainer'>
        <h1>Photos</h1>
      <div>
        <img className="aboutpics" src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/aboutpage/coffee-1.jpg" alt=' '/>
        <img className="aboutpics" src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/aboutpage/coffee-2.jpg" alt=' '/>
        <img className="aboutpics" src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/aboutpage/coffee-3.jpg" alt=' '/>
        <img className="aboutpics" src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/aboutpage/coffee-4.jpg" alt=' '/>
        <img className="aboutpics" src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/aboutpage/coffee-5.jpg" alt=' '/>
        <img className="aboutpics" src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/aboutpage/coffee-6.jpg" alt=' '/>
        <img className="aboutpics" src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/aboutpage/coffee-5.jpg" alt=' '/>
        <img className="aboutpics" src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/aboutpage/coffee-6.jpg" alt=' '/>
      </div>
    </div>
  </div>

  )
}

export default About;