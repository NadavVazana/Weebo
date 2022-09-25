import { Home } from './pages/home.jsx'
import { Editor } from './pages/editor-page.jsx'
import { About } from './pages/about.jsx'
import { Login } from './pages/login.jsx'
import { Templates } from './pages/templates/templates.jsx'
import { Dashboard } from './pages/dashboard.jsx'
import { Publish } from './pages/publish.jsx'
import { Signup } from './pages/sign-up.jsx'
import { Preview } from './pages/preview.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        element: <Home />,
        label: 'Home 🏠',
    },
    {
        path: '/publish/:siteId',
        element: <Publish />,
        label: 'Publish',
    },
    {
        path: 'preview/:templateId',
        element: <Preview />,
        label: 'Preview',

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
        path:'signup',
        element:<Signup />,
        label:'Sign up'
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
    },
    // {
    //     path:'publish',
    //     element:<Publish />,
    //     label: 'Publish'
    // }
]

export default routes