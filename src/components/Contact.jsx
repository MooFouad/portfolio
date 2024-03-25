import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { LuSend } from "react-icons/lu";
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        const serviceId = 'service_8r8ydvv'
        const templateId = 'template_90r737p'
        const publicKey = 'ykdGT9l5bYbNu_p02'
        // Create a new object that contains dynamic template params
    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Mohamed Fouad',
        message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch((error) => {
        console.error('Error sending email:', error);
    });
        
    }

    return (
        <form onSubmit={submitHandler} id="contact" className="flex flex-col justify-center bg-dark-theme text-gray-300 md:px-[30vw] max-md:px-10 ">
            <h1 className='bold mb-[40px] text-4xl max-md:text-3xl'>Send me a message!</h1>
            {/* name & email */}
            <div className="flex items-center justify-evenly flex-col w-full">
                <div className="flex flex-col w-full justify-center items-start gap-4">
                    <label htmlFor="name"
                    className='bold text-xl'
                    >
                        Name
                    </label>
                    <input 
                    type="text"
                    id='name'
                    placeholder="Your Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className='bg-dark-theme border-solid border-2 border-gray-500 p-2 rounded-xl w-full mb-4'
                    />
                </div>
                <div className="flex flex-col w-full justify-center items-start gap-4">
                <label htmlFor="email"
                    className='bold text-xl'
                    >
                        Email
                    </label>
                <input
                    type="email"
                    id='email'
                    placeholder="Your Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='bg-dark-theme border-solid border-2 border-gray-500 p-2 rounded-xl w-full mb-4'
                    />
                </div>
            </div>
            {/* msg */}
            <div className="flex flex-col w-full justify-center items-start gap-4">
            <label htmlFor="message"
                    className='bold text-xl'
                    >
                        Message
                    </label>
                <textarea
                id='message'
                rows="10" 
                cols="30"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                className='bg-dark-theme border-solid border-2 border-gray-500 p-2 rounded-xl w-full mb-4'
                >
                </textarea>
            </div>
            <button className='text-white flex justify-center items-center border-solid border-2 border-gray-500 p-2 rounded-xl mb-[50px]' type='submit'>
                <LuSend/>
                <p className='ml-5 bold text-xl'>Send Email</p>
            </button>
        </form>
    )
}

export default Contact