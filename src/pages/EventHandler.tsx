import React, { useEffect } from 'react'
import EventCard from '../components/Card';
import { dataProvider } from '../providers/data-provider';

const EventHandler: React.FC = () => {
	return (
		<>
			<div className='flex bg-gradient-to-b from-vshad2 to-vshade1 justify-center items-center min-h-screen min-w-full' >
				<EventCard />
			</div>
		</>
	);
}

export default EventHandler;
