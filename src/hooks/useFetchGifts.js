import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts = (category) => {
    const [images, setImages] = useState([]);
    const [isloading, setIsloading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsloading(false);
        //Gracias a React 18 esto manda solo una re renderizacion
    };
    useEffect(() => {
        getImages();
    }, []);

    return {
        // images: [],
        images,
        isloading
    }
}
