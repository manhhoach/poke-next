import Image from "next/image";

interface BallImageProps {
   className: string
   width?: number
   height?: number
}

export default function BallImage({ className, width = 250, height = 250 }: BallImageProps) {
   return <Image className={`absolute -z-50 ${className}`} src={'/img/ball.png'} width={width} height={height} alt="" />
}