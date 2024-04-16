import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import Postdrow from './drowpost';
import { Add, Get } from '../../redux/Postslice';

const Post = () => {
       const dispatch = useDispatch()
       dispatch(Get());
       const Postsarr = useSelector((state) => state.PostSlice.Posts);
       const [open, setOpen] = React.useState(false);
       const [contentpost, setContentpost] = React.useState("");
       const [id, setId] = React.useState(0);
       const [like, setLike] = React.useState(false);
       
       const Post = {
              "id":id,
              "contentpost":contentpost,
              "like":like
       }
       const handleClickOpen = () => {
              setOpen(true);
       };

       const handleCloseSave = () => {
              dispatch(Add({ post: Post }))
              handleClose()
       };

       const handleClose = () => {
              setOpen(false);
       };

       return (
              <>
                     <h1>פוסטים</h1>
                     {
                            Postsarr?.map((t) => {
                                   return (
                                          <Postdrow element={t} />
                                   )
                            })
                     }
                     <React.Fragment>
                            <Button variant="outlined" onClick={handleClickOpen}>
                                   להוספת פוסט    <AddIcon />
                            </Button>
                            <Dialog open={open} onClose={handleClose}>
                                   <DialogTitle>הוספת פוסט</DialogTitle>
                                   <DialogContent>
                                          <DialogContentText>
                                          </DialogContentText>
                                          <TextField
                                                 autoFocus
                                                 margin="dense"
                                                 id="content"
                                                 label=" תוכן פוסט"
                                                 type="taxt"
                                                 fullWidth
                                                 variant="standard"
                                                 value={contentpost}
                                                 onChange={(e) => setContentpost(e.target.value)}
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
export default Post