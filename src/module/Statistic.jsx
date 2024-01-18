import { Box, Divider, Typography } from '@mui/material'
import { useContext } from 'react'
import { HomePageContext } from './context'

function Statistic() {
  const {refs} = useContext(HomePageContext)

  return (
    <>
      <Box ref={refs.statisticRef} sx={{ justifyContent: 'center', display: 'flex', textAlign: 'center' }}>
        <Box mx={2} width="20rem">
          <Typography color="#673AB7" variant='h4'>+200M</Typography>
          <Typography variant='subtitle'>Download</Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ borderWidth: '1px'}} />

        <Box mx={2} width="20rem">
          <Typography color="#673AB7" variant='h4'>+80M</Typography>
          <Typography variant='subtitle'>Transaction</Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ borderWidth: '1px'}}/>

        <Box mx={2} width="20rem">
          <Typography color="#673AB7" variant='h4'>+140M</Typography>
          <Typography variant='subtitle'>Rating</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Statistic
