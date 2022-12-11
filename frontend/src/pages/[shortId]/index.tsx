import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { GetUrlByIdDocument } from "../../../generated/graphql/graphql"

const ShortId = () => {
  const router = useRouter()
  const shortId = router.query.shortId

  if (!shortId) return <></>

  const { data, loading, error } = useQuery(GetUrlByIdDocument, {
    variables: {
      id: shortId!.toString()
    }
  })

  if (error) router.push('/')

  if (loading) return <></>


  if (data) {
    const originalUrl = data.urlById

    const hasHttps = originalUrl.includes('https')

    router.push(hasHttps ? originalUrl : `https://${originalUrl}`)
  }


  return <></>
}

export default ShortId
