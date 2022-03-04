import React from 'react'
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
function SwitchBtn(props) {
    let [checked ,  setChecked] =  React.useState(false)
    const handleChange = (event) => {
        setChecked(event.target.checked); 
        
      };
    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 48,
        height: 31,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#00a898',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 27,
          height: 27,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 1,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          borderColor :  "#444", 
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 800,
          }),
        },
      }));
  return (
    <Stack direction="row" spacing={1} alignItems="center" >
    <IOSSwitch checked={checked}   onChange={handleChange}  inputProps={{ 'aria-label': 'ant design' }}  />
  </Stack>
  )
}

export default SwitchBtn