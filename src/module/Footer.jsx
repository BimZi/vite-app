import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { HomePageContext } from './context'

function Footer() {
  const {refs} = useContext(HomePageContext)

  return (
    <Box
      sx={{
        backgroundImage: `url(/footer.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      pt={100}
    >
      <Box ref={refs.footerRef} textAlign="center">
        <Typography mb={12} variant="h4" fontWeight="bold" color="white">What are you waiting for? Download Now!</Typography>
        <img width={200} src="/google-play-badge.png" />
      </Box>

      <Box sx={{display: 'flex'}} p={10} m="60px 40px 0">
        <Box mx={4} sx={{flex: "1 1 0"}} height="200px">
          <img width="200" src="/logo.png" alt="logo"/>
        </Box>
        <Box mx={4} sx={{flex: "1 1 0", display: 'flex', flexDirection: "column"}} height="200px">
          <Typography mb={4} color="white" variant='body' fontWeight="bold">COMPANY</Typography>
          <Typography mb={2} color="white" variant='body2' >Donec dignissim</Typography>
          <Typography mb={2} color="white" variant='body2' >Curabitur egestas</Typography>
          <Typography mb={2} color="white" variant='body2' >Nam posuere</Typography>
          <Typography mb={2} color="white" variant='body2' >Aenean facilisis</Typography>
        </Box>
        <Box mx={4} sx={{flex: "1 1 0", display: 'flex', flexDirection: "column"}} height="200px">
          <Typography mb={4} color="white" variant='body' fontWeight="bold">SERVICES</Typography>
          <Typography mb={2} color="white" variant='body2' >Cras convallis</Typography>
          <Typography mb={2} color="white" variant='body2' >Vestibulum faucibus</Typography>
          <Typography mb={2} color="white" variant='body2' >Quisque lacinia purus</Typography>
          <Typography mb={2} color="white" variant='body2' >Aliquam nec ex</Typography>
        </Box>
        <Box mx={4} sx={{flex: "1 1 0", display: 'flex', flexDirection: "column"}} height="200px">
          <Typography mb={4} color="white" variant='body' fontWeight="bold">LEGAL</Typography>
          <Typography mb={2} color="white" variant='body2' >Suspendisse porttitor</Typography>
          <Typography mb={2} color="white" variant='body2' >Nam posuere</Typography>
          <Typography mb={2} color="white" variant='body2' >Curabitur egestas</Typography>
        </Box>
        <Box mx={4} sx={{flex: "auto 1 0"}} height="200px"></Box>
      </Box>
    </Box>
  )
}

export default Footer
