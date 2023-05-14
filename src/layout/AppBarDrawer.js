import { Drawer, Stack, Typography, Button } from "@mui/material"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const AppBarDrawer = (props) => {
  const [sortValue, setSortValue] = useState({ country: 'USA', img: 'usa.png' })
  const [showOptions, setShowOptions] = useState(false)

  const sortOptions = [
    { country: 'USA', img: 'usa.png' },
    { country: 'EUR', img: 'eur.png' },
    { country: 'GBP', img: 'uk.png' },
    { country: 'AUD', img: 'aus.png' },
    { country: 'CAD', img: 'can.png' }
  ]

  const onSetSort = (e) => {

    setSortValue(e);
    setShowOptions(false)
  }

  const tabStyle = { fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins' }

  const tabContainerStyle = { borderBottom: '1px solid #434e67', paddingY: '10px' }

  const drawerContainerStyle = {
    backgroundColor: '#142241',
    '& .MuiDrawer-paper': {
      color: 'white',
      width: '91%',
      paddingLeft: '16px', paddingRight: '16px',
      background: '#142241',
    },
  }

  const fullContainerStyle = {
    backgroundColor: '#142241',
    width: '100%',
  }

  const CloseIconContainerStyle = {
    paddingY: '32px',
    paddingLeft: '7px',
    borderBottom: '1px solid #434e67'
  }

  const secondTabStyle = {
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: '#E9B109'
  }

  const imgStyle = {
    width: '16px',
    height: '16px',
    marginTop: '4px'
  }

  const countryStyle = {
    marginLeft: '5px',
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: 'Poppins'
  }

  const signInButtonStyle = {
    color: 'white',
    borderColor: 'white',
    width: '82px',
    paddingLeft: '12px',
    paddingRight: '12px'
  }

  const signInTextStyle = {
    fontSize: '14px',
    fontWeight: '400',
    fontFamily: 'Poppins'
  }

  const signUpButtonStyle = {
    color: 'black',
    backgroundColor: '#E9B109 !important',
    marginLeft: '20px',
    width: '74px'
  }

  const loginTextStyle = {
    fontSize: '14px',
    fontWeight: '400',
    fontFamily: 'Poppins'
  }
  return (
    <Drawer
      open={props.open}
      hideBackdrop={true}
      sx={drawerContainerStyle}

      onClose={() => props.setOpen(false)}
    >
      <Stack sx={fullContainerStyle}>
        <Stack sx={CloseIconContainerStyle}>
          <CloseIcon onClick={() => props.setOpen(false)} />
        </Stack>
        <Stack
          gap="4px"
        >
          <Stack sx={tabContainerStyle}>
            <Typography sx={tabStyle}>OSRS Gold</Typography>
          </Stack>
          <Stack sx={tabContainerStyle}>
            <Typography sx={secondTabStyle}>RS3 Gold</Typography>
          </Stack>
          <Stack sx={tabContainerStyle}>
            <Typography sx={tabStyle}> Sell RS Gold</Typography>
          </Stack>
          <Stack sx={tabContainerStyle}>
            <Typography sx={tabStyle}>OSRS Items</Typography>
          </Stack>
          <Stack sx={tabContainerStyle}>
            <Typography sx={tabStyle}>OSRS Accounts</Typography>
          </Stack>
          <Stack sx={tabContainerStyle}>
            <Typography sx={tabStyle}>Reward Chests</Typography>
          </Stack>
          <Stack sx={tabContainerStyle}>
            <Stack sx={{ justifyContent: 'space-between' }} flexDirection={'row'} onClick={() => setShowOptions(!showOptions)}>
              <Stack flexDirection={'row'} >
                <img src={sortValue.img} style={imgStyle} alt={sortValue.country} />
                <Typography sx={countryStyle}>{sortValue.country}</Typography>
              </Stack>
              {showOptions ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Stack>
            {showOptions && <Stack>
              {sortOptions.map(item => <Stack flexDirection={'row'} sx={{ paddingY: '10px' }} onClick={() => onSetSort(item)}>
                <img src={item.img} style={imgStyle} alt={item.country} />
                <Typography sx={countryStyle}>{item.country}</Typography>
              </Stack>)}

            </Stack>}
          </Stack>
          <Stack flexDirection={'row'} sx={{ marginTop: '16px' }}>
            <Button variant="outlined" sx={signInButtonStyle}><Typography sx={signInTextStyle}>Sign Up</Typography></Button>
            <Button sx={signUpButtonStyle}><Typography sx={loginTextStyle}>Log In</Typography></Button>
          </Stack>
        </Stack>
      </Stack>
    </Drawer>
  )
}