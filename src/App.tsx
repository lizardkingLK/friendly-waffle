import Gallery from "./components/gallery";
import Search from "./components/search";

function App() {
  return (
    <div className="">
      <nav className="bg-green-500 p-2 flex items-center justify-between">
        <h1 className="text-white font-bold">Friendly Waffle 🧇</h1>
        <Search />
      </nav>
      <section className="bg-gray-50 p-2">
        <Gallery />
      </section>
    </div>
  );
}

export default App;
