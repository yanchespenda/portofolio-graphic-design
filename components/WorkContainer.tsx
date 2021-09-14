import { Fragment } from 'react'
import Work from './Work'

interface IPropsList {
  src: string
  title: string
  slug: string
  description: string
}

interface IProps {
  list: IPropsList[]
}

export default function WorkContainer({ list }: IProps) {

  return (
    <Fragment>
      <div className="text-center mb-8">
        <span className="text-5xl">Selected <span className="text-[#9E8B7A]">work.</span></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center justify-center content-center items-center">
        {
          list.map((item, index) => <Work key={index} src={item.src} title={item.title} slug={item.slug} description={item.description} /> )
        }
      </div>
    </Fragment>
  )
}