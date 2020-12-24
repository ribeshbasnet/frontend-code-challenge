import { css } from '@emotion/core';
import theme from './theme';

const genericStyle = css`
    @import-normalize;

    html,
    body {
        height: 100%;
        width: 100%;
    }

    body {
        margin: 0;
        font-family: ${theme.font.family.inter};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${theme.color.kWhiteColor};
    }

    figure,
    ul,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button,
    p {
        margin: 0;
        padding: 0;
    }

    ul li {
        list-style: none;
    }

    .app {
        position: relative;
        min-width: 100%;
    }

    .container {
        padding-left: 223px;
    }

    .section-pad-l {
        padding-left: 60px;
    }

    .section-pad-r {
        padding-right: 59px;
    }

    .section-pad-t {
        padding-top: 52px;
    }

    .section-pad-b {
        padding-bottom: 52px;
    }

    .btn {
        border: 0;
        background: ${theme.color.kAliceBlueColor};
        border-radius: 25px;
        text-align: center;
        width: 192px;
        height: 49px;
    }

    .btn:hover {
        background: ${theme.color.kBrandyPunchColor};
    }

    .btn:hover span {
        color: ${theme.color.kWhiteColor};
    }

    .btn-dark {
        background: ${theme.color.kPrimaryDarkColor};
    }

    .btn span {
        color: ${theme.color.kPrimaryDarkColor};
        text-transform: uppercase;
        font-variant: normal;
        font-style: normal;
        font-weight: ${theme.font.weight.bold};
        font-size: ${theme.font.size.small};
        line-height: 21px;
    }

    .btn-dark span {
        color: ${theme.color.kWhiteColor};
        text-transform: uppercase;
    }

    @media ${theme.sizeConfig.phone} {
        .section-pad-l {
            padding-left: 0px;
        }

        .section-pad-r {
            padding-right: 0px;
        }

        .section-pad-t {
            padding-top: 72px;
        }

        .section-pad-b {
            padding-bottom: 52px;
        }

        .container {
            padding: 10px 30px;
        }

        .btn {
            width: 100%;
            height: auto;
            padding: 10px 20px;
        }
    }
`;

export default genericStyle;
