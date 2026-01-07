import { StaticImageData } from "next/image";

export interface Property  {
  id : string,
  name : string,
  img: StaticImageData,
  description : string,
  ingredients : string,
  price : string,
  categories : string,
}