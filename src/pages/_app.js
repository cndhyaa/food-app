import '@/styles/globals.css'
import { useLayoutEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig"
import { useRouter } from 'next/router';
import loggedInRoute from '@/constants/loggedInRoute';
import loggedOutRoute from '@/constants/loggedOutRoute';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  let path = router.pathname

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log({ email: currentUser?.email });
      if (currentUser?.email && !loggedInRoute.includes(path)){
        window.location.href = '/'
      }

      if (!currentUser?.email && !loggedOutRoute.includes(path)){
        window.location.href = '/'
      }
    })

  }, [])

  return <Component {...pageProps} />
}
