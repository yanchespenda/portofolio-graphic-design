import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'

interface IPropsHover {
  titleColor: string
  descriptionColor: string
}

interface IProps {
  src: string
  title: string
  slug: string
  description: string

  hover?: IPropsHover
}

export default function Project({src, slug, title, description, hover}: IProps) {

  const hoverTitleColor = hover?.titleColor ? `text-[${hover?.titleColor}]` : 'text-white'
  const hoverDescriptionColor = hover?.descriptionColor ? `text-[${hover?.descriptionColor}]` : 'text-white'

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
              <span className={"text-2xl " + hoverTitleColor}>{ title }</span>
              <span className={"text-xl " + hoverDescriptionColor}>{ description }</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}