import mongoose from "mongoose";

const qrcodeSchema = new mongoose.Schema(
	{
		title: { type: String, default: "" },
		url: { type: String, default: "" },
	},
	{
		timestamps: true,
	}
);

const Qrcode =
	mongoose.models["Qrcode"] || mongoose.model("Qrcode", qrcodeSchema); //이름, 초기 스키마

export default Qrcode;
