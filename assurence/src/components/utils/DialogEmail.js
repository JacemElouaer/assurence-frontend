import React  ,  {useState , useEffect} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ButtonError  from  './ButtonError'
import { teal} from '@mui/material/colors'
function DialogEmail(props) {
    const [open, setOpen] = useState(false);
    const [subject ,  setSubject] =  useState("") 
    const [email, setEmail] = useState("")



const  handlemailChange =(e)=>{
    e.preventDefault();
    setEmail(e.target.value);
}
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
      setEmail("")
  })


  return (
    <div>
        <div onClick={handleClickOpen} className="flex justify-center"> 
      <ButtonError  >
        Open form dialog
      </ButtonError>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Désolée ! Nous n'assurons pas encore ce type d'immeuble.</DialogTitle>
        <DialogContent>
          <DialogContentText>
Laissez-nous votre email et nous vous écrirons dès que ce sera disponible. Une question ? On est à votre écoute sur le chat.
          </DialogContentText> 
          <div className='mt-8'> 
               <input class="appearance-none block w-full  text-gray-700 border focus:border-teal-500 rounded 
               py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Adresse email"/>
        </div>
        </DialogContent>
        <DialogActions>
            {email ?
          <Button onClick={handleClose} class="flex w-2/6  bg-teal-500 ">Me tenir informé</Button>
         :   <Button onClick={handleClose} class="flex w-2/6  bg-teal-500  cursor-not-allowed">Me tenir informé</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DialogEmail
