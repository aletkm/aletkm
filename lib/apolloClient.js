import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useEffect, useState } from "react";
import fetchAccessToken from './fetchAccessToken'


const AuthorizedApolloProvider = ({ children }) => {
  
  const atoken = fetchAccessToken()
  const httpLink = createHttpLink({
      uri: 'https://profane-fb.hasura.app/v1/graphql', 
    });
    
    const authLink = setContext(async () => {
    const token = atoken
  
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
          'Accept-Language': getLanguageCode(),
        },
      }
    })
    
    const apolloClient = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      connectToDevTools: true,
    })

    return (
      <ApolloProvider client={apolloClient}>
      
        {children}

      </ApolloProvider>


      );
  
  

};

export default AuthorizedApolloProvider;

