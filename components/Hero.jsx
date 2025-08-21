import {useState, useEffect} from 'react'

const Hero = () => {
    const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: /images/iPhone.jpg,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: /images/iPhone.jpg,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: /images/iPhone.jpg,
    },
  ];

   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
      }, 3000);
      return () => clearInterval(interval);
   }, sliderData.length);

   const handleSlideChange = (index) => {
       setCurrentSlide(index);
   };

  return (
    <div>
      
    </div>
  )
}

export default Hero
