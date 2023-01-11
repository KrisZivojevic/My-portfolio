import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';

function App() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
    console.log("click");
      element.scrollIntoView({ behavior: 'smooth' });
    }};
  return (
    <div>
      <Navigation scrollHandler={handleClickScroll} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
