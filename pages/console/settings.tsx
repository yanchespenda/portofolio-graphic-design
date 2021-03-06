import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"

import ConsoleHeader from '../../components/console/Header'
import { firebaseApp } from "../../firebase/init"

export default function ConsoleSettings() {

  const router = useRouter()
  const [isValidateAuth, setIsValidateAuth] = useState(true)

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
      ConsoleSettings!
    </Fragment>
  )
}