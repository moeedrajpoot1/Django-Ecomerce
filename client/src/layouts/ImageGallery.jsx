import React from "react";
import ImageGalleryComponent from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import apis from "../config";
const ImageGallery = ({ images }) => {
    console.log("imageesssss111",images)
    if (!images || images.length === 0 ) {
        return <p className="text-gray-500">No images available</p>;
    }

    const galleryImages = images.map((img) => ({
        original: `${apis[0]}${img.image}`,  // Correctly formatting the image URLs
        thumbnail: `${apis[0]}${img.image}`,
    }));

    return (
        <ImageGalleryComponent
            items={galleryImages}
            showFullscreenButton={true}
            showPlayButton={false}
        />
    );
};

export default ImageGallery;


