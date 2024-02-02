import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { Add } from '../redux/Photoslice';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
function MyDropzone() {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState('');

  const handleAddPhoto = (img) => {
    const photo = {
      "id": 0,
      "img": img
    };
    dispatch(Add({ photo: photo }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    const fileReadPromise = new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });

    fileReadPromise
      .then((result) => {
        setImagePreview(result);
        handleAddPhoto(result);
      })
      .catch((error) => {
        console.log('Error reading file:', error);
      });

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <div><Button variant="outlined" >
          להוספת תמונה    <AddIcon />
        </Button></div>)}

      {imagePreview ? (
        <img src={imagePreview} alt="Preview" style={{ display: 'none'}}
        />

      ) : (
        <p></p>
      )}
    </div>
  );
}

export default MyDropzone;