import react from 'react'
import styled from 'styled-components'
import { TitleText, TitleBox } from './styles/Title'

const Block = ({ item, index }) => (
  <TitleBox index={index}>
    <TitleText index={index}>
      {item.titre}
    </TitleText>
  </TitleBox>
)

export default Block
