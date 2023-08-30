import { useState } from "react"
import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoesCard from "../components/ShoesCard"

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section 
    id="home" 
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen 
    gap-10 max-container"
    >
    <div className="reletive xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28" >
      <p className="text-[25px] font-montserrat text-coral-red font-semibold" > Our Winter Collection </p>
      <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82] font-bold" > 
        <span className="xl:bg-white xl:whitespace-nowarp relative z-10 pr-10">The New Arrival</span>
        <br/>
        <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
      </h1>
      <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Hi There My name is Jiramet who r builing this site :D</p>
      <Button label="Shop now" iconURL={arrowRight}  />
      <div className="flex justify-starts items-start flex-warp w-full mt-20 gap-16" >
          {statistics.map((stats, index)=> (
            <div key={index}>
            <p className="text-4xl font-palanquin font-bold ">{stats.value}</p>
            <p className="leading-7 font-montserrat text-slate-gray" >{stats.label}</p>
            </div>
          ))}

      </div>
    </div>
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <img 
        src={ bigShoeImg }
        alt="shoes collection"
        width={400}
        height={250}
        className="object-contain relative z-10"
      />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[15%] max-sm:px-6">
        {shoes.map((shoe, index) => (
        <div key={index}>
          <ShoesCard
            imgURL= {shoe}
            changeBigShoeImage= {(shoe) => setbigShoeImg(shoe)}
            bigShoeImg={bigShoeImg} 
          />
        </div>
        ))}
      </div>
    </div>

    </section>
  )
}

export default Hero