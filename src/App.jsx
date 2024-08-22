
import Footer from "./component/footer";
import NavBar from "./component/NavBar";

import Carousel from "./section/Carousel";
import Hero from "./section/Hero";
import MedicalCllg from "./section/MedicalCllg";
import PopularCourses from "./section/PopularCourses";
import UniversityCard from "./component/UniversityCard";



function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <Carousel/>
      <UniversityCard/>
      <MedicalCllg/>
      <PopularCourses/>
      <Footer/>
      
    </>
      
  )
}

export default App;
