import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-3/4 m-auto mt-[-530px] ">
      <div className="mt-20 ">
        <Slider {...settings}>
          {data.map((d) => (
            <a className="rounded-2xl"  href={d.url} 
            key={d.name} target="_blank"
              rel="noopener noreferrer">
            <div
              className=" bg-red-800 h-64 w-80 flex flex-col justify-center items-center mx-4 rounded-2xl mb-14 "
            >
              <div className="mt-8  ">
                <img src={d.img} alt="" className="object-cover w-36 h-36  rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-white" >{d.name}</p>
              </div>
            </div>
          </a>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `IIT Kharagpur` , 
    img: `/assets/iitkgp.jpg`,
    url: `https://www.iitkgp.ac.in/`
  },
  {
    name: `IIT Bombay`,
    img: `/assets/bombay.avif`,
    url: `https://www.iitb.ac.in/`
  },
  {
    name: `IIT Madras`,
    img: `/assets/iitm.webp`,
    url: `https://www.iitm.ac.in/`
  },
  {
    name: `IIT Kanpur`,
    img: `/assets/kanpur.jpeg`,
    url: `https://www.iitk.ac.in/`
  },
  {
    name: `IIT Delhi`,
    img: `/assets/udelhi.avif`,
    url: `https://www.iitdu.ac.in/`
  },
  {
    name: `IIT Guwahati`,
    img: `/assets/iitg.jpg`,
    url: `https://www.iitg.ac.in/`
  },
  {
    name: `IIT  Roorkee`,
    img: `/assets/roorkee.webp`,
    url: `https://www.iitr.ac.in/`
  },
  {
    name: `IIT Ropar`,
    img: `/assets/rooper.webp`,
    url: `https://www.iitrpr.ac.in/`
  },
  {
    name: `IIT Bhubaneswar`,
    img: `/assets/bbs.jpeg`,
    url: `https://www.iitbbs.ac.in/`
  },
  {
    name: `IIT Gandhinagar`,
    img: `/assets/gandhinagar.webp`,
    url: `https://www.iitgn.ac.in/`
  },
  {
    name: `IIT Hyderabad`,
    img: `/assets/iith.jpeg`,
    url: `https://www.iith.ac.in/`
  },
  {
    name: `IIT Jodhpur`,
    img: `/assets/iitj.jpg`,
    url: `https://www.iitj.ac.in/`
  },

  {
    name: `IIT Patna`,
    img: `/assets/iip.jpeg`,
    url: `https://www.iitp.ac.in/`
  },
  {
    name: `IIT Indore`,
    img: `/assets/iiti.webp`,
    url: `https://www.iitim.ac.in/` 
  },
  {
    name: `IIT Mandi`,
    img: `/assets/iitmd.jpg`,
    url: `https://www.iitmandi.ac.in/`  
  },
  {
    name: `IIT Varanasi`,
    img: `/assets/iitbhu.jpg`,
    url: `https://www.iitbhu.ac.in/`
  },
  {
    name: `IIT Palakkad`,
    img: `/assets/iitp.jpg`,
    url: `https://www.iitpkd.ac.in/`
  },
  {
    name: `IIT Tirupati`,
    img: `/assets/iitt.webp`,
    url: `https://www.iitp.ac.in/`,
  },
  {
    name: `IIT Dhanbad`,
    img: `/assets/iitd.jpg`,
    url: `https://www.iitd.ac.in/`,
  },
  {
    name: `IIT Bhilai`,
    img: `/assets/iitb.jpeg`,
    url: `https://www.iitb.ac.in/`,
  },
  {
    name: `IIT Dharwad`,
    img: `/assets/iitdwd.jpg`,
    url: `https://www.iitdwd.ac.in/`,
  },
  {
    name: `IIT Jammu`,
    img: `/assets/iitjmmu.jpg`,
    url: `https://www.iitj.ac.in/`,

  },
  {
    name: `IIT Goa`,
    img: `/assets/iitgoa.jpg`,
    url: `https://www.iitgoa.ac.in/`,
  },
];

export default Carousel;
