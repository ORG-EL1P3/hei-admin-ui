import React, { useEffect } from 'react'
import axios from 'axios';
import { dataProvider } from '../providers/data-provider';
import EventTable from '../components/EventTable';

const EventList: React.FC = () => {
  return (
    <>
      <div className='flex bg-gradient-to-b from-vshad2 to-vshade1 justify-around items-center min-h-screen min-w-full' >
          <EventTable/>
      </div>
    </>
  );
}

export default EventList;