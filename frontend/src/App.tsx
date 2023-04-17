import { BrowserRouter ,Route,Routes } from "react-router-dom";
import routespath from "route/index"
import {Check} from 'helper'
import Sidnav from 'components/sidenavbar'
import Blogs from "components/post";
import { ReactQueryDevtools } from 'react-query/devtools'
import ProtectedRoutes from "route/private";
import PublicRoutes from "route/public";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
})

function App() {
  return (
 
  
   

 
 

<BrowserRouter>

  {
   
Check()?<Sidnav/>:<Routes>
    
    {
      routespath.map((data,index)=>{
        const {path,component,restricted}=data;
        return(
          <Route key={index} path={path} element={restricted?(<ProtectedRoutes component={component}/>):(<PublicRoutes component={component}/> )}/>
          

        )
      })
    }

  </Routes>
 
  }


</BrowserRouter>

  );
}
export default App;
