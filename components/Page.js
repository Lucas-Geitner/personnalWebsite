import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Link from 'next/link'
import { withRouter } from 'next/router'

import Header from './Header'
import Meta from './Meta'
import '../style.css'


const theme = {
  black: '#292E38'
}

const StyledPage = styled.div`
`

const Inner = styled.div`
`

const Rechercher = () => (
  <nav className="hidden lg:block  lg:w-1/3 w-full pb-10 lg:pb-0 ">
    <ul className="list-reset flex flex-col">
      <li className="font-light">
        <Link href="/rechercher">
          <a className="font-light text-black hover:text-blue-darker no-underline" href="/rechercher">Auteurs</a>
        </Link>
      </li>
      <li className=" pt-5 font-light">
        <Link href="/rechercher">
          <a className=" font-light text-black hover:text-blue-darker no-underline" href="/rechercher">Recceuils</a>
        </Link>
      </li>
      <li className=" pt-5 font-light">
        <Link href="/rechercher">
          <a className=" font-light text-black hover:text-blue-darker no-underline" href="/rechercher">Utilisateurs</a>
        </Link>
      </li>
    </ul>
  </nav>
)

const Decouvrir = () => (
  <nav className="hidden lg:block lg:w-1/3 w-full pb-10 lg:pb-0 ">
    <ul className="list-reset flex flex-col">
      <li className="font-light">
        <Link href="/">
          <a className="font-light text-black hover:text-blue-darker no-underline" href="/">Présentation</a>
        </Link>
      </li>
      <li className=" pt-5 font-light">
        <Link href="/">
          <a className=" font-light text-black hover:text-blue-darker no-underline" href="/">Selection hebdomadaire</a>
        </Link>
      </li>
      <li className=" pt-5 font-light">
        <Link href="/">
          <a className=" font-light text-black hover:text-blue-darker no-underline" href="/">Application Mobile</a>
        </Link>
      </li>
      <li className=" pt-5 font-light">
        <Link href="/">
          <a className=" font-light text-black hover:text-blue-darker no-underline" href="/">Poeme au hasard - flow</a>
        </Link>
      </li>
      <li className=" pt-5 font-light">
        <Link href="/">
          <a className=" font-light text-black hover:text-blue-darker no-underline" href="/">Mon profil</a>
        </Link>
      </li>
    </ul>
  </nav>
)

class Page extends Component {
  render () {
    const { pathname } = this.props.router

    return (
      <ThemeProvider theme={theme}>
        <StyledPage className="antialiased">
          <Header />
          <Meta />
          <div className="container mx-auto flex lg:flex-row flex-col">
            <Inner className="w-full">{this.props.children}</Inner>
          </div>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default withRouter(Page)
