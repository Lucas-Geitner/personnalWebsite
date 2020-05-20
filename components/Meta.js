import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'

import Router from 'next/router'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}


export default () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title> Lucas Geitner </title>
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon.ico" />
    <meta name="description" content="~ Editeur & codeur & activiste" />
    <meta property="og:title" content="Lucas Geitner - Site  " />
    <meta property="og:description" content="~ Editeur & codeur & activiste" />
    <meta property="og:image" content="https://geitner.io/static/lg.png" />
    <meta property="og:url" content="https://geitner.io" />
    <meta property="og:site_name" content="Lucas Geitner" />
    <meta name="twitter:title" content="Lucas Geitner - Site" />
    <meta name="twitter:image" content="https://geitner.io/static/lg.png" />
    <meta name="twitter:description" content="~ Editeur & codeur & activiste" />
    <meta name="twitter:url" content="https://geitner.io" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
)
