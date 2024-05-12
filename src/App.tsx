import Gallery from "./components/gallery";
import Viewer from "./components/viewer";

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-green-500 p-2 flex items-center justify-between">
        <h1 className="text-white font-bold">Friendly Waffle 🧇</h1>
      </nav>
      <section className="bg-gray-50 p-2">
        <Gallery />
      </section>
      <div className="h-32"></div>
      <section className="bg-white p-2">
        <Viewer />
      </section>
    </div>
  );
}

export default App;
