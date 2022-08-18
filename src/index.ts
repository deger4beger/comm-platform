import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/graphql";
import { QueryClient } from "react-query";


const gqcClient = new GraphQLClient("http://localhost:3000/api/graphql");
export const { getUser } = getSdk(gqcClient);

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false
		}
	}
})