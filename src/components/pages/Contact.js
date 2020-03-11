import React from 'react'
import HeadingWithText from '../HeadingWithText'
import { Storyblok } from '../../constants'

export default class Contact extends React.Component {
  state = {
    heading: '',
    text: ''
  }

  componentDidMount() {
    Storyblok.get('cdn/stories/contact', {})
    .then(response => {
      const content = response.data.story.content.body[0]
      const text = Storyblok.richTextResolver.render(content.text)

      this.setState({
        heading: content.heading,
        text: text
      })
    }).catch(error => { 
      console.log(error)
    })
  }

  render() {
    return (
      <div className="Contact">
        <HeadingWithText heading={this.state.heading} text={this.state.text}/>
      </div>
    )
  }
}