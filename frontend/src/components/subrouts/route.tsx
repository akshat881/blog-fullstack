
import Dash from 'components/dashboard'
import Blogs from 'components/post'
const subroutespath=[
    
    
    {
        path:"/home/:userid",
        component:<Dash/>,
      

    },
    {
        path:"blog/:id",
        component:<Blogs/>,
       

    },

]
export default subroutespath;