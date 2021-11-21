import React, { useState, useCallback } from 'react'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

  
export default function ProductSlider (props) { 
    
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const IMAGE_COEF = 10;
    const [limit, setLimit] = useState(IMAGE_COEF);

    const showMore = () => {
      let newLimit = Math.min(props.imgs.length, limit+IMAGE_COEF);
      setLimit(newLimit);
    };

    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  
    return (
      <div>
        <Gallery photos={props.imgs.slice(0, Math.min(props.imgs.length, limit))} onClick={openLightbox} direction={"column"} />
        {
          limit >= props.imgs.length ? 
            null:
            <button className="btn-sm" onClick={showMore}>Daha fazla göster</button>
        }
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={props.imgs.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }