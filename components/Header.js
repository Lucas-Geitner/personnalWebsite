import React from 'react'
import Link from 'next/link'

import { withRouter } from 'next/router'
import { Search, Compass, PlayCircle } from 'react-feather'
import SvgComponent from './Logo'

const Header = ({ router }) => (
  <div className="bg-grey-lighter xl:mb-10">
    <div className="container mx-auto">
      <div className="ml-5 pt-10 pb-10 mr-5 md:ml-0 md:mr-0 flex  md:flex-row flex-col">
        <div className="w-full">
          <h1 className="font-serif text-3xl pb-2 mb-3 uppercase mt-0 pt-0 tracking-wide"> Lucas Geitner </h1>
          <p className="text-lg font-light leading-normal md:w-2/5 ">
      Engagé et curieux. Compétence en numérique, design, litterature, économie, communication, gestion de projet et en entrepreunariat.
          </p>
        </div>
        <div className="h-48 md:w-2/5 mt-5 mb-5 md:mb-0 md:mt-0 pl-5 md:pl-0">
          <img src="/static/tof.jpg" className="rounded h-full" />
        </div>
      </div>
      <div className="-mt-6 absolute pl-5 md:pl-0">
        <a className="" href="mailto:lucas.arkana+siteweb@gmail.com" target="_blank">
          <button className="bg-blue-lighter hover:bg-blue-light hover:text-white text-blue-dark mr-3 font-bold mr-3 pl-3 pr-3 pb-2 pt-2 rounded">Mail</button>
        </a>
        <a className="" href="https://twitter.com/lucasgeitner" target="_blank">
          <button className="bg-indigo-lighter hover:bg-indigo-light hover:text-white text-indigo-dark font-bold mr-3 pl-3 pr-3 pb-2 pt-2 rounded">Twitter</button>
        </a>
        <a className="" href="https://fr.linkedin.com/in/geitnerlucas" target="_blank">
          <button className="bg-green-lighter hover:bg-green-light hover:text-white text-green-dark font-bold mr-3 pl-3 pr-3 pb-2 pt-2 rounded ">Linkedin</button>
        </a>
      </div>
    </div>
  </div>
)

export default withRouter(Header)
