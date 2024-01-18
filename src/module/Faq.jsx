import { Box, Collapse, Divider, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useState } from 'react';
import { useContext } from 'react';
import { HomePageContext } from './context';

const faqList = [
  {
    question: 'Pellentesque ac bibendum tortor?',
    answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    question: 'In mi nulla, fringilla vestibulum?',
    answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    question: 'Quisque lacinia purus ut libero?',
    answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    question: 'Quisque ut metus sit amet augue?',
    answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
]

function Faq() {
  const {refs} = useContext(HomePageContext)
  const imageURL = '/Bitmap3.png'

  const [open, setOpen] = useState(-1);

  const handleClick = (index) => () => {
    if(index == open) {
      setOpen(-1)
    } else {
      setOpen(index);
    } 
  };

  return (
    <>
      <Box ref={refs.faqRef} width={1} sx={{display: 'flex'}}>
        <Box sx={{flex: "1 1 0"}}>
          <Box ml={12} sx={{flex: "1", width: "fit-content"}} mb={4}>
            <Typography variant="h4" mb={1.5}>FAQ</Typography>
            <Divider 
              flexItem 
              sx={{ borderWidth: '4px', borderColor: "#D1C4E9", borderRadius: "10px", margin: "0 20px 0 0"}} 
              />
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
        
        <Box width="100%" sx={{flex: "1 1 0", display: 'flex', justifyContent: 'center'}}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {faqList.map((faq, index) => (
              <>
                <ListItemButton 
                  onClick={handleClick(index)} 
                  sx={{background: index === open ? "linear-gradient(214deg, #00BCD4 -163.83%, #673AB7 45.54%)" : 'background.paper'}}
                >
                  <ListItemText primary={faq.question} />
                  {open ? <MdExpandLess /> : <MdExpandMore />}
                </ListItemButton>
                <Collapse in={index == open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton>
                      <ListItemText secondary={faq.answer} />
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            ))} 
          </List>
        </Box>
      </Box>
    </>
  )
}

export default Faq
