import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";
import mongoose from "mongoose";

export default async function handler(req, res) {
	await dbConnect();
	console.log(ShortLink);

	switch (req.method) {
		case "POST":
			res.status(201).send({
				title: "위키피디아 NEXT.js",
				url: "https://ko.wikipedia.org/wiki/NeXT",
			});
			break;
		case "GET":
			res.send([
				{
					id: "abc",
					title: "위키피디아 NEXT.js",
					url: "https://ko.wikipedia.org/wiki/NeXT",
				},
				{
					id: "def",
					title: "코드잇 자유게시판",
					url: "https://www.codeit.kr/community/general",
				},
				{
					id: "naver",
					title: "네이버",
					url: "https://www.naver.com",
				},
			]);
			break;
		default:
			res.status(404).send();
			break;
	}
}
