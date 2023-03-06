export default function Player({ videoSrc, videoTitle }) {
  return (
    <iframe
      width='100%'
      className='aspect-video'
      src={videoSrc}
      title={videoTitle}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
  )
}
