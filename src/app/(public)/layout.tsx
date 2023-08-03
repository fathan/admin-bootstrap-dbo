'use client'

import '@/app/styles/public.scss'
import { Suspense } from 'react';
import Loading from './loading';
import InternetStatus from '@/components/Public/InternetStatus';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { setupStore } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-100">
      <body
        suppressHydrationWarning={true}
        className="d-flex h-100 text-center text-bg-dark"
      >
        <Provider store={setupStore()}>
          <PersistGate loading={<Loading />} persistor={persistStore(setupStore())}>
            <Suspense fallback={<Loading />}>
              {children}
              <InternetStatus />
            </Suspense>
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
