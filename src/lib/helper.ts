import { getServerSession } from "next-auth/next"
import { authConfig } from "./auth"

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authConfig)

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}