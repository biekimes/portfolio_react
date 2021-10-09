import React, { useState } from 'react'
import './Contact.scss'
import emailjs from 'emailjs-com';


const Result = () => {
    return (
        <span>Thanks! I'll reply ASAP.</span>
    )
}

const Contact = () => {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fyzp9ai', 'template_yrlq4gp', e.target, 'user_KcYtSVW3gGl5ZiP2Y9L8p')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setMessage(true);
    };

    setTimeout(() => {
        setMessage(false);
    }, 4500);

    return (
        <div className="Contact" id="Contact">


            {/* <div className="left"></div> */}
            <div className="right">
                <h2>Contact Me </h2>
                <ul>
                    <li><a href="https://github.com/biekimes"><img src="img/github.svg" alt="" /></a> </li>
                    <li><a href="https://www.linkedin.com/in/bum-kim-018864111/"><img src="img/linkedin.svg" alt="" /> </a></li>
                    <li><a href="mailto: biekimes@gmail.com"><img src="img/email.svg" alt="" /> </a></li>
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="from_name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="message" placeholder="Send me a message!" required></textarea>
                    <button type="submit">Send</button>
                    <div className="message">
                        {message ? <Result /> : null}
                    </div>
                    {/* {message && <span>Thanks! I'll reply ASAP.</span>} */}
                </form>
            </div>



        </div>
    )
}

export default Contact
