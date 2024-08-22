import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { YardRounded } from "@mui/icons-material";

function PopularCourses() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="popularcourses">
      <p className=" text-white font-semibold text-3xl text-center pt-10 mb-10 ">
        POPULAR COURSES
      </p>
      <hr className=" text-gray-500 w-4/5 ml-24 mb-24 pt-10 " />
      <div className=" w-[1250px] m-auto mt-[-91px] ">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
               <a className="rounded-2xl"  href={d.url} 
            key={d.name} target="_blank"
              rel="noopener noreferrer">
              <div
               
                className=" bg-red-800 h-72  text-black rounded-2xl mb-14 "
              >
                <div className=" bg-white rounded-t-2xl ">
                  <img src={d.img} alt="" className=" h-52 w-66 rounded-t-2xl" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                
                  <p className="text-xl font-semibold text-white">{d.name}</p>
                
                
                </div>
              </div>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
const data = [
  {
    name: `Medicine`,
    img: `/assets/Medicines.jpg`,
    url: "https://en.wikipedia.org/wiki/Medicine",
  },
  {
    name: `Bachelor of Business Administration`,
    img: `/assets/bba.png`,
    url: "https://en.wikipedia.org/wiki/Bachelor_of_Business_Administration",
  },
  {
    name: `MBA (Masters In Business Administration)`,
    img: `/assets/mba.jpg`,
    url: "https://en.wikipedia.org/wiki/Master_of_Business_Administration",
  },
  {
    name: `Data science`,
    img: `/assets/ds.jpg`,
    url: "https://www.ibm.com/topics/data-science",
  },
  {
    name: `Fashion design`,
    img: `/assets/fd.jpg`,
    url: "https://en.wikipedia.org/wiki/Fashion_design",
  },
  {
    name: `Financial accounting`,
    img: `/assets/fa.gif`,
    url: "https://en.wikipedia.org/wiki/Financial_accounting",
  },
  {
    name: `Architecture`,
    img: `/assets/a.jpg`,
    url: "https://en.wikipedia.org/wiki/Architecture",
  },
  {
    name: `Bachelor of Fine Arts`,
    img: `/assets/bfa.jpg`,
    url: "https://en.wikipedia.org/wiki/Bachelor_of_Fine_Arts",
  },
  {
    name: `Cybersecurity`,
    img: `/assets/cyber.png `,
    url: "https://en.wikipedia.org/wiki/Cybersecurity",
  },

  {
    name: `Law`,
    img: `/assets/law.jpg`,
    url: "https://en.wikipedia.org/wiki/Law",
  },
];

export default PopularCourses;
