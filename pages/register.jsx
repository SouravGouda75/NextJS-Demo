"use client"
// create a login page with console log in next js ? 
import React, { useState } from 'react'
import '../app/globals.css'
import { useRouter } from 'next/router';

import axios from 'axios';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
const page = () => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const route=useRouter()
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response=await axios.post('/api/registerData', { email: email, password: pass });
			// Handle success, e.g., show a success 
			setEmail("")
			setPass("")
			
			if(response.data.success){
				console.log('Credentials stored successfully');
				route.push('/login')
			}
		} catch (error) {
			// Handle error, e.g., show an error message
			console.error('Error storing credentials', error);
		}
	};

	return (
		<>
			<div className="bg-300% animate-gradient h-100 bg-gradient-to-br from-gray-900 via-green-900 to-teal-900 text-white">

				<Navbar />
				<div className="flex items-center justify-center min-h-screen gradient-background ">
					<div className=" p-8 rounded shadow-md bg-gradient-to-tr bg-transparent from-gray-500 to-teal-500">
						<h2 className="text-2xl text-grey-500 font-bold mb-6 ">Register</h2>
						<form onSubmit={e => handleSubmit(e)}>
							<div className="mb-4">
								<label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
								<input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="w-full px-3 py-2 border text-gray-900 border-gray-300 rounded" />
							</div>
							<div className="mb-6">
								<label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
								<input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" className="w-full px-3 py-2 border text-gray-900 border-gray-300 rounded" />
							</div>
							<button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded font-semibold hover:bg-teal-600">Sign In</button>
						</form>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	)
}

export default page
