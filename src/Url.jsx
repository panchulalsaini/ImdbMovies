import React from 'react'
import { useParams } from 'react-router-dom';

function Url() {
    const {id} = useParams();
  return (
    <div>
        <h1> This is Url Page</h1>
        <h1>my Name is {id}</h1>
    </div>
  )
}

export default Url;
