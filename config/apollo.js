import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import fetch from 'node-fetch';

const clinet = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://mysterious-woodland-26162.herokuapp.com/',
        fetch
    })
});

export default clinet;