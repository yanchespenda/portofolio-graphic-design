import { getAuth, onAuthStateChanged } from "firebase/auth"
import { get, getDatabase, ref } from "firebase/database"
import { useRouter } from "next/router"
import Link from "next/link"
import { Fragment, useEffect, useState } from "react"

import ConsoleHeader from '../../components/console/Header'
import { BaseDatabaseWorksList } from "../../firebase/database.interface"
import { firebaseApp, hostname } from "../../firebase/init"

export default function ConsoleWorks() {

  const router = useRouter()
  const [isValidateAuth, setIsValidateAuth] = useState(true)

  const [isWorksLoading, setIsWorksLoading] = useState(false)
  const [listWorks, setListWorks] = useState<BaseDatabaseWorksList[]>([])

  useEffect(() => {
    setIsValidateAuth(true)

    const checkAuth = async () => {
      const fbApp = firebaseApp()
      const fbAuth = getAuth(fbApp)

      onAuthStateChanged(fbAuth, async authData => {
        if (!authData) {
          router.push('/console/auth')
        } else {
          setIsValidateAuth(false)
        }
      })
    }
    checkAuth()
  }, [])

  useEffect(() => {
    setIsWorksLoading(true)
    const getWorks = async () => {
      const fbApp = firebaseApp()
      const database = getDatabase(fbApp)
      const fbAuth = getAuth(fbApp)
      const userId = fbAuth.currentUser?.uid

      if (hostname.length === 0) {
        
      }

      const getList = ref(database, 'works/' + hostname)
      get(getList).then((snapshot: any) => {
        console.log('getList:snapshot', snapshot)
        // console.log('getList:getKey', snapshot.getKey())
        const data: BaseDatabaseWorksList[] = snapshot.val()
        console.log('getList:data', data)
        // data.forEach(item => console.log('item', item?.getKey() ))
        console.log('data', data)
        if (data) {
          setListWorks(data)
        } else {
        }
      }).catch((err) => {
        console.log('err', err)
      })
    }
    getWorks()
  }, [])

  if (isValidateAuth) {
    return (
      <Fragment>
        <h1 className="text-center">Validating auth...</h1>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <ConsoleHeader />

      <div className="xl:container mx-auto mt-8">
        <div className="flex flex-col">
          <div className="mb-16">
            <div className="flex w-full flex-row items-center">
              <div className="flex-1"></div>
              <div className="flex flex-row space-x-4">
                <button 
                  type="button" 
                  className="px-4 py-3 bg-white rounded-md text-black outline-none border-[1px] border-solid border-black"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <Link href="/console/works/add">
                  <a>
                    <button 
                        type="button" 
                        className="px-4 py-3 bg-white rounded-md text-black outline-none border-[1px] border-solid border-black"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {
            listWorks.map((work, index) => {

              return (
                <Fragment key={index}>
                  <div className="flex w-full flex-row border-solid border-b border-black mb-8 last:border-b-0 last:mb-0 pb-8 last:pb-0">
                    <div className="w-1/4">
                      <img src={work.cover} />
                    </div>
                    <div className="w-3/4">
                      <div className="flex flex-col w-full">
                        <h2 className="ml-8 text-xl">{work.title}</h2>
                        <h2 className="ml-8 text-sm">{work.createdAt}</h2>

                        <div className="ml-8 mt-8 flex flex-row space-x-4">
                          <button 
                            type="button" 
                            className="px-4 py-3 bg-white rounded-md text-black outline-none border-[1px] border-solid border-black"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>

                          <button 
                            type="button" 
                            className="px-4 py-3 bg-white rounded-md text-black outline-none border-[1px] border-solid border-black"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>

                          <button 
                            type="button" 
                            className="px-4 py-3 bg-white rounded-md text-black outline-none border-[1px] border-solid border-black"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )
            })
          }
        </div>
      </div>
    </Fragment>
  )
}