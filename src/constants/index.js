export const StoryblokClient = require('storyblok-js-client')
export const Storyblok = new StoryblokClient({
  accessToken: '1zr64RGrbHn0GX8spfMvfAtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})