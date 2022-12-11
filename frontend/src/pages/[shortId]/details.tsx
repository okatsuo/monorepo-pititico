import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { ShortUrlDetailsQueryDocument } from "../../../generated/graphql/graphql"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Container, Card, Grid, Text, Link } from '@nextui-org/react'

const ShortIdDetails = () => {
  const router = useRouter()
  const shortId = router.query.shortId

  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  if (!shortId) return <></>

  const { data, loading, error } = useQuery(ShortUrlDetailsQueryDocument, {
    variables: {
      id: shortId!.toString()
    }
  })

  if (error) router.push('/')

  if (loading) return <></>

  if (!data) return <></>
  const { shortUrlDetails } = data

  return (
    <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
      <Navbar />
      <Container justify="center">
        <Grid.Container justify="center">
          <Grid>
            <Card css={{ padding: '$15', gap: '$2' }} variant="shadow">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Text b>Link encurtado:</Text>
                <Link href={`${origin}/${shortUrlDetails.short}`}><Text b color="inherit">{`${origin}/${shortUrlDetails.short}`}</Text></Link>
                <Link><Text color="inherit">Copiar link original</Text></Link>
              </div>

              <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text size={"small"}>Criado em {Intl.DateTimeFormat().format(shortUrlDetails.createdAt)}</Text>
                <Text>Visitas: {shortUrlDetails.clicks}</Text>
              </div>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
      <Footer />
    </span >
  )
}

export default ShortIdDetails
