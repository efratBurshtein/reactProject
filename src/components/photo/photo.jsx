import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import { useSelector } from 'react-redux';
import DrowPhoto from './drowphoto';
import Grid from '@mui/material/Grid';
import MyDropzone from './dragimage';
import { useDispatch } from 'react-redux';
import { Get } from '../../redux/Photoslice';

export default function Photo() {
  const dispatch = useDispatch()
  dispatch(Get());
  const arrphoto = useSelector((state) => state.PhotoSlice.Photoes);
  return (
    
    <Grid container alignItems="center" justifyContent="center" >   
      <MyDropzone/>
      <ImageList sx={{ width: 500, height: 450 }}>
        {
          arrphoto?.map((t) => {
            return (
              <DrowPhoto item={t} />
            )
          })
        }
      </ImageList>
    </Grid>
  );
}

