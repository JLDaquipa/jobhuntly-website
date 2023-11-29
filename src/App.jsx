import Nav from "./components/Nav";
import Hero from "./sections/Hero";

function App() {
  return (
    <div>
      <header className="md:absolute md:z-10 w-full">
        <Nav />
      </header>
      <main>
        <section className="bg-lights-gray lg:cut-bottom-right">
          <Hero />
        </section>
      </main>
    </div>
  )
}

export default App
