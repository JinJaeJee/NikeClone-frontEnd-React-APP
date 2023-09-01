import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
  <section className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
    <div className="flex-1">
      <img 
        src={offer}
        width={773}
        height={687}
        className="object-contain w-full"
      />
    </div>
    <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg" >
          <span className="text-coral-red inline-block mt-3"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text mb-4">I know it is my first Web app so it will not look great at all. Simply dummy text of the printing and typesetting industry. </p>
        <p className="mt-4 lg:max-w-lg info-text mb-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" iconURL={arrowRight}/>
          <Button 
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'            
          />
        </div>
    </div>
  </section>
)
}

export default SpecialOffer