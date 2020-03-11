export const StoryblokClient = require('storyblok-js-client')
export const Storyblok = new StoryblokClient({
  accessToken: process.env.REACT_APP_STORYBLOK_API_KEY,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})