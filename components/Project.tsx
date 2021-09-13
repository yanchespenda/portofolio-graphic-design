import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'

interface IProps {
  src: string
  title: string
  slug: string
}

export default function Project({src, slug, title}: IProps) {

  return (
    <div className="w-full lg:w-1/4">
      <Link href={"/project/" + slug}>
        <a>
          <div className="flex flex-col items-center justify-center p-1">
            <LazyLoadImage
              className=""
              alt={title}
              effect="opacity"
              src={src} />

            <div className="mt-2 mb-4">
              <span>{ title }</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}