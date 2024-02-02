import * as React from 'react';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Delete, Edit } from '../redux/Userslice';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaceIcon from '@mui/icons-material/Face';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Grid } from '@mui/material';

const Drowuser = (props) => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState(props.element.id);
    const [name, setName] = React.useState(props.element.name);
    const [mail, setMail] = React.useState(props.element.mail);
    const [phon, setPhon] = React.useState(props.element.phon);
    const [address, setAddress] = React.useState(props.element.address);

    const dispatch = useDispatch()

    const User = {
        "id":id,
        "name":name,
        "mail":mail,
        "phon":phon,
        "address":address
    }

    const delet = () => {
        dispatch(Delete({ id: props.element.id }))
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseSave = () => {
        dispatch(Edit({ user: User }))
        handleClose()
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '0.4px solid gray', padding: '10px' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FaceIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={props.element.name} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ApartmentIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={props.element.address} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalPhoneIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={props.element.phon} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MarkEmailReadIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={props.element.mail} />
                    </ListItem>

                    <Tooltip title="מחיקה">
                        <IconButton onClick={delet}>
                            <DeleteForeverIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="שינוי">
                        <IconButton onClick={handleClickOpen}>
                            <CreateIcon />
                        </IconButton>
                    </Tooltip>

                </List>

                <React.Fragment>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>עדכון משתמש</DialogTitle>
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
            </Grid>
        </>
    );
}
export default Drowuser