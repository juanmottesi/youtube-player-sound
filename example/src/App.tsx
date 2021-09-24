import React from 'react'

import { YoutubeAudio } from 'youtube-player-sound'
import 'youtube-player-sound/dist/index.css'

const App = () => {
  return <YoutubeAudio songs={['https://www.youtube.com/embed/oUFJJNQGwhk?autoplay=1&mute=0&controls=0&origin=https%3A%2F%2Fcookpete.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1']} autoPlay />
}

export default App
