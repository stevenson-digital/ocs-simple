import React from 'react'
import HeadingWithText from './HeadingWithText'

export default class Contact extends React.Component {
  state = {
    heading: '',
    text: ''
  }

  componentDidMount() {
    const StoryblokClient = require('storyblok-js-client')
    
    const Storyblok = new StoryblokClient({
      accessToken: '1zr64RGrbHn0GX8spfMvfAtt',
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })

    Storyblok.get('cdn/stories/contact', {})
    .then(response => {
      const content = response.data.story.content.body[0]
      const text = Storyblok.richTextResolver.render(content.text.content[0])

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