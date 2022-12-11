import { Navbar as Nav, Text, Link, Tooltip } from '@nextui-org/react'

export const Navbar = () => {
  return (
    <Nav>
      <Nav.Brand>
        <Link href='/'>
          <Text b size={'x-large'}>
            Pititico
          </Text>
        </Link>
      </Nav.Brand>
      <Nav.Content style={{ textTransform: 'uppercase' }}>
        <Tooltip content={'em breve'} rounded color="error" placement='bottom'>
          <Nav.Link>Planos</Nav.Link>
        </Tooltip>
        <Tooltip content={'em breve'} rounded color="error" placement='bottom'>
          <Nav.Link>Entrar</Nav.Link>
        </Tooltip>
        <Tooltip content={'em breve'} rounded color="error" placement='bottom'>
          <Nav.Link>Registrar</Nav.Link>
        </Tooltip>
      </Nav.Content>
    </Nav>
  )
}
