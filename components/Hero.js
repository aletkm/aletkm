
import React from 'react'
import Image from 'next/image'
import { useAuth } from '../context/AuthUserContext';
import abo from '../public/aborigene_final_30.png';
import banner from '../public/banner.png';

const Hero = () => {

  const { authUser, loading, signOut, fbToken } = useAuth();

if (loading) return <div>Loading...</div>;
  
  if (authUser) {
    return (
      <div class="card mb-3 w-100 p-3">
        <Image src={banner} />
        <div class="card-body">
          <h5 class="card-title text-center">Welcome to Your Profane Account</h5>
          <p class="card-text text-center">Here You will find all control of your user account... Enjoy! </p>
          <p class="card-text text-center"><small class="text-muted">INSANE Team</small></p>
        </div>
      </div>
    )
  }
}
  


export default Hero;
