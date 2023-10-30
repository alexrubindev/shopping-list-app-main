import '../styles/globals.css'
import type {
  AppProps
} from 'next/app'
import { Toaster } from 'react-hot-toast'
import Providers from '~store/provider'

function App({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <Providers>
        <Component
          {...pageProps}
        />
      </Providers>
      <Toaster
        position='top-right'
      />
    </>
  )
}

export default App