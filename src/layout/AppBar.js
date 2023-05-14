import { useState } from 'react'
import { AppBar as MuiAppBar, Stack, Typography, Select, MenuItem, TextField } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from "@mui/icons-material/Menu";
import { SortByContainer, LogInButtonContainer } from './AppBar.style'
import { AppBarDrawer } from './AppBarDrawer';

export const AppBar = () => {

  const [tab, setTab] = useState('')
  const [isOpenningDrawer, setOpenDrawer] = useState(false)
  const [sortValue, setSortValue] = useState('USA')
  const [amount, setAmount] = useState(0);
  const handleSort = e => {
    setSortValue(e.target.value)
  }

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  const TabItem = (title) => {
    const tabStyle = {
      cursor: 'pointer',
      fontWeight: '400',
      fontFamily: 'Poppins',
      lineHeight: '21px',
      textAlign: 'center',
      color: tab === title ? '#E9B109' : '#FAFAFA'
    }
    return (
      <Stack>
        <Typography sx={tabStyle} onClick={() => setTab(title)}> {title}</Typography>
      </Stack>
    )
  }

  const sortOptions = [
    { country: 'USA', img: 'usa.png', balance: 1 },
    { country: 'EUR', img: 'eur.png', balance: 1.1 },
    { country: 'GBP', img: 'uk.png', balance: 1.4 },
    { country: 'AUD', img: 'aus.png', balance: 1 },
    { country: 'CAD', img: 'can.png', balance: 1 }
  ]

  const iconStyle = {
    color: '#FAFAFA',
    position: 'absolute',
    left: '56px',
    bottom: '6px'

  }

  const mainStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#142241',
    height: ' 80px',
    paddingX: '70px',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      paddingX: '21px'
    }

  }

  const secondTabStyle = {
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: '21px',
    textAlign: 'center',
    color: '#E9B109',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -4, // Adjust the distance between the text and the line
      left: 0,
      width: '24px', // Set the line width to 24px
      height: '1px',
      backgroundColor: '#E9B109', // Set the line color to yellow
    },
  }

  const menuItemStyle = {
    paddingLeft: '6px',
    paddingRight: '7px',
    '&.Mui-selected': {
      borderRight: `2px solid #E9B109`,
    },
  }

  const loginTextStyle = {
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: '21px',
    textAlign: 'center',
    color: '#142241',
    fontSize: "14px"
  }

  const tabGroupStyle = {
    marginLeft: '40px',
    '@media (max-width: 600px)': {
      display: 'none'
    }
  }

  const selectContainerStyle = {
    paddingTop: '5px',
    '@media (max-width: 600px)': {
      display: 'none'
    }
  }
  const signUpContainerStyle = {
    '@media (max-width: 600px)': {
      display: 'none'
    }
  }

  const signUpStyle = {
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: '21px',
    textAlign: 'center',
    color: '#FAFAFA',
    margin: "auto"
  }

  const mobileMenuIcon = {
    display: 'none',
    '@media (max-width: 600px)': {
      display: 'block',
      marginRight: '40px'
    }
  }

  const calculateContainerStyle = {
    paddingTop: '200px',
    justifyContent: 'center',
    flexDirection: 'row',
    '@media (max-width: 600px)': {
      display: 'none'
    }

  }

  const selectedIcon = isOpen ? <ExpandLessIcon sx={iconStyle} /> : <ExpandMoreIcon sx={iconStyle} />;


  return (
    <>
      <MuiAppBar position='fixed' sx={mainStyle}>
        <Stack sx={mobileMenuIcon} onClick={() => setOpenDrawer(true)}>
          <MenuIcon />
        </Stack>
        <Stack>
          <img src='logo.png' alt="logo" />
        </Stack>
        <Stack sx={tabGroupStyle} gap="32px" flexDirection={'row'}>
          {TabItem('OSRS Gold')}
          <Stack>
            <Typography sx={secondTabStyle}> RS3 Gold</Typography>
          </Stack>
          {TabItem('Sell RS Gold')}
          {TabItem('OSRS Items')}
          {TabItem('OSRS Accounts')}
          {TabItem('Reward Chests')}

        </Stack>
        <Stack gap="23.5px" flexDirection={'row'} >
          <Stack sx={selectContainerStyle}>
            <Select
              value={sortValue}
              onChange={handleSort}
              input={<SortByContainer />}
              IconComponent={() => selectedIcon}
              onOpen={handleOpen}
              onClose={handleClose}
              MenuProps={{
                PaperProps: {
                  style: {
                    backgroundColor: '#142241',
                    width: '89px'
                  },
                },
              }}>
              {sortOptions.map((item, index) => (
                <MenuItem value={item.country} key={index} sx={menuItemStyle}>
                  <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }} gap="5.28px">
                    <img src={item.img} style={{ width: '16px', height: '16px', margin: 'auto' }} alt={item.country} />
                    <Typography sx={{ color: "white", fontSize: '14px', fontFamily: 'Poppins', margin: 'auto' }}>{item.country}</Typography>
                  </Stack>

                </MenuItem>
              ))}
            </Select>
          </Stack>
          <Stack sx={signUpContainerStyle}> <Typography sx={signUpStyle}> Sign Up</Typography></Stack>
          <Stack>
            <LogInButtonContainer>
              <Typography sx={loginTextStyle}> Log In</Typography>
            </LogInButtonContainer>
          </Stack>

        </Stack>
      </MuiAppBar>
      <AppBarDrawer open={isOpenningDrawer} setOpen={setOpenDrawer} />
      <Stack sx={calculateContainerStyle} gap="20px">
        <TextField label="Amount" focused defaultValue={amount} onChange={(e) => setAmount(e.target.value)} />
        <TextField disabled label="Price" value={"USD: " + amount * 10 * sortOptions.find(item => item.country === sortValue).balance} />
      </Stack>

    </>
  )
}