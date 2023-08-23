import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export async function getServerSideProps(context) {
	const { shortUrl } = context.query;
	await dbConnect();

	const shortLink = await ShortLink.findOne({ shortUrl });
	if (shortLink) {
		var url = shortLink.url;
		if (!url.includes("http")) {
			url = "http://" + url;
		}

		return {
			redirect: {
				destination: url,
				permanent: false,
			},
		};
	}

	return {
		notFound: true,
	};
}

export default function ShortUrlPage() {
	return null;
}
