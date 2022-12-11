import { Navbar as NextUiFooter } from '@nextui-org/react';

export const Footer = () => {
  return (
    <NextUiFooter>
      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <p style={{ background: 'lightgrey', width: '50%', height: '50px' }}></p>
      </span>
    </NextUiFooter>
  )
}
