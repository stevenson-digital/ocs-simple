import React from 'react'

const HeadingWithText = (props) => {
  const { heading, text } = props

  return (
    <div className="HeadingWithText">
      <div className="HeadingWithText__inner">
        <h1 className="HeadingWithText__h1 f-vogue-72-42">{heading}</h1>
        <p className="HeadingWithText__p">{text}</p>
      </div>
    </div>
  )
}

export default HeadingWithText