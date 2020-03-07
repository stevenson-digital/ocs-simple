import React from 'react'
import HeadingWithText from './HeadingWithText'

const Experience = (props) => {
  const { heading, text } = props

  return (
    <div className="Experience">
      <HeadingWithText heading={'Experience'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non tellus a metus sagittis porttitor vitae eget tellus. Morbi at aliquet erat, sit amet rutrum eros. Nunc finibus nulla vel ipsum congue, at iaculis nisi viverra. Aliquam erat volutpat. Sed rutrum neque vitae urna molestie lobortis.'}/>
    </div>
  )
}

export default Experience