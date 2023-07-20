// export default function handler
// (req, res) {
// 	res.status(200).json({
// 		message: 'Hello World!'
// 		});
		// }

		import connect from "@/db/connect";
import NextUser from "@/db/user";

		export default async function handler (req,res){
			if(req.method==='GET')
			{
					await connect()
					const user = await NextUser.find({})
					res.status(200).json(user)
			}
		}
