import React from 'react'

import { MoodContext } from "./StatusPage";
import { useContext } from "react";


const ContactUs = () => {
    const mood = useContext(MoodContext);

  return (
      <>
    <p>{mood}</p>

    

    
    </>
  )
}

export default ContactUs