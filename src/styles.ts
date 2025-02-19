import { createGlobalStyle } from 'styled-components'

export const Colors = {
  beige: '#FFEBD9',
  offwhite: '#FFF8F2',
  amaranth: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '769px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: ${Colors.amaranth};
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
