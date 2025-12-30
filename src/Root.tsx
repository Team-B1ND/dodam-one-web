import {StrictMode} from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from "react-router-dom";
import Routes from './components/Router/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProviderContainer from './components/Common/ThemeProviderContainer';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
  },
});

function Root() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProviderContainer>
          <ToastContainer autoClose={1000} limit={1} />
            <BrowserRouter>
              <Routes/>
            </BrowserRouter>
          </ThemeProviderContainer>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default Root;
