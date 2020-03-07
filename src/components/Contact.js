import React from 'react'
import HeadingWithText from './HeadingWithText'

const Contact = (props) => {
  const { heading, text } = props

  return (
    <div className="Contact">
      <HeadingWithText heading={'Contact'} text={'ollie@stevenson.digital'}/>
    </div>
  )
}

export default Contact