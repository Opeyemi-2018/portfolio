import Header from "./components/Header";
import { GlobalContextProvider } from "./global";
import Home from "./pages/Home";

const App = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <Home />
    </GlobalContextProvider>
  );
};

export default App;
