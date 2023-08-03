import type { AppProps } from 'next/app';
import BaseLayout from '@/layouts/Base';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}