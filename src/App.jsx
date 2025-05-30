import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroComponent from "./components/HeroComponent";
import Grid from "./components/Grid";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      <main className="flex-grow">
        <Navbar />
        <HeroComponent />
        <Grid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
