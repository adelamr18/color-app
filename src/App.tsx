import React from "react";
import ColorDashboard from "./components/pages/ColorDashboard/ColorDashboard";
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ColorDashboard></ColorDashboard>
    </QueryClientProvider>
  );
} 

export default App;
