import { CustomerReviews, Footer, Hero, Nav, PopularProducts, Services, Specialoffer, Subscribe, Superquality } from "./sections";

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r pdding-b">
      <Hero/>
    </section>
    <section className="padding">
    <PopularProducts/>
    </section>
    <section className="padding">
    <Superquality/>
    </section>
    <section className="padding">
    <Services/>
    </section>
    <section className="padding">
    <Specialoffer/>
    </section>
    <section className="bg-pale-blue padding" >
    <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe/>
    </section>
    <section className="padding-x py-10">
    <Footer/>
    </section>
  </main>
);

export default App;

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">hello world</h1>
//   )
// }