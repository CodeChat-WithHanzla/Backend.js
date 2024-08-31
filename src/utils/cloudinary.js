import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
try {
  if(!localFilePath) return null;
  // upload on Cloudinary 
  const response = await cloudinary.uploader.upload(localFilePath,{
    resource_type: "auto"
  })
  // File has been uploaded successfully !
  // console.log("File has been uploaded successfully !",response.url);
  fs.unlinkSync(localFilePath)
  return response;
} catch (error) {
  // remove the locally saved temporary file as upload operation goes failed !
  fs.unlinkSync(localFilePath) 
  return null;
}
}


export {uploadOnCloudinary}