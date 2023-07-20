import connect from "@/db/connect";
import bcrypt from 'bcrypt'

import NextUser from "@/db/user";
export default async function handler
	(req, res) {
		if(req.method==='POST'){
				await	connect()
			
    const {  email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new NextUser({ email:email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' ,success:true});
    res.redirect('/')
 
}
	}
