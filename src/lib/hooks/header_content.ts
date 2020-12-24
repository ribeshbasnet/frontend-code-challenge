import {createContext, useContext} from 'react';


export const ContentHeaderContext = createContext({
   title: '',
   description: '',
   context: '',
});


export const headerContentContext = () => {
    return useContext(ContentHeaderContext);
}