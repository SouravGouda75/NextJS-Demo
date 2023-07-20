import connect from "@/db/connect";
import NextUser from "@/db/user";
import bcrypt from 'bcrypt'
export default async function handler
	(req, res) {
		if(req.method==='POST'){
			try{
				await	connect()
				
					const { email, password } = req.body;
	
					// Find the user by username
					const user = await NextUser.findOne({ email });
	
					if (!user) {
							return res.status(404).json({ error: 'User not found' });
					}
	
					// Compare the provided password with the hashed password
					const isPasswordValid = await bcrypt.compare(password, user.password);
	
					if (!isPasswordValid) {
							return res.status(401).json({ error: 'Invalid password' });
					}
	
					// Password is valid, login successful
					// res.redirect("/login")
					res.status(200).json({ message: 'Login successful',success: true });
				}
				catch (error) {
					res.status(500).json({ error: 'Something went wrong' });
			}
	
}
	}
