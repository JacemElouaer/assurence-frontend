import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReplayIcon from '@mui/icons-material/Replay';
import { teal } from '@mui/material/colors';
import  { useDispatch , useSelector} from  'react-redux'
import {ResetRedux} from '../../redux/actions/formsData'
import { useNavigate } from "react-router-dom";

const color = teal[500];
export default function DialogConfirm() {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  let navigate = useNavigate();

    
  const handleReload = ()=>{
    dispatch(ResetRedux())
    handleClose()
    navigate("/name");
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <button class="retour-btn bg-gray-100 border-0 hover:bg-gray-200 rounded-full text-base  md:mt-0 z-40" onClick={handleClickOpen}>
        <ReplayIcon style={{ color  :  "#444"}}/>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"VOUS VOULEZ RECOMMENCER !?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Si vous confirmer vos données seront supprimés .
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuuler</Button>
          <Button onClick={handleReload} autoFocus>
            Recommencer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
