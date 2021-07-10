import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import clinet from '../config/apollo'
import '../componentes/style.css'
function MyApp({ Component, pageProps }) {
  
  return( 
  <ApolloProvider client={clinet}> 
  <Component {...pageProps} /> 
  </ApolloProvider>

    )
}

export default MyApp
