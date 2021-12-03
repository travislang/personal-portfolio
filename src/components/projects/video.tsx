import React from 'react'

interface IProps {
    videoSrc: string
    videoTitle: string
}
const Video = ({ videoSrc, videoTitle }: IProps): JSX.Element => (
    <div>
        <iframe
            src={videoSrc}
            title={videoTitle}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            frameBorder='0'
            allowFullScreen={true}
            width='100%'
            height='250'
        />
    </div>
)
export default Video
