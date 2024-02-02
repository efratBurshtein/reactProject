import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Delete, Edit } from '../redux/Postslice';

const Postdrow=(props) => {
   const [open, setOpen] = React.useState(false);
   const [contentpost, setContentpost] = React.useState(props.element.contentpost);
   const [like, setLike] = React.useState(props.element.like);
   const [id, setId] = React.useState(props.element.id);

   const word = contentpost.slice(0, 5);

   const Post = {
      "id":id,
      "contentpost":contentpost,
      "like":like
   }
   
   const dispatch = useDispatch()
   const delet = () => {
      dispatch(Delete({ id: props.element.id }))
   }

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleCloseSave = () => {
      dispatch(Edit({ post: Post }))
      handleClose()
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleCheckboxChange = async(event) => {
      event.stopPropagation();
      debugger
      console.log(like);
      if(like===false){
         setLike(true)
         console.log(like);
      }
      else{
         setLike(false)
         console.log(like);

      }
      dispatch(Edit({ post: Post }))
   };

 
   return (
      <>
         <Grid container alignItems="center" justifyContent="center" >
            <Grid item xs={6}>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <div onClick={(event) => event.stopPropagation()}>
                        <Checkbox
                           icon={<FavoriteBorder />}
                           checkedIcon={<Favorite style={{ color: 'red' }} />}
                           checked={like}
                           onChange={handleCheckboxChange}
                        />
                     </div>
                     <div onClick={(event) => event.stopPropagation()}>
                        <Tooltip title="מחיקה">
                           <IconButton onClick={delet}>
                              <DeleteForeverIcon />
                           </IconButton>
                        </Tooltip>
                     </div>
                     <div onClick={(event) => event.stopPropagation()}>
                        <Tooltip title="שינוי" >
                           <IconButton onClick={handleClickOpen} >
                              <CreateIcon />
                           </IconButton>
                        </Tooltip>
                     </div>

                     <AccordionDetails >
                        <Typography > ...{word}  </Typography>
                     </AccordionDetails>
                  </AccordionSummary>
                  <AccordionDetails >
                     <Typography>{props.element.contentpost}</Typography>
                  </AccordionDetails>
               </Accordion>
            </Grid>
         </Grid>
         <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
               <DialogTitle>עדכון פוסט</DialogTitle>
               <DialogContent>
                  <DialogContentText>
                  </DialogContentText>
                  <TextField
                     autoFocus
                     margin="dense"
                     id="content"
                     label="תוכן פוסט"
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
export default Postdrow