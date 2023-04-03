import Forms from 'components/form'
import Login from 'components/login'
import Forgot from 'components/forgot'
import Dash from 'components/dashboard'
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
        restricted:false

    }
]
export default routespath;