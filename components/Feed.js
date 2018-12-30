import React from 'react'
import Link from 'next/link'
import Block from './Block'
import { FeedStyle } from './styles/Feed'

const Feed = ({ items, oposite = false }) => {
  const add = (oposite) ? 1 : 0
  return (
    <FeedStyle>
      {items.map((i, index) => (
        <Link
          prefetch
          href={{
            pathname: '/poeme',
            query: { id: i.id }
          }}
        >
          <a>
            <Block key={i.id} item={i} index={index + add} />
          </a>
        </Link>
      )) }
    </FeedStyle>
  )
}

export default Feed
