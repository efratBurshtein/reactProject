import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { Delete } from '../../redux/Photoslice';

export default function DrowPhoto(props) {

    const dispatch = useDispatch()
    const delet = () => {
        dispatch(Delete({ id: props.item.id }))
    }
    return (
        <ImageListItem key={props.item.img}>
            <img
                src={props.item.img}
                alt="Preview"
                loading="lazy"
            />
            <ImageListItemBar
                title={props.item.title}
                subtitle={props.item.author}
                actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${props.item.title}`}
                    >
                        <IconButton onClick={delet}>
                            <DeleteForeverIcon style={{ color: 'white' }} />
                        </IconButton>
                    </IconButton>
                }
            />
        </ImageListItem>

    );
}

