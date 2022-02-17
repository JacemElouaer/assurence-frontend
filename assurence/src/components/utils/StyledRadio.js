import React from 'react'
import { makeStyles } from '@bit/mui-org.material-ui.styles';
import clsx from 'clsx'
import Radio from '@mui/material/Radio';



const useStyles = makeStyles({
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        icon: {
          borderRadius: '50%',
          width: 30,
          height: 30,
          boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
          backgroundColor: '#f5f8fa',
          
        },
        checkedIcon: {
          backgroundColor: '#00a898',
          backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
          '&:before': {
            display: 'block',
  
          },
          'input:hover ~ &': {
            backgroundColor: '#009688',
          },
        },
      });
function StyledRadio(props) {
    
    const classes = useStyles();

   
  return (
    <Radio  className={classes.root}
                    disableRipple
                    color="default"
                    checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}
                    {...props}
                     />
  )
}

export default StyledRadio