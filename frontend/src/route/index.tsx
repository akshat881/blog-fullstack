import Forms from 'components/form'
import Login from 'components/login'
import Forgot from 'components/forgot'
import Dash from 'components/dashboard'
import Error from 'components/error'
import Reset from 'components/reset'
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
        component:<Dash/>,
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

    }
]
export default routespath;