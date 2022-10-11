import React, { useState } from 'react'

const Contact = () => {

  const [cname, setCname] = useState('');
  const [cemail, setCemail] = useState('');
  const [cdes, setCdes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCname('');
    setCemail('');
    setCdes('');
    alert('Thank you for contacting us, we will get back to you as soon as possible');
    //   try {
    //     const body = { cname, cemail, cdes  };
    //     const response = fetch('http://localhost:NEED A ROUTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(body)
    //     });
    // } catch (error) {
    //     console.error(err.message);
    // }
  };

  const handleChangeName = (e) => {
    setCname(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setCemail(e.target.value);
  };

  const handleChangeDes = (e) => {
    setCdes(e.target.value);
  };

  return (
    <div className='contactPage'>

      <div>
        <h1 className='contactTitle'>
          Contact Us
        </h1>
      </div>

      <div className='contactInfo'>
        <ul>Contact Info</ul>
        <li>Phone Number: +1 (888) 888-8888</li>
        <li>Email: customerservice@dreamscomebrew.net</li>
        <li>Address: 789 Dream Street, Brewtown, California 98765</li>
      </div>

      <div className='contactForm'>
        <form>
          <input
            className='contactInputBox'
            type='text'
            placeholder='Full Name'
            value={cname}
            onChange={handleChangeName} />
          <input
            className='contactInputBox'
            type='text'
            placeholder='Email'
            value={cemail}
            onChange={handleChangeEmail} />
          <input
            className='contactInputBox'
            type='text'
            placeholder='Description'
            value={cdes}
            onChange={handleChangeDes} />
          <button
            type="button"
            className="contactSubmitBtn"
            onClick={handleSubmit}
          >Submit
          </button>
        </form>
      </div>

      <div className='contactFooter'>
      <footer>Order Online 24/7</footer>
      <footer>Contact Hours</footer>
      <footer>Monday-Friday 9am to 7pm</footer>
      <footer>Saturday-Sunday 9am to 1pm</footer>
      </div>
     
      
    </div>
  )
};

export default Contact