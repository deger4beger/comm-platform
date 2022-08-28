import type { NextPage } from "next"
import { dehydrate, useQuery } from "react-query"
import { getUser, queryClient } from "../src"

export async function getServerSideProps() {
  await queryClient.prefetchQuery("user", () => getUser())

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const Home: NextPage = () => {
  const { data } = useQuery(["user"], () => getUser())

  return (
    <div>
      <span>For the sake of gods:</span>
      {JSON.stringify(data)}
    </div>
  )
}

export default Home
