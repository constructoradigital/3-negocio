import React from 'react'
import {InfoSection}  from '../../components'
import Pricing from '../../components/Pricing/Pricing';
import {  homeObjFour } from '../HomePage/Data';

 const Home = () => {
    return (
        <>

            <Pricing/>
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;