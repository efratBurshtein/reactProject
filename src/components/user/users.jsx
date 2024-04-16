import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { Add,Get } from '../../redux/Userslice';
import AddIcon from '@mui/icons-material/Add';
import Drowuser from './drowuser';



export default function User() {
   const dispatch = useDispatch()
   dispatch(Get());
   const arrUsers = useSelector((state) => state.UserSlice.Users);
   const [open, setOpen] = React.useState(false);
   const [id, setId] = React.useState(0);
   const [name, setName] = React.useState("");
   const [mail, setMail] = React.useState("");
   const [phon, setPhon] = React.useState("");
   const [address, setAddress] = React.useState("");

   const User = {
      "id":id,
      "name":name,
      "mail":mail,
      "phon":phon,
      "address":address
   }

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleCloseSave = () => {
      dispatch(Add({ user: User }))
      handleClose()
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <h1> משתמשים</h1>
         {
            arrUsers?.map((t) => {
               return (
                  <>
                  <Drowuser element={t} />
                  </>
               )
            })
         }
         <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
               להוספת משתמש    <AddIcon />
            </Button>
            <Dialog open={open} onClose={handleClose}>
               <DialogTitle>הוספת משתמש</DialogTitle>
               <DialogContent>
                  <DialogContentText>
                  </DialogContentText>
                  <TextField
                     autoFocus
                     margin="dense"
                     id="titel"
                     label="שם משתמש"
                     type="taxt"
                     fullWidth
                     variant="standard"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="titel"
                     label="כתובת מגורים "
                     type="taxt"
                     fullWidth
                     variant="standard"
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="titel"
                     label="טלפון"
                     type="number"
                     fullWidth
                     variant="standard"
                     value={phon}
                     onChange={(e) => setPhon(e.target.value)}
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="content"
                     label="כתובת אימייל"
                     type="Mail"
                     fullWidth
                     placeholder='youremail@gmail.com'
                     variant="standard"
                     value={mail}
                     onChange={(e) => setMail(e.target.value)}
                  />

               </DialogContent>
               <DialogActions>
                  <Button onClick={handleClose}>ביטול</Button>
                  <Button onClick={handleCloseSave}>שמירה </Button>
               </DialogActions>
            </Dialog>
         </React.Fragment>
      </>
   );
}
