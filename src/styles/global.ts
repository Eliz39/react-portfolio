import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Chivo', sans-serif;
    }
    body{
        background: ${props => props.theme.palette.common.bg};
        color: ${props => props.theme.palette.secondary.main};
    }
`
