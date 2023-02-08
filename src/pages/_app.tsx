import { Layout } from '@/components/Layout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
