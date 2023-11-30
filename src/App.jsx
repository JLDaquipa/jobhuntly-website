import 'remixicon/fonts/remixicon.css';
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Company from "./sections/Company";
import Category from "./sections/Category";

function App() {
  return (
    <div>
      <header className="md:absolute md:z-10 w-full padding-x">
        <Nav />
      </header>
      <main>
        <section className="bg-lights-gray lg:cut-bottom-right padding-x relative">
          <Hero />
          <div className="w-2/3 bg-hero bg-cover h-full absolute right-0 top-0 z-1">
          </div>
        </section>
        <section className="padding-x">
          <Company />
        </section>
        <section className="padding-x">
          <Category />
        </section>
      </main>
    </div>
  )
}

export default App
