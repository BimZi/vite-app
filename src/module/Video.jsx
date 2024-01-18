import { Box, Divider, Typography } from '@mui/material'
import { useContext } from 'react'
import { HomePageContext } from './context'

function Video() {
  const {refs} = useContext(HomePageContext)

  return (
    <>
      <Box ref={refs.videoRef} width={1} sx={{display: 'flex', alignItems: 'center', flexDirection: "column"}}>
        <Box sx={{width: "fit-content"}} mb={4}>
          <Typography variant="h4" mb={1.5}>Demo</Typography>
          <Divider 
            flexItem 
            sx={{ borderWidth: '4px', borderColor: "#D1C4E9", borderRadius: "10px", margin: '0 auto'}} 
            variant="middle" 
            width="2px"
          />
        </Box>

        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/NpEaa2P7qZI?si=dDmrgDTcBMyov-j9" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen 
        />
      </Box>
    </>
  )
}

export default Video
