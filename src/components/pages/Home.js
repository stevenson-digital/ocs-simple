import React from 'react'
import HeadingWithText from '../HeadingWithText'
import { Storyblok } from '../../constants'

export default class Home extends React.Component {
  state = {
    heading: '',
    text: ''
  }

  componentDidMount() {
    Storyblok.get('cdn/stories/home', {})
    .then(response => {
      const content = response.data.story.content.body[0]
      this.setState({
        heading: content.heading,
        text: content.text.content[0].content[0].text
      })
    }).catch(error => { 
      console.log(error)
    })
  }

  render() {
    return (
      <div className="Home">
        <HeadingWithText heading={this.state.heading} text={this.state.text}/>
      </div>
    )
  }
}