import { Fragment, useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth"
import { onAuthStateChanged } from "firebase/auth"
import { get, getDatabase, ref } from "firebase/database"
import { useRouter } from "next/router"
import { firebaseApp , hostname} from "../../firebase/init"
import { BaseDatabaseAdminList } from "../../firebase/database.interface"

export default function ConsoleAuth() {
  const router = useRouter()
  const [isLogged, setIsLogged] = useState(false)
  const [isAdminValidation, setIsAdminValidation] = useState(false)
  const [isErrorAdminValidation, setIsErrorAdminValidation] = useState(false)
  const [errorAdminValidation, setErrorAdminValidation] = useState('')

  useEffect(() => {

    const checkAuth = async () => {
      const fbApp = firebaseApp()
      const fbAuth = getAuth(fbApp)

      onAuthStateChanged(fbAuth, async authData => {
        console.log('authData', authData)
        if (authData) {
          setIsLogged(true)
        }
      })
    }
    checkAuth()
  }, [])

  const resetAdminState = () => {
    setIsErrorAdminValidation(false)
    setErrorAdminValidation('')
  }

  const initAdminValidation = async () => {
    resetAdminState()
    setIsAdminValidation(true)
    const fbApp = firebaseApp()
    const database = getDatabase(fbApp)
    const fbAuth = getAuth(fbApp)
    const userId = fbAuth.currentUser?.uid;

    if (hostname.length === 0) {
      setIsAdminValidation(false)
      setIsErrorAdminValidation(true)
      setErrorAdminValidation('Domain not valid')
    }

    const getAdmin = ref(database, 'admin/' + userId + '')
    get(getAdmin).then((snapshot: any) => {
      const data: BaseDatabaseAdminList = snapshot.val()
      if (data) {
        if (data.domain && data.domain.length > 0) {
          if (data.domain.includes(hostname)) {
            router.push('/console')
          } else {
            setIsAdminValidation(false)
            setIsErrorAdminValidation(true)
            setErrorAdminValidation('User does not the owner')
          }
        }
      } else {
        setIsAdminValidation(false)
        setIsErrorAdminValidation(true)
        setErrorAdminValidation('User does not the owner')
      }
    }).catch(() => {
      setIsAdminValidation(false)
      setIsErrorAdminValidation(true)
      setErrorAdminValidation('Something went wrong')
    })
  }

  const runAuth = async () => {
    const fbApp = firebaseApp()
    const fbAuth = getAuth(fbApp)
    const provider = new GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')

    try {
      await signInWithPopup(fbAuth, provider)
      await initAdminValidation()
    } catch (error: any) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.group('errorCode:auth')
      console.log('errorCode:', errorCode)
      console.log('errorMessage:', errorMessage)
      console.log('email:', errorCode)
      console.log('credential:', credential)
      console.groupEnd()
    }
  }

  const runSighOut = async () => {
    const fbApp = firebaseApp()
    const fbAuth = getAuth(fbApp)
    await signOut(fbAuth)
    setIsLogged(false)
    resetAdminState()
  }

  return (
    <Fragment>
      <main className="xl:container mx-auto mt-8">

        <div className="flex flex-col justify-center content-center w-full items-center">

          {
            isAdminValidation ? (
              <Fragment>
                <h1 className="text-center mb-8">Validation the owner...</h1>
              </Fragment>
            ) : null
          }

          {
            isErrorAdminValidation ? (
              <Fragment>
                <h1 className="text-center mb-8"><span className="text-red-600">{ errorAdminValidation !== '' ? errorAdminValidation : 'Something went wrong' }</span></h1>
                <button className="px-4 py-3 bg-black rounded-md text-white outline-none shadow-lg mx-5 flex" onClick={runSighOut}>
                  SignOut
                </button>
              </Fragment>
            ) : (
              <div className="relative p-2 flex flex-col w-full md:max-w-[400px] bg-black bg-opacity-25 hover:shadow-lg rounded-xl">
              {
                isLogged ? (
                  <button className="btn btn-primary" onClick={runSighOut}>
                    SignOut
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={runAuth}>
                    Sign in with Google
                  </button>
                )
              }
              </div>
            )
          }

        </div>

      </main>
    </Fragment>
  )
}