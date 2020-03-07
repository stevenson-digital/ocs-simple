import React from 'react'
import HeadingWithText from './HeadingWithText'

const Home = (props) => {
  const { heading, text } = props

  return (
    <div className="Home">
      <HeadingWithText heading={'Ollie Stevenson'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non tellus a metus sagittis porttitor vitae eget tellus. Morbi at aliquet erat, sit amet rutrum eros. Nunc finibus nulla vel ipsum congue, at iaculis nisi viverra. Aliquam erat volutpat. Sed rutrum neque vitae urna molestie lobortis.'}/>
    </div>
  )
}

export default Home