import { createGlobalStyle } from 'styled-components'

export const Colors = {
  beige: '#FFF8F2',
  amaranth: '#E66767',
  white: '#333',
  lightgray: '#a3a3a3',
  green: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
