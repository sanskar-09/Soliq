import React from 'react'
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer"
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [number, setNumber] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        const templateParams = {
            from_name: name,
            from_email: email,
            from_message: message,
            from_subject: subject,
            from_number: number,
            to_name: "Sanskar",
            message: message,
        };

        console.log(serviceId, templateID, publicKey);

        if (name === "" || email === "" || message === "" || subject === "" || number === "") {
            window.alert("All fields are required!");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            window.alert("Please enter valid email address!");
            return;
        }

        emailjs
            .send(serviceId, templateID, templateParams, publicKey)
            .then((response) => {
                alert("Message sent successfully!");
                console.log("Email sent successfully!", response);
                setName("");
                setEmail("");
                setMessage("");
                setSubject("");
                setNumber("");
            })
            .catch((err) => {
                alert("Could not send the message!");
                console.log("Error sending the mail!", err);
            });
    };
    return (
        <>
        <div className='flex flex-col justify-center items-center'>
            <form
                className="flex flex-col text-black md:mt-12 h-fit max-sm:px-4"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 h-[40px] border-[#004bae] border-[1px] bg-white mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <div className="flex flex-row w-full gap-2">
                    <input
                        type="number"
                        placeholder="Phone Number"
                        className="p-3 outline-none w-[60%] h-[40px] text-black border-[#004bae] border-[1px] bg-white"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="text-black h-[40px] w-[80%] p-3 border-[#004bae] border-[1px] bg-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full pl-3 h-[40px] border-[#004bae] border-[1px] bg-white my-3"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                    type="text"
                    placeholder="Message"
                    className="w-full pl-2 pt-2 h-[100px] border-[#004bae] border-[1px] bg-white my-3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button
                    className="bg-[#004bae] p-3 font-bold text-white w-[100px] ml-[170px] cursor-pointer"
                    type="submit"
                >
                    SEND
                </button>
            </form>
        </div>
        <Footer />
        </>
    )
}

export default Contact
