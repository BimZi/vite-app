import { Stack, Box, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { HomePageContext } from './context'

function Header() {
  const {refs} = useContext(HomePageContext)

  const handleClick = (ref) => () => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  useEffect(() => {
    console.log('wawa', refs)
  }, [refs])
  return (
    <Box
      ref={refs.headerRef}
      position="absolute" 
      width="100%" 
      sx={{background: "rgba(	0, 51, 102, 0.5)"}}
    >
      <Stack 
        m={2} pl={4} direction="row" spacing={4} 
        sx={{
          color: 'white',
          "& > *:hover": {
            color: "#468499",
            cursor: "pointer"
          }
        }}
      >
        <Typography variant="h6" onClick={handleClick(refs.featureRef)}>Feature</Typography>
        <Typography variant="h6" onClick={handleClick(refs.videoRef)}>Showcase</Typography>
        <Typography variant="h6" onClick={handleClick(refs.testimonialRef)}>Testimonials</Typography>
        <Typography variant="h6" onClick={handleClick(refs.faqRef)}>Faq</Typography>
        <Typography variant="h6" onClick={handleClick(refs.footerRef)}>Contact</Typography>
      </Stack>
    </Box>
  )
}

export default Header
