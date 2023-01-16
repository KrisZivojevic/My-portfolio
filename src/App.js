import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import ScrollToTop from "react-scroll-to-top";
import { colors } from "./constants";

function App() {
  return (
    <div className="overflow">
      <ScrollToTop
        smooth
        style={{ backgroundColor: colors.teal }}
        height="20"
        width="20"
        color={colors.mint}
        className="scroll-to-top"
      />
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
