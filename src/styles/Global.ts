import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
        cursor: pointer;
    }

    ul, ol, li{
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label{
        font-family: 'Inter', sans-serif;
    }

    :disabled{
        filter: brightness(78%);
    }


  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--color-primary-50) var(--color-grey-0);
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: var(--color-grey-0);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-50);
    border-radius: 13px;
    border: 2px solid var(--color-grey-0);
  }

    :root{
        --color-primary: #27AE60;
        --color-primary-10: #27AE6010;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --color-grey-600: #333333;
        --color-grey-600-50: #33333350;
        --color-grey-300: #828282;
        --color-grey-250: #999999;
        --color-grey-200: #BDBDBD;
        --color-grey-100: #E0E0E0;
        --color-grey-50: #F2F2F2;
        --color-grey-0: #F5F5F5;
        --color-white: #FFFFFF;
        --color-black: #000000;
        --color-negative: #E60000;
        --color-warning:#FFCD07;
        --color-sucess:#168821;
        --color-information:#155BCB;

        --heading-1: 1.625rem;
        --heading-2: 1.375rem;
        --heading-3: 1.125rem;
        --heading-4: 0.875rem;
        --headline: 1rem;
        --body: 0.875rem;
        --caption: 0.75rem;

    }
`;
