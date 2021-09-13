import { useAuth } from '../context/AuthUserContext';
import Hero from '../components/Hero';
import Login from '../components/login';

function Index() {
  const { authUser, loading, signOut, fbToken } = useAuth();

  if (loading) return <div>Loading...</div>;
  
  if (authUser) {

    return (
        <Hero />
    );
  }else{
    return(
        <Login />
    )
  }
}

export default Index
