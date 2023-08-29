import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section 
    id="home" 
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen 
    gap-10 max-container"
    >
    <div className="reletive xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28" >
      <p> Our Winter Collection </p>
      <h1> 
        <span>The New Arrival</span>
        <br/>
        <span>Nike </span>
         Shoes
      </h1>
      <p>Hi There My name is Jiramet who r builing this site :D</p>
      <Button label="Shop now" iconURL={arrowRight}  />
      <div className="flex justify-starts items-start flex-warp w-full mt-20 gap-16" >
          {statistics.map((stats, index)=> (
            <div key={index}>
            <p>{stats.value}</p>
            <p>{stats.label}</p>
            </div>
          ))}

      </div>
    </div>
    </section>
  )
}

export default Hero