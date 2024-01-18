import { Box, Divider, Typography } from '@mui/material'
import { useContext } from 'react'
import { HomePageContext } from './context'

function Feature() {
  const imageURL = '/Bitmap.png'
  const {refs} = useContext(HomePageContext)

  return (
    <>
      <Box ref={refs.featureRef} width={1} sx={{display: 'flex', alignItems: 'center', flexDirection: "column"}}>
        <Box sx={{width: "fit-content"}}>
          <Typography variant="h4" mb={1.5}>Feature</Typography>
          <Divider flexItem sx={{ borderWidth: '4px', borderColor: "#D1C4E9", borderRadius: "10px"}} variant="middle"/>
        </Box>
      </Box>

      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} mt={16} width="100%">
        <Box sx={{flex: '1', height: "400px",}}>
          <Box
            component="div"
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imageURL})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              transform: 'scaleX(-1)',
            }}
          />
        </Box>
        <Box sx={{textAlign: 'center'}} mx={16}>
          <Box sx={{textAlign: 'left'}}>
            <Typography variant='h5'>Sed Imperdiet Enim li Vitae Viverra Justo</Typography>
            <Typography variant='body2' my={4}>
              Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} mt={16} width="100%">
        <Box sx={{textAlign: 'center'}} mx={16}>
          <Box sx={{textAlign: 'left'}}>
            <Typography variant='h5'>Sed Imperdiet Enim li Vitae Viverra Justo</Typography>
            <Typography variant='body2' my={4}>
              Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis.
            </Typography>
          </Box>
        </Box>
        <Box sx={{flex: '1', height: "400px",}}>
          <Box
            component="div"
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imageURL})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Box>
      </Box>
    </>
  )
}

export default Feature
