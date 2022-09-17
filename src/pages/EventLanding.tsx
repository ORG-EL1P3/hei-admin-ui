import React from 'react'
import BoilerCard from '../components/BoilerCard';
import { useNavigate } from 'react-router-dom';

const EventLanding: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex bg-gradient-to-b from-vshad2 to-vshade1 justify-around items-center min-h-screen min-w-full' >
        <button
        className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-red-500'
        onClick={() => navigate('/')}
        >
          Se déconnecter
        </button>
        <BoilerCard text='Évènemets' title='Ajouter un nouvel évènement' redirect='/events'/>
        <BoilerCard text='Liste' title='Voir la liste des évènements' redirect='/list'/>
      </div>
    </>
  );
}

export default EventLanding;
