import { Fragment, useEffect } from "react"
import { useRouter } from 'next/router'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// import { Responsive, WidthProvider, Layouts, Layout } from 'react-grid-layout'

// const ResponsiveGridLayout = WidthProvider(Responsive)

export default function Work() {
  const router = useRouter()

  const { id } = router.query

  useEffect(() => {
  })

  return (
    <Fragment>
      <div className="xl:container mx-auto">
        <div className="flex flex-row w-full mt-16 mb-8">
          <div className="w-full lg:w-1/4">
            <div className="flex flex-col mr-4">
              <span className="text-right text-2xl text-[#9E8B7A]">Judul Karya</span>
              <span className="text-right">29 Juli 2021</span>
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <div className="whitespace-pre-line break-words">
            <p>
What is the point of having all these smart home devices when they don’t talk to one another? That’s where Belkin Sense comes in! A device that not only connects all your smart home controls into one app but also suggests ways for them to work with another to suits your needs….. Think of it as Alfred to your inner Bruce Wayne.
</p><br /><p>
What is the point of having all these smart home devices when they don’t talk to one another? That’s where Belkin Sense comes in! A device that not only connects all your smart home controls into one app but also suggests ways for them to work with another to suits your needs….. Think of it as Alfred to your inner Bruce Wayne.
</p><br /><p>
What is the point of having all these smart home devices when they don’t talk to one another? That’s where Belkin Sense comes in! A device that not only connects all your smart home controls into one app but also suggests ways for them to work with another to suits your needs….. Think of it as Alfred to your inner Bruce Wayne.

            </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="grid grid-cols-2 grid-rows-2 w-full">
            <div className="row-span-2 col-span-1 bg-blue-500">
              <LazyLoadImage
                className="w-full h-full z-[1]"
                wrapperClassName="w-full h-full"
                alt={'Work 1-1'}
                effect="opacity"
                src={'/images/work/work-1-1.jpg'} />
            </div>
            <div className="row-span-1 col-span-1 bg-red-500">
              <LazyLoadImage
                className="w-full h-full z-[1]"
                wrapperClassName="w-full h-full"
                alt={'Work 1-2'}
                effect="opacity"
                src={'/images/work/work-1-2.jpg'} />
            </div>
            <div className="row-span-1 col-span-1 bg-green-500">
              <LazyLoadImage
                className="w-full h-full z-[1]"
                wrapperClassName="w-full h-full"
                alt={'Work 1-3'}
                effect="opacity"
                src={'/images/work/work-1-3.jpg'} />
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 w-full">
            <div className="row-span-1 col-span-1 bg-green-500">
              <LazyLoadImage
                className="w-full h-full z-[1]"
                wrapperClassName="w-full h-full"
                alt={'Work 1-4'}
                effect="opacity"
                src={'/images/work/work-1-4.jpg'} />
            </div>
            <div className="row-span-1 col-span-1 bg-red-500">
              <LazyLoadImage
                className="w-full h-full z-[1]"
                wrapperClassName="w-full h-full"
                alt={'Work 1-5'}
                effect="opacity"
                src={'/images/work/work-1-5.jpg'} />
            </div>
            <div className="row-span-1 col-span-1 bg-pink-500">
              <LazyLoadImage
                className="w-full h-full z-[1]"
                wrapperClassName="w-full h-full"
                alt={'Work 1-6'}
                effect="opacity"
                src={'/images/work/work-1-6.jpg'} />
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}