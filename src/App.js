import "./App.css";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ApiProvider } from "./context/ApiContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      {/* Outlet 어디서든 React-query를 사용할 수 있음. */}
      <ApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </ApiProvider>
    </>
  );
}

export default App;
