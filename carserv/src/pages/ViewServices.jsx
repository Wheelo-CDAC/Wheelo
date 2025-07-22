import React, { useEffect } from 'react'
import CarWashIcon from '../assets/icons/CarWashIcon.png'
import OilIcon from '../assets/icons/OilIcon.png'
import BrakeRepairIcon from '../assets/icons/BrakeRepairIcon.png'
import BatteryIcon from '../assets/icons/BatteryIcon.png'
import ACIcon from '../assets/icons/ACIcon.png'
import { useState } from 'react';
import Service from '../components/Service';
import '../css/ViewServices.css'


export default function ViewServices() {

  const [services, setServices] = useState([
    { id: 1, name: 'Oil Change', price: 500, duration: '30 mins',description:  'Engine oil + filter replacement', icon:  OilIcon},
    { id: 2, name: 'Brake Repair', price: 1500, duration: '1 hr',description:  'Brake pad check and cleaning', icon: BrakeRepairIcon },
    { id: 3, name: 'Car Wash', price: 1500, duration: '1 hr',description:  'Exterior and interior cleaning', icon: CarWashIcon },
    { id: 4, name: 'Battery Replacement', price: 1500, duration: '1 hr',description:  'Replace car battery', icon: BatteryIcon },
    { id: 5, name: 'AC Service', price: 1500, duration: '1 hr',description:  'Gas refill + general AC maintenance', icon: ACIcon },
    { id: 6, name: 'Oil Change', price: 500, duration: '30 mins',description:  'Engine oil + filter replacement', icon:  OilIcon},
    { id: 7, name: 'Brake Repair', price: 1500, duration: '1 hr',description:  'Brake pad check and cleaning', icon: BrakeRepairIcon },
    { id: 8, name: 'Car Wash', price: 1500, duration: '1 hr',description:  'Exterior and interior cleaning', icon: CarWashIcon },
    { id: 9, name: 'Battery Replacement', price: 1500, duration: '1 hr',description:  'Replace car battery', icon: BatteryIcon },
    { id: 10, name: 'AC Service', price: 1500, duration: '1 hr',description:  'Gas refill + general AC maintenance', icon: ACIcon },
  ]);

  const [selectedServices, setSelectedServices] = useState([])

  const onAdd = (service)=>{
    if(!selectedServices.find(s => s.id === service.id))
      setSelectedServices([...selectedServices, service])
  }
  


  useEffect(() => {

  }, [])
  return (
    // <div className='container'>
    <div className=''>
      <div className='row g-2 mt-4 justify-content-center'>
        {
          services.map((service) => <div className='col-5 m-2 p-2 border rounded p-2 x ' key={service.id}>
                                        <Service service={service} onAdd={onAdd}/>
                                    </div>)
        }
      </div>
    </div>
  )
}
