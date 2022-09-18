import { Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import routes from './routes'
import './assets/sass/styles.scss'

function App() {
    return (
        <section className="app">
            <AppHeader/>
            <main>
                <Routes>
                    
                {routes.map(route => 
                <Route key={route.path} 
                element={route.element} 
                path={route.path} />)}
                </Routes>
            </main>
            <AppFooter/>
        </section>
    )
}

export default App