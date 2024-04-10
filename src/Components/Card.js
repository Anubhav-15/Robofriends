import React from 'react'

const Card = ({id,name,email}) => {
  return (
    <div className='bg-light-green dib br3 ma2 pa3 bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='Not Found'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
