import React from 'react'

const Video = ({ videoSrc, videoTitle }) => (
    <div>
        <iframe
            src={videoSrc}
            title={videoTitle}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            frameBorder='0'
            webkitallowfullscreen='false'
            mozallowfullscreen='false'
            allowFullScreen='false'
            width='100%'
            height='250'
        />
    </div>
)
export default Video
