import { useMutation } from '@apollo/client';
import { Button, Container, FormElement, Input, Link, Loading } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { CreateShortLinkMutationDocument } from '../../generated/graphql/graphql';
import { useWindowSize } from '../hooks/windowsSize';

const exampleLink = 'https://google.com'

const isValidUrl = (url: string) => !!url.match(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig)

export const Shortener = () => {
  const router = useRouter()

  const [url, setUrl] = useState<string>('')
  const [urlError, setUrlError] = useState<boolean>(false)
  const [createShortLink, { loading }] = useMutation(CreateShortLinkMutationDocument)
  const { width: screenWidth } = useWindowSize()

  const handleClickExampleLink = () => setUrl(exampleLink)

  const handleUserType = ({ currentTarget }: ChangeEvent<FormElement>) => {
    const typedUrl = currentTarget.value
    if (isValidUrl(typedUrl)) setUrlError(false)
    setUrl(typedUrl)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isValidUrl(url)) return setUrlError(true)

    const { data } = await createShortLink({ variables: { url } })
    const shortId = data?.shortener.short
    return router.push(`/${shortId}/details`)
  }

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div>
          <form style={{ display: 'flex', gap: 8 }} onSubmit={handleSubmit}>
            <Input
              labelPlaceholder='Sua URL'
              width={screenWidth
                ? screenWidth < 500 ? 'auto' : '300px'
                : 'auto'}
              value={url}
              status={urlError ? 'error' : 'default'}
              onChange={handleUserType}
            />

            <Button auto type='submit'>
              Encurtar
            </Button>
          </form>
          <div style={{ display: 'flex', gap: 5 }}>
            Tente <Link block={false} onPress={handleClickExampleLink}>{exampleLink}</Link>
          </div>

        </div>
      </div>
    </Container>
  )
}
