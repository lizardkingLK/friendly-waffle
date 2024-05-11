import { useEffect, useState } from "react"
import { searchImages } from "../../services/unsplash"
import { SearchResponse } from "../../types";

const Gallery = () => {
    const [images,setImages] = useState<SearchResponse>([]);

    const loadImages = async (pageNo:number = 1) => await searchImages('trees', pageNo);

    useEffect(() => {
        loadImages().then((images) => {
            if (!images?.results || !(images.results satisfies SearchResponse)) {
                return;
            }
            setImages(images.results);
        })
    }, [])
    
  return (
    <div>
        <h1 className="text-black font-bold text-lg">Gallery</h1>
        <div>
            {images.map((image) => <div key={image.id}><img src={image.urls.raw} alt={image.alt_description} /></div>)}
        </div>
    </div>
  )
}

export default Gallery