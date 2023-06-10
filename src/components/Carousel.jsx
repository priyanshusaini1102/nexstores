import Image from 'next/image';
import React from 'react';
// import { faAngleRight, faAngleLeft } from "@fontawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "next-sanity";

const client = createClient({
    projectId: "efawyltx",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false
  });

const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}

const Carousel = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);

    const onNextImageHandler = () => {
        if(currentImage<images.length-1){
            setCurrentImage(currentImage+1);
        }
    }

    const onPreviousImageHandler = () => {
        if(currentImage>0){
            setCurrentImage(currentImage-1);
        }

    }

    return (
        <div className='flex flex-col'>
        <div className=' flex flex-row items-center justify-center w-96 mx-auto'>
            {/* <button onClick={onPreviousImageHandler} className=' relative left-4'><FontAwesomeIcon icon={faAngleLeft} /></button> */}
            <img className='rounded-lg object-cover' src={urlFor(images[currentImage]).url()} fill alt='Product Image' />
            {/* <button onClick={onNextImageHandler} className=' relative right-4'><FontAwesomeIcon icon={faAngleRight} /></button> */}
        </div>
        <div className='flex flex-row justify-evenly my-2 w-96 mx-auto'>

            {images.map((item,index) => ( <button onClick={()=> setCurrentImage(index)}><img className={'w-10 '+((index===currentImage) ? ' shadow-lg rounded-md opacity-100' : ' opacity-60')} src={urlFor(item).url()} alt="No Preview Aailable" /></button>) )}
            

        </div>
        </div>
    )
}

export default Carousel
