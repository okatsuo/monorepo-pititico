import { useRouter } from "next/router";
import { useEffect } from "react"

export const GoogleAdsenseContainer = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // console.log(err);
    }
  }, [asPath])

  return (
    <div key={asPath}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', backgroundColor: 'red', textAlign: 'center' }}
        data-ad-client="ca-pub-5131740489376360"
        data-ad-slot="9586280246"
        data-ad-format="auto"
        data-adtest={true}
        data-full-width-responsive="true"
      >
      </ins>
    </div >
  )
}
