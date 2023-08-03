'use client'

import '@/app/styles/admin.scss';

import AdminSidebar from '@/components/Admin/Layout/Sidebar';
import AdminHeader from '@/components/Admin/Layout/Header';

import { Provider } from 'react-redux';
import { Suspense } from 'react';
import Loading from './loading';

import { persistStore } from 'redux-persist';
import { setupStore } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

interface IProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider store={setupStore()}>
          <PersistGate loading={<Loading />} persistor={persistStore(setupStore())}>
            <Suspense fallback={<Loading />}>
              <AdminHeader />

              <div className="container-fluid">
                <div className="row">
                  <AdminSidebar />

                  <main
                    className="col-md-9 ms-sm-auto col-lg-10 px-md-2"
                    style={{
                      minHeight: '1024px'
                    }}
                  >
                    {children}
                  </main>
                </div>
              </div>
            </Suspense>
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
