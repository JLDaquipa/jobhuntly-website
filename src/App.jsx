import { drawline } from "./assets/images"

function App() {
  return (
    <h1 className="text-6xl font-clashDisplay font-semibold">
      Discover <br /> more than 
      <span className="text-accent-blue block"> 5000+ Jobs</span>
      <img src={drawline} width={455} />
    </h1>
  )
}

export default App
