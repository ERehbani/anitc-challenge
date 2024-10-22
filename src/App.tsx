import Carousel from "./components/landing/components/carousel";
import Description from "./components/landing/components/description";
import Footer from "./components/landing/components/footer";
import Header from "./components/landing/components/header";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="">
        <Header />

        <Description />

        <Carousel />
      </main>

      <Footer />
    </div>
  );
}

export default App;
