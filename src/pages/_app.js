import '@/styles/globals.css';
import { useLayoutEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig"
import { useRouter } from 'next/router';
import loggedInRoute from '@/constants/loggedInRoute';
import loggedOutRoute from '@/constants/loggedOutRoute';
import adminRoutes from '@/constants/adminRoutes';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  let path = router.pathname

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log({ email: currentUser?.email });
      // let route = currentUser?.email ? (currentUser?.email == "cndhyaamainali@gmail.com" ? adminRoutes : loggedInRoute) : loggedOutRoute;
      
      // if (route.includes("/admin") && !route.includes(path)){
      //   window.location.href = '/admin';
      // } else if (route.includes("/UserSigninHome") && !route.includes(path)){
      //   window.location.href = '/UserSigninHome'
      // } else {
      //   window.location.href = "/"
      // }
      if (currentUser?.email === 'cndhyaamainali@gmail.com' && !adminRoutes.includes(path)) {
        window.location.href = 'admin'
      } else if (currentUser?.email && currentUser?.email !== "cndhyaamainali@gmail.com" && !loggedInRoute.includes(path)) {
        window.location.href = '/UserSigninHome'
      } else if (!currentUser?.email && !loggedOutRoute.includes(path)) {
        window.location.href = '/'
      }
    })

  }, [])

  return <Component {...pageProps} />
}
