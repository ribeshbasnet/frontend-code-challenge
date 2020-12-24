/**
 * Project name : Frontend Code Chanllenge
 * Desc: Root file for app
 * Author: Ribesh Basnet
 */



import React from 'react';
import ReactDOM from 'react-dom';
import App from './lib';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import { Global } from '@emotion/core';
import GenericStyles from './genericStyle';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
            <Global styles={GenericStyles} />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
