import React from 'react'

const HeadingWithText = (props) => {
  const { heading, text } = props

  return (
    <div className="HeadingWithText">
      <div className="HeadingWithText__inner">
        <h1 className="HeadingWithText__h1 f-vogue-72-42 a-fade-in-up">{heading}</h1>
        <p className="HeadingWithText__p a-fade-in-up">{text}</p>
      </div>
    </div>
  )
}

export default HeadingWithText