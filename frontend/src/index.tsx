import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store'
import { Provider } from 'react-redux'
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from 'redux-persist/integration/react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from 'react-query/devtools'

const persistor=persistStore(store)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
