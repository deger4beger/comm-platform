import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { generateSchema } from "../../src/resolvers";

export const config = {
	api: {
		bodyParser: false
	}
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const schema = await generateSchema();

	const server = new ApolloServer({
		schema
	});

	await server.start();
	await server.createHandler({ path: "api/graphql" })(req, res);
}