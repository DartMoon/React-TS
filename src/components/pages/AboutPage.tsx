import React from "react";
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return(
    <>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut debitis delectus impedit iste laborum minima, numquam porro. Consequuntur, dolorum?</p>
      <button className='btn' onClick={() => history.push('/')}>Go Back</button>
    </>
  )
}