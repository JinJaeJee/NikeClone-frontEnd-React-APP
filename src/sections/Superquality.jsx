import { star } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const Superquality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg" >
          We provide you  <span className="text-coral-red inline-block mt-3"> Super</span>
          <span className="text-coral-red inline-block mt-3"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text mb-4">I know it is my first Web app so it will not look great at all</p>
        <div><Button label="View Details" /></div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img 
          src={shoe8}
          alt="shoes5"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default Superquality