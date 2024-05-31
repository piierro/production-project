import './styles/index.scss'

import { classNames } from 'shared/lib/classNames/className'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgetes/Navbar'
import { Sidebar } from 'widgetes/Sidebar'

export const App = () => {
    const { theme } = useTheme();

    return (
    <div className={classNames('app', {}, [theme])}>
       <Navbar />
       <div className='content-page'>
        <Sidebar />
        <AppRouter />
       </div>
    </div>
    )
}