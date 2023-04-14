import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import routespath from "route/index"
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
 
  
   

 
 
 
<Router>
<QueryClientProvider client={queryClient}>
  <Routes>
    
    {
      routespath.map((data,index)=>{
        const {path,component,restricted}=data;
        return(
          <Route key={index} path={path} element={restricted?(<ProtectedRoutes component={component}/>):(<PublicRoutes component={component}/> )}/>
          

        )
      })
    }

  </Routes>
  <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
  </QueryClientProvider>
</Router>
  );
}
export default App;
