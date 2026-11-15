/** @jsx jsx */
import { Box, jsx, useColorMode } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import useEmiliaConfig from "../hooks/use-emilia-config"

// @ts-ignore
import React from "react"

type VideoHeaderProps = {
  videoUrl: string
  videoTitle: string
  textItems: string[]
}

const VideoHeader = ({ videoUrl, videoTitle, textItems }: VideoHeaderProps) => {
  const { showThemeAuthor } = useEmiliaConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })

  if(textItems[0] === "none")
  {
    return (<animated.div></animated.div>)
  }

  return (
    <animated.div style={{  maxWidth: '900px', /*border: '4px solid red', padding: '20px', */ overflow: 'hidden', }} sx={{ maxWidth: `900px`, mx: `auto`, mt: 5, p: { textAlign: `left` } }}>

      <animated.div>
        <iframe 
        width="800px" height="450px"
        src={textItems[0]}
        title={videoTitle}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </animated.div>

      {/* <h3  style={{ marginLeft: '15px', display: 'block', margin: '2px 0 0 0'}}>Title</h3>
      <p style={{ marginLeft: '15px', display: 'block', margin: '2px 0 0 0'}}>Some Description</p> */}
      </animated.div>

  )
}

export default VideoHeader
