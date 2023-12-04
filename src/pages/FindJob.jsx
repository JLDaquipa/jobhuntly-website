import { drawline } from '../assets/images';
import SearchBar from '../components/SearchBar';

const FindJob = () => {
  return (
    <section >
      <div className='padding-x bg-neutral-0 font-epilogue py-10 lg:pt-36'>
        <div className='max-container'>
          <h2 className="font-clashDisplay font-semibold text-4xl text-center mb-4">
            Find your <span className="text-accent-blue w-min inline-block whitespace-nowrap">
              dream job
              <img className="w-full" src={drawline}/>
            </span>
          </h2>
          <p className='text-lg text-neutral-80 text-center mb-6'>Find your next career at companies like HubSpot, Nike, and Dropbox</p>
          <SearchBar />
        </div>
      </div>
    </section>
  )
}

export default FindJob