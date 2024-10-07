import { IS_CLOUDINARY_ENABLED } from "../constants/index.js";
import { saveFileToLocalMachine } from "./saveFileToLocalMachine.js";
import { saveToCloudinary } from "./saveToCloundinary.js";

export const saveFile = async(file) =>{
    if(!file) return;
    
    let url;
    console.log(IS_CLOUDINARY_ENABLED);
    if(IS_CLOUDINARY_ENABLED === "true"){
        url = await saveToCloudinary(file);
    }else{
        url = await saveFileToLocalMachine(file);
    }
    return url;
};