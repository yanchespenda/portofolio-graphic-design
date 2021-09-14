import { LazyLoadImage } from 'react-lazy-load-image-component'
import Link from 'next/link'

interface IProps {
  src: string
  title: string
  slug: string
}

export default function Project({src, slug, title}: IProps) {

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={"/project/" + slug}>
        <a>
          <LazyLoadImage
            className="w-full"
            alt={title}
            effect="opacity"
            src={src} />
        </a>
      </Link>
    </div>
  )
}