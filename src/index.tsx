import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: any
  }
}

export const YoutubeAudio = () => {
  const [player, setPLayer] = useState<any>({})
  const [playerState, setPlayerState] = useState(-1)

  const handleStateChange = (event: any) => {
    setPlayerState(event.data)
  }

  const startPlayer = () => {
    setPLayer(
      new window.YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'oUFJJNQGwhk',
        events: {
          onReady: (event: any) => event.target.playVideo(),
          onStateChange: handleStateChange
        }
      })
    )
  }

  useEffect(() => {
    const tag = document.createElement('script')
    tag.id = 'youtubeApi'
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    // eslint-disable-next-line no-unused-expressions
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => startPlayer()
  }, [])

  console.log(player, playerState)

  const pauseOrPlay = () => {
    if (playerState === 2) {
      player.playVideo()
    } else {
      player.pauseVideo()
    }
  }

  return (
    <React.Fragment>
      <div id="player" style={{ display: 'none' }} />
      <div className={styles.test}>
        <button onClick={pauseOrPlay}>Play</button>
      </div>
    </React.Fragment>
  )
}
