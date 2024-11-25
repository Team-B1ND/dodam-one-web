import React,{StrictMode} from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from "react-router-dom";
import Routes from './components/Router/router';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
    },
  },
});

function Root() {
  return (
    <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
            <Routes/>
      </BrowserRouter>
    </QueryClientProvider>
    </StrictMode>
  );
}

export default Root;
