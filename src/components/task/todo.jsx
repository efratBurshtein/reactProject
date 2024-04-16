import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { Add, Get } from '../../redux/Todoslice';
import TasksDrow from './drowtasks';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';



export default function Todo() {
       const dispatch = useDispatch()
       dispatch(Get()); 
       const Tasks = useSelector((state) => state.TaskSlice.Task); 
       const [open, setOpen] = React.useState(false);
       const [content, setContent] = React.useState("");
       const [titel, setTitel] = React.useState("");
       const [id, setId] = React.useState(0);    
       const [time, setTime] = React.useState("2024-02-01T15:40:53.440Z");
       const [cheked, setCheked] = React.useState(false);

       const Task = {
             "id":id,
             "titel": titel,
             "content" :content,
             "time":time,
             "cheked":cheked
       }

       const handleClickOpen = () => {
              setOpen(true);
       };

      

       const handleCloseSave = () => {     
              dispatch(Add({ task:Task}))
              handleClose()
       };

       const handleClose = () => {
              setOpen(false);
       };

       return (
              <>
                     <h1>המשימות שלי</h1>
                     {
                            Tasks?.map((t) => {
                                   return (
                                            <TasksDrow element={t}/>
                                   )
                            })
                     }
                     <React.Fragment>
                            <Button variant="outlined" onClick={handleClickOpen}>
                                   להוספת משימה    <AddIcon/>
                            </Button>
                            <Dialog open={open} onClose={handleClose}>
                                   <DialogTitle>הוספת משימה</DialogTitle>
                                   <DialogContent>
                                          <DialogContentText>
                                          </DialogContentText>
                                          <TextField
                                                 autoFocus
                                                 margin="dense"
                                                 id="titel"
                                                 label="שם משימה"
                                                 type="taxt"
                                                 fullWidth
                                                 variant="standard"
                                                 value={titel}
                                                 onChange={(e) => setTitel(e.target.value)}
                                          />
                                          <TextField
                                                 autoFocus
                                                 margin="dense"
                                                 id="content"
                                                 label="תוכן"
                                                 type="taxt"
                                                 fullWidth
                                                 variant="standard"
                                                 value={content}
                                                 onChange={(e) => setContent(e.target.value)}
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
