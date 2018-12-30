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
    <meta name="description" content="Curieux" />
    <meta property="og:title" content="Lucas Geitner" />
    <meta property="og:description" content="Curieux" />
    <meta property="og:image" content="https://geitner.io/static/lg.png" />
    <meta property="og:url" content="https://geitner.io" />
    <meta property="og:site_name" content="Lucas Geitner" />
    <meta name="twitter:title" content="Lucas Geitner" />
    <meta name="twitter:image" content="https://geitner.io/static/lg.png" />
    <meta name="twitter:description" content="Curieux" />
    <meta name="twitter:url" content="https://geitner.io" />
    <meta name="twitter:card" content="summary_large_image" />
    {/* fav */}
    {/* <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/static/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" /> */}
    {/* END -- FAV */}
  </Head>
)
