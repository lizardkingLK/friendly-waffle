import { useEffect, useState } from "react"

const imageCDN = 'https://friendlywaffle.netlify.app/.netlify/images?url=/';

const Gallery = () => {
    const [images, setImages] = useState<{id: number, src:string, caption:string}[]>([]);

    useEffect(() => {
        setImages(
            Array(10).fill(1).map((_, i) => ({
                id:i+1,
                src: `${imageCDN}assets/images/gallery (${i+1}).jpg`,
                caption: `image${i+1}`,
            }))
        )        
    }, [])
    
  return (
    <div>
        <h1 className="text-black font-bold text-lg">Gallery</h1>
        <div>
            {images.map((image) => <div key={image.id}><img src={`${image.src}`} alt={image.caption} /></div>)}
        </div>
    </div>
  )
}

export default Gallery