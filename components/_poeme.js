import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const POEME_QUERY = gql`
 query poeme($id: ID!){
     poeme(id: $id) {
        titre
        id
        strophe
    }
 }
`

const Container = styled.div`
    display: grid;
    margin: 20rem;
    grid-gap: 20px;
`


const Poeme = props => (
  // query
  <Query query={POEME_QUERY} variables={{ id: props.query.id }}>
    {({ data, error, loading }) => {
      console.log(loading, data)
      if (loading) return <></>
      if(error) console.log(error);
      const { titre, strophe } = data.poeme

      return (
        <Container>
          <h2>{titre}</h2>

          {strophe.map(i => <span key={i}>{i}</span>)}

        </Container>
      )
    }}
  </Query>
)

export default Poeme
