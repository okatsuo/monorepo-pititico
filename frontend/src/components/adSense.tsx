import { useEffect } from "react"

export const GoogleAdsenseContainer = () => {
  useEffect(() => {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  })

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', backgroundColor: 'red' }}
        data-ad-client="ca-pub-5131740489376360"
        data-ad-slot="9586280246"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </>
  )
}
