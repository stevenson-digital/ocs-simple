import React, { useState, useEffect } from 'react'
import HeadingWithText from '../HeadingWithText'
import { Storyblok } from '../../constants'

export function Projects() {
  const [heading, setHeading] = useState(null)
  const [text, setText] = useState(null)

  useEffect(() => {
    Storyblok.get('cdn/stories/projects', {})
    .then(response => {
      const content = response.data.story.content.body[0]
      setHeading(content.heading)
      setText(Storyblok.richTextResolver.render(content.text))

    }).catch(error => { 
      console.log(error)
    })
  }, [])

  return (
    <div className="Projects">
      <HeadingWithText
        heading={heading}
        text={text}
      />
    </div>
  )
}
