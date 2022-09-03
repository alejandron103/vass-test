import IGalleryItem from "../models/gallery-item";
import { CONSTANTS } from "../utils/contants";

export default async function getGalleryItems():Promise<IGalleryItem[]>{
    const request = await fetch(`${CONSTANTS.BASE_API}albums/1/photos`)
    if(request.ok){
        const galleryItems = await request.json()
        return galleryItems
    }
    console.error('images not found')
    return []
}