import React, { useState } from "react";

const UploadAndDisplayImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div>
            {selectedImage && (
                <div>
                    <img
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />                   
                </div>
            )}
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
};

export default UploadAndDisplayImage;