import './styles/index.scss'

import { classNames } from 'shared/lib/classNames/className'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgetes/Navbar'
import { Suspense } from 'react'
// import { Sidebar } from 'widgetes/Sidebar'

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          {/* <Sidebar /> */}
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}