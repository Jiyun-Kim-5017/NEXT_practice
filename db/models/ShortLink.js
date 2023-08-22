import mongoose from "mongoose";

const shortLinkSchema = new mongoose.Schema(
	{
		title: { type: String, default: "" },
		url: { type: String, default: "" },
	},
	{
		timestamps: true,
	}
);

//shortLink라는 모델이 있는지 찾고 없으면 새 모델 생성
const ShortLink =
	mongoose.models["ShortLink"] ||
	mongoose.model("ShortLink", shortLinkSchema); //이름, 초기 스키마

export default ShortLink;
