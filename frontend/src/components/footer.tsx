import { Navbar as NextUiFooter } from '@nextui-org/react';
import { GoogleAdsenseContainer } from './adSense';

export const Footer = () => {
  return (
    <NextUiFooter>
      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        {/* <p style={{ background: 'lightgrey', width: '50%', height: '50px' }}></p> */}
        <GoogleAdsenseContainer />
      </span>

    </NextUiFooter>
  )
}

/*
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5131740489376360"
     crossorigin="anonymous"></script>
<!-- ad-footer -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5131740489376360"
     data-ad-slot="9586280246"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
*/
