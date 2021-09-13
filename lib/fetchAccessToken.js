import { setContext } from '@apollo/client/link/context';

const Fetch = () => {
  setContext(async (_, { headers }) => {
    let token;
   
    if (firebase.apps.length && firebase.auth().currentUser) {
     token = await firebase
      .auth()
      .currentUser.getIdToken(true);
    }
    return token 
  })
};

export default Fetch
