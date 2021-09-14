import { Fragment } from 'react'
import Project from '../components/Project'

interface IPropsList {
  src: string
  title: string
  slug: string
}

interface IProps {
  list: IPropsList[]
}

export default function ProjectContainer({ list }: IProps) {

  return (
    <Fragment>
      <div className="text-center mb-8">
        <span className="text-5xl">Selected <span className="text-[#9E8B7A]">work.</span></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center justify-center content-center items-center">
        {
          list.map((item, index) => <Project key={index} src={item.src} title={item.title} slug={item.slug} /> )
        }
      </div>
    </Fragment>
  )
}