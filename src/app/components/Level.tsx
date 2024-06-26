import React from 'react'

export default function Level(params:Level) {
  return (
    <div className="container">
    <p>{params.value}</p>
    <p>{params.name}</p>
  </div>
  )
}
