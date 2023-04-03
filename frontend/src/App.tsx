import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import routespath from "route/index"
import { ReactQueryDevtools } from 'react-query/devtools'
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
          <Route key={index} path={path} element={component}/>
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
