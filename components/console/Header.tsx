import { useRouter } from 'next/router'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { Segments } from '../../helpers/URL'

interface BreadcumbsData {
  title: string
  url: string
}

export default function ConsoleHeader() {
  const router = useRouter()

  const [scrolled, setScrolled] = useState(false)
  const [breadcumbs, setBreadcumbs] = useState<BreadcumbsData[]>([])

  useEffect(() => {
    window.onscroll = function() {
      if (window.scrollY > 96) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const initBreadcumbs = () => {
      const segments = Segments(router.asPath)
      console.log('segments', segments)

      let currentBreadcumb: BreadcumbsData[] = []
      if (segments[1]) {
        switch (segments[1]) {
          case 'works':
            currentBreadcumb.push({
              title: 'Works',
              url: '/console/works'
            })
            break
          case 'settings':
            currentBreadcumb.push({
              title: 'Settings',
              url: '/console/settings'
            })
            break
          default:
            break
        }
      }
      if (segments[2]) {
        switch (segments[2]) {
          case 'add':
            currentBreadcumb.push({
              title: 'Add',
              url: `/console/${segments[1]}/add`
            })
            break
          case 'edit':
            currentBreadcumb.push({
              title: 'Edit',
              url: `/console/${segments[1]}/edit`
            })
            break
          default:
            break
        }
      }
      if (currentBreadcumb.length > 0) {
        setBreadcumbs(currentBreadcumb)
      }
    }
    initBreadcumbs()
  }, [])


  return (

    <nav className="flex justify-center w-full h-16">
      <div className={[scrolled ? 'shadow-xl' : '' ,"z-[4] w-full fixed bg-white border-t-[1px] border-solid border-gray-300 transition-shadow duration-250 ease-in-out"].join(' ')}>
        <div className="flex flex-row justify-center px-4 rounded-b xl:container mx-auto">
          <div className="h-16 flex flex-row items-center">
            <ol className="flex leading-none uppercase text-[#9E8B7A] divide-x divide-[#9E8B7A]">
              {
                breadcumbs.length > 0 ? (
                  <Fragment>
                    <li className="pr-4">
                      <Link href="/console">
                        <a>Console</a>
                      </Link>
                    </li>

                    {
                      breadcumbs.map((breadcumb, index) => {
                        if (index === breadcumbs.length - 1) {
                          return (
                            <li className="px-4 text-black">{ breadcumb.title }</li>
                          )
                        }
                        return (
                          <li className="px-4" key={index}>
                            <Link href={ breadcumb.url }>
                              <a><span>{ breadcumb.title }</span></a>
                            </Link>
                          </li>
                        )
                      })
                    }
                  </Fragment>
                ) : (
                  <li className="pr-4">
                    <span>Console</span>
                  </li>
                )
              }
            </ol>
          </div>
          <div className="flex-1"></div>
          <div className="flex flex-row space-x-4 h-16 items-center">
            <Link href="/console">
              <a className={["uppercase flex flex-col align-middle text-center hover:border-opacity-100 border-[#9E8B7A] border-b-4 mt-1", router.pathname.search(/console$/) !== -1 ? 'border-opacity-100' : 'border-opacity-0'].join(' ')}>
                <span>Dashboard</span>
              </a>
            </Link>
            <Link href="/console/works">
              <a className={["uppercase flex flex-col align-middle text-center hover:border-opacity-100 border-[#9E8B7A] border-b-4 mt-1", router.pathname.search(/\/console\\works/) !== -1  ? 'border-opacity-100' : 'border-opacity-0'].join(' ')}>
                <span>Work List</span>
              </a>
            </Link>
            <Link href="/console/settings">
              <a className={["uppercase flex flex-col align-middle text-center hover:border-opacity-100 border-[#9E8B7A] border-b-4 mt-1", router.pathname.search(/\/console\\settings/) !== -1  ? 'border-opacity-100' : 'border-opacity-0'].join(' ')}>
                <span>Settings</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}