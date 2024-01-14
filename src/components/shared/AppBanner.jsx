import React, { useState } from 'react'
import newsletter from '../../images/newsletter.png';
import axios from "axios";

// const backend_server = "https://newsletter-backend-srsp.onrender.com"
const backend_server = "https://server.ashmitshahi.com"

const AppBanner = () => {
    const [email, setEmail] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        axios.post(`${backend_server}/subscribe`, {
            email
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <section className='flex flex-col sm:justify-between items-center sm:flex-row mt-2 md:mt-0 px-4 md:p-0'>
            <div className="md:text-left w-full md:w-3/5 text-center">
                <h2 className="mb-4 text-3xl tracking-tight font-bold text-white sm:text-4xl">Sign up for our newsletter</h2>
                <p className="mb-8 max-w-2xl font-thin text-gray-200 md:mb-12 sm:text-xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                <form onSubmit={submitHandler}>
                    <div className="items-center mb-3 space-y-4 sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input className="block p-3 pl-10 w-full text-sm bg-slate-600 rounded-lg border border-slate-400 sm:rounded-none sm:rounded-l-lg text-white" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" type="email" id="email" required="" />
                        </div>
                        <div>
                            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-rose-600 border-rose-400 sm:rounded-none sm:rounded-r-lg hover:bg-rose-700">Subscribe</button>
                        </div>
                    </div>
                    <div className="max-w-screen-sm text-sm text-left text-gray-500">We care about the protection of your data. <a href="#" className="font-medium text-slate-400 hover:underline">Read our Privacy Policy</a>.</div>
                </form>
            </div>

            <div className='md:w-2/3 mt-8 sm:mt-0 text-right float-right p-0 lg:p-14 translate-y-0 lg:-translate-y-16'>
                <img src={newsletter} alt="newsletter" className='' />
            </div>
        </section>
    )
}

export default AppBanner