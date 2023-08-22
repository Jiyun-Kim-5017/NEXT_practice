import dbConnect from "@/db/dbConnect";
import Qrcode from "@/db/models/Qrcodes";

export default async function handler(req, res) {
	await dbConnect();
	const { id } = req.query;

	switch (req.method) {
		case "GET":
			const qrcode = await Qrcode.findById(id);
			res.send(qrcode);
			break;

		case "PATCH":
			const newQrcode = await Qrcode.findByIdAndUpdate(id, req.body, {
				new: true,
			});
			res.send(newQrcode);
			break;

		case "DELETE":
			await Qrcode.findByIdAndDelete(id);
			res.status(204).send();
			break;

		default:
			res.status(404).send();
			break;
	}
}
