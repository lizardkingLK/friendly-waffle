import { useEffect, useState } from "react"
import {Image} from "../../types/index"
import useImage from '../viewer/store'

const imageCDN = 'https://friendlywaffle.netlify.app/.netlify/images?url=/';
const fit  = '&fit=cover';
const size = '&w=50&h=50';
const position = '&center';
const format = '&fm=png';
const quality = '&q=50';

const Gallery = () => {
    const {setImage} = useImage();
    
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        setImages(Array(10).fill(1).map((_, i) => ({
            id:i+1,
            src: `${imageCDN}assets/images/gallery${i+1}.jpg${fit}${size}${position}${format}${quality}`,
            caption: `image${i+1}`,
        })));
    }, [])

  return (
    <div className="flex justify-between items-center">
        {images.map(({id, src, caption}) => (
            <button onClick={() => setImage({id, src, caption})} key={id}>
                <img src={src} alt={caption} />
            </button> 
        ))}
    </div>
  )
}

export default Gallery