import { Box, Typography } from "@mui/material"
import { useContext } from "react"
import { HomePageContext } from "./context"


function Jumbotron() {
  const imageURL = '/Banner.png'
  const {refs} = useContext(HomePageContext)

  return (
    <>
      <Box
        ref={refs.jumbotronRef}
        component="div"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '120%',
          backgroundImage: `url(${imageURL})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <Box>
      <Box pl={12} mt={12} width="50%">
        <Typography variant='h3'>Sed Imperdiet Enim li Vitae Viverra Justo</Typography>
        <Typography variant='h5' my={4}>
          Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis.
        </Typography>
      </Box>

      <Box pl={12}>
        <img width={200} src="/google-play-badge.png" />
      </Box>
      </Box>
    </>
  )
}

export default Jumbotron
