import React from 'react'

const HeadingWithText = (props) => {
  const { heading, text } = props

  return (
    <div className="HeadingWithText">
      <h1 className="HeadingWithText__h1">{heading}</h1>
      <p className="HeadingWithText__p">{text}</p>
    </div>
  )
}

export default HeadingWithText