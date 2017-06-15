import { injectGlobal } from 'styled-components';
import font from '../tokens/font';
import { namedColors } from '../tokens/color';
import { transition } from './animation';

injectGlobal`
    body {
        color: ${ namedColors.copy };
        font-family: ${ font.body };
        font-size: 0.875rem; /* set to 14px equivalent */
        line-height: 1.4;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: subpixel-antialiased;
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 1rem;
        font-family: ${ font.heading };
        font-weight: normal
    }

    ol, ul {
        margin: 0 0 1.6rem
    }

    p {
        margin: 0 0 1rem;
    }

    a {
        border-bottom: 1px solid transparent;
        text-decoration: none;
        ${ transition() }
    }
    a:hover,
    a:focus {
        border-color: ${ namedColors.copy };
    }
    a img {
        border: 0;
    }

    code {
        padding: 2px 4px;
        background: black;
        color: greenyellow;
    }
`;
