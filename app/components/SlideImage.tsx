import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

interface SlideImageProps {
   images: string[]
}


export default function SlideImage({ images }: SlideImageProps) {
   return <div className="absolute h-[150] w-[150] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Slide autoplay duration={1000} >
         {images.map((img, i) => <Image unoptimized key={i} src={img} alt="" width={150} height={150} />)}
      </Slide>
   </div>
}