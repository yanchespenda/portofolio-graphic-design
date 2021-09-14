import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'

interface IProps {
  src: string
  title: string
  slug: string
  description: string
}

export default function Project({src, slug, title, description}: IProps) {

  return (
    <div className="flex flex-col items-center justify-center relative">
      <Link href={"/work/" + slug}>
        <a className="relative">
          <LazyLoadImage
            className="w-full z-[1]"
            alt={title}
            effect="opacity"
            src={src} />

          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-500 ease-in-out z-[2]">
            <div className="flex flex-col text-center items-center justify-center h-full">
              <span className="text-2xl text-white">{ title }</span>
              <span className="text-xl text-white">{ description }</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}