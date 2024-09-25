import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalContextProvider } from "./global";
import Home from "./pages/Home";

const App = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <Home />
      <Footer />
    </GlobalContextProvider>
  );
};

export default App;
