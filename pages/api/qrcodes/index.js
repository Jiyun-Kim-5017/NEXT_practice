import dbConnect from "@/db/dbConnect";
import Qrcode from "@/db/models/Qrcodes";

export default async function handler(req, res) {
	await dbConnect();

	switch (req.method) {
		case "POST":
			const newQrcode = await Qrcode.create(req.body);
			res.status(201).send(newQrcode);
			break;

		case "GET":
			const qrcodes = await Qrcode.find();
			res.send(qrcodes);
			break;

		default:
			res.status(404).send();
			break;
	}
}
