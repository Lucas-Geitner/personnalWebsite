import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=latin-ext'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const Open = new FontFaceObserver('Open Sans')

  Open.load().then(() => {
    document.documentElement.classList.add('Open Sans')
  })

  const link2 = document.createElement('link')
  // <link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet">

  link2.href = 'https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i'
  link2.rel = 'stylesheet'

  document.head.appendChild(link2)

  const Alegreya = new FontFaceObserver('Merriweather')

  Alegreya.load().then(() => {
    document.documentElement.classList.add('Merriweather')
  })
}


export default class MyDocument extends Document {
  componentDidMount () {
    Fonts()
  }

  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
