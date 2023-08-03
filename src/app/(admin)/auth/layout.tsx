'use client';

import '@/app/styles/admin.scss';

import { Provider } from 'react-redux';
import { Suspense } from 'react';
import Loading from './loading';

import { persistStore } from 'redux-persist';
import { setupStore } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingPage from '@/components/Public/LoadingPage';

interface IProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: IProps) {
  return (
    <html lang="en" data-bs-theme="auto">
      <body
        suppressHydrationWarning={true}
        className="d-flex align-items-center py-4 bg-body-tertiary"
      >
        <Provider store={setupStore()}>
          <PersistGate loading={null} persistor={persistStore(setupStore())}>
            <Suspense fallback={null}>
              {children}
            </Suspense>
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
