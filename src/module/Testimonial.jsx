import { Box, Divider, Typography } from '@mui/material'
import { users } from '../assets/users'
import { useContext, useState } from 'react'
import { HomePageContext } from './context'

function Testimonial() {
  const {refs} = useContext(HomePageContext)
  const [selected, setSelected] = useState(2)

  const handleChangeSelected = (index) => () => {
    setSelected(index)
  }

  return (
    <>
      <Box ref={refs.testimonialRef} width={1} sx={{display: 'flex', alignItems: 'center', flexDirection: "column"}}>
        <Box sx={{width: "fit-content"}} mb={4}>
          <Typography variant="h4" mb={1.5}>Testimonial</Typography>
          <Divider 
            flexItem 
            sx={{ borderWidth: '4px', borderColor: "#D1C4E9", borderRadius: "10px"}} 
            variant="middle" 
          />
        </Box>

        <Box my={1.5} sx={{width: "500px", textAlign: 'center'}}>
          <Typography variant="body2">{users[selected].testimonial}</Typography>

          <Box my={8} sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant="body2" color="#673AB7" fontWeight="medium">{users[selected].name}</Typography>
            <Typography variant="body2" color="#673AB7">&nbsp; - &nbsp;</Typography>
            <Typography variant="body2" color="#673AB7">{users[selected].position}</Typography>
          </Box>
        </Box>

        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: "center"}}>
          {users.map((user, index) => (
            <Box 
              key={user.name}
              component="img" 
              width={100} 
              sx={{borderRadius: "50%", objectFit: 'cover', cursor: 'pointer',
                opacity: index == selected ? "100%" : "70%", 
                scale: index == selected ? "100%" : "70%"}}
              mx={1}
              src={user.avatar}
              alt="avatar"
              onClick={handleChangeSelected(index)}
            />
          ))}
        </Box>
      </Box>
    </>
  )
}

export default Testimonial
