import { perks } from "../constant"

const PerksAndBenefits = () => {
  return (
    <div>
      <div className="mb-8">
        <h3 className="font-clashDisplay font-semibold text-2xl md:text-[2rem] mb-2">Perks & Benefits</h3>
        <p className="text-neutral-80">This job comes with several perks and benefits</p>
      </div>
      <div className="grid grid-auto-columns gap-8">
        {
          perks.map(perk => (
            <div key={perk.name} className="flex-1 min-w-[15rem] max-w-[18rem]">
              <img src={perk.icon} className="mb-6" />
              <h5 className="font-clashDisplay font-semibold text-xl mb-3">{perk.name}</h5>
              <p className="text-neutral-80">{perk.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PerksAndBenefits