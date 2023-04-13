import Forms from 'components/form'
import Login from 'components/login'
import Forgot from 'components/forgot'
import Dash from 'components/dashboard'
import Error from 'components/error'
import Reset from 'components/reset'
import Sidnav from 'components/sidenavbar'
import Blogs from 'components/post'
const routespath=[
    {
        path:"/",
        component:<Forms/>,
        restricted:false

    },
    {
        path:"/login",
        component:<Login/>,
        restricted:false

    },
    {
        path:"/forgot",
        component:<Forgot/>,
        restricted:false

    },
    {
        path:"/dash",
        component:<Sidnav/>,
        restricted:true

    },
    {
        path:"*",
        component:<Error/>,
        restricted:false

    },
    {
        path:"/reset",
        component:<Reset/>,
        restricted:false

    },
    {
        path:"/dash/blog/:id",
        component:<Blogs/>,
        restricted:false

    },

]
export default routespath;