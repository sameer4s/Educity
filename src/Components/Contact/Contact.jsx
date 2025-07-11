import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",process.env.REACT_APP_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset()
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non molestias labore dolorem velit odit ad, obcaecati eligendi voluptas nihil quam, nulla laborum!</p>
        <ul>
            <li><img src={mail_icon} alt="" />kinglionbny@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 1234567890</li>
            <li><img src={location_icon} alt="" />B-block,sector 25,Lucknow,262021</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your Phone Number' required />
            <label>Write Your Message Here</label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
