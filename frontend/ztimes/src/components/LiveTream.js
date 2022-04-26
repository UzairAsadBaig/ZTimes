import React from 'react'
import ReactLivestream from 'react-livestream'

// Optional component to be rendered
// when you're not streaming
function OfflineComponent() {
  return (
    <div>
      <p>I am offline now, but checkout my stream on Fridays at 5 PM EST</p>
    </div>
  )
}

function LiveTream() {
  return (
    <div className="App">
      <ReactLivestream
        platform="youtube"
        youtubeApiKey={'AIzaSyCth3bcaLDgG7KCjXROKZYlXTyx05svojU'}
        youtubeChannelId="UCoL149INj8V4kWjVHrbRI3w"
        offlineComponent

      />
    </div>
  )
}

export default LiveTream;