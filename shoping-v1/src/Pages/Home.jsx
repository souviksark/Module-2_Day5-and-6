//es6 => arrow function
//rafce

import React from 'react'
import CustomButton from '../components/CustomButton'

const Home = () => {
  return (
    <div>
        <h1>This is my home page and some information is there</h1>
        <marquee>Home page</marquee>
        <CustomButton cr='red' bgColor='yellow' name='Home Button' />
    </div>
  )
}

export default Home