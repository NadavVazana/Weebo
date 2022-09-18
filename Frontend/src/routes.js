import { Home } from './pages/home.jsx'
import { Editor } from './pages/editor.jsx'
import { About } from './pages/about.jsx'
import { Login } from './pages/login.jsx'
import { Templates } from './pages/templates/templates.jsx'
import { Dashboard } from './pages/dashboard.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        element: <Home />,
        label: 'Home 🏠',
    },
    {
        path: 'editor',
        element: <Editor />,
        label: 'Editor'
    },
    {
        path: 'editor/:exampleId',
        element: <Editor />,
        label: 'Example'
    },
    {
        path:'templates',
        element:<Templates />,
        label: 'Templates'
    },
    {
        path:'login',
        element:<Login />,
        label:'Login'
    },
    {
        path:'about',
        element:<About />,
        label: 'About'
    },
    {
        path:'dashboard',
        element:<Dashboard />,
        label: 'Dashboard'
    }
]

export default routes