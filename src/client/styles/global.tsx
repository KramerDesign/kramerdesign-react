import { createGlobalStyle } from 'styled-components'

type Props = {
  whiteColor?: boolean
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    background-color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: 'Times New Roman';
  }
`
