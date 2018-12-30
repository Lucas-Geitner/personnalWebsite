import React, { useState } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Block from '../components/Block'
import {
  TitleInput,
  TitleInput2,
  TitleInput3,
  TitleText,
  TitleInputTitre
} from '../components/styles/Title'
import Feed from '../components/Feed'

const POEMES_QUERY = gql`
  {
    poemes{
      titre
      id
    }
  }
`


function isOdd (num) {
  return num % 2
}

const TitleBox = styled.div`
  background-color: ${props => (isOdd(props.index) ? 'white' : 'rgba(10, 10, 10, 0.94)')};
  display: grid;
  border-radius: 10px;
  padding-top: 26px;
  padding-bottom: 26px;
  margin: 0px;
`

const TitleBox2 = styled.div`
  background-color: ${props => (isOdd(props.index) ? 'white' : 'rgba(10, 10, 10, 0.94)')};
  display: grid;
  border-radius: 10px;
  padding-top: 46px;
  margin: 0px;
  grid-row: span 2;
  grid-row-start: 2;
`

const TitleBox3 = styled.div`
  background-color: ${props => (isOdd(props.index) ? 'white' : 'rgba(10, 10, 10, 0.94)')};
  display: grid;
  border-radius: 10px;
  padding-top: 46px;
  padding-bottom: 46px;
  margin: 0px;
`

const Box = styled.div`
  /* margin: 10rem 15rem; */
  margin: 10rem 15rem 0rem 15rem;
  transition: all 1s;
  @media (max-width: 750px) {
    transition: all 1s;
    margin: 5rem 1rem;
  }

`

const Body = styled.div`
  transition: all 1s;
  display: grid;
  padding: 20px;
  grid-gap: 30px;
  grid-column-gap: 100px;
  grid-template-columns: minmax(400px, 1fr) minmax(400px, 1fr);

  @media (max-width: 1200px) {
    transition: all 1s;
    grid-gap: 30px;
    padding: 10px;
  }

  @media (max-width: 900px) {
    transition: all 1s;
    grid-template-columns: minmax(300px, 1fr);
  }

`

const Column1 = styled.div`
  transition: all 1s;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 170px 370px 150px 100px;
    @media (max-width: 1200px) {
    transition: all 1s;
    grid-gap: 80px;
  }
`
const Column2 = styled.div`
  transition: all 1s;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(80vh, 100px);
`


const text = `
La rue assourdissante autour de moi hurlait.
Longue, mince, en grand deuil, douleur majestueuse,
Une femme passa, d 'une main fastueuse
Soulevant, balançant le feston et l 'ourlet ;

Agile et noble, avec sa jambe de statue.
Moi, je buvais, crispé comme un extravagant,
Dans son oeil, ciel livide où germe l 'ouragan,
La douceur qui fascine et le plaisir qui tue.

Un éclair...puis la nuit!-Fugitive beauté
Dont le regard m 'a fait soudainement renaître,
Ne te verrai - je plus que dans l 'éternité ?

Ailleurs, bien loin d 'ici ! trop tard ! jamais peut-être !
Car j 'ignore où tu fuis, tu ne sais où je vais,
Ô toi que j 'eusse aimée, ô toi qui le savais !
`;

const Index = () => {
  const [titre, setTitre] = useState('A chacun sa chimère')
  const [strophe, setStrophe] = useState(text)
  const [nom, setNom] = useState('Nom')
  const [prenom, setPrenom] = useState('Prenom')

  return (
    <Query query={POEMES_QUERY}>
      {({ data, loading }) => {
        console.log({ data })
        if (loading) return <></>
        return (
          <Box>
            <Body>
              <Column1>
                <TitleText index={1}>Ajouter un poême </TitleText>
                <TitleBox2>
                  <TitleInputTitre value={titre} onChange={e => setTitre(e.target.value)} onBlur={e => console.log(e.target.value)} />
                </TitleBox2>
                <TitleBox index={1}>
                  <TitleInput index={1} value={nom} onChange={e => setNom(e.target.value)} onBlur={e => console.log(e.target)} />
                  <TitleInput index={1} value={prenom} onChange={e => setPrenom(e.target.value)} onBlur={e => console.log(e.target)} />
                </TitleBox>
                <TitleInput2 index={1} type="submit" value="Sauvegarder" />
              </Column1>
              <Column2>
                <TitleBox3>
                  <TitleInput3 defaultValue={strophe} onChange={e => setStrophe(e.target.value)} onBlur={e => console.log(e.target)} />
                </TitleBox3>
              </Column2>

            </Body>
          </Box>
        )
      }}
    </Query>
  )
}

export default Index
