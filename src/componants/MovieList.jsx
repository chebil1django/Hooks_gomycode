import React from 'react'
import MovieCard from './MovieCard';

const movies = [
    {
      title: "Wireless Headphones",
      rate : 50,
      description:
        "Experience immersive sound quality with our wireless headphones. Enjoy the freedom of movement without compromising on audio performance.",
      URL: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Smartphone",
      rate : 50,
      description:
        "Stay connected and productive with our latest smartphone. Packed with powerful features and a stunning display, it's your perfect companion.",
      URL: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Fitness Tracker",
      rate : 50,
      description:
        "Achieve your fitness goals with our advanced fitness tracker. Monitor your activity levels, heart rate, and more, all in one sleek device.",
      URL: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Coffee Maker",
      rate : 50,
      description:
        "Start your day with the perfect cup of coffee. Our coffee maker delivers rich, flavorful brews with customizable settings for your preference.",
      URL: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Bluetooth Speaker",
      rate : 50,
      description:
        "Bring the party anywhere with our portable Bluetooth speaker. Enjoy high-quality sound and convenient wireless connectivity.",
      URL: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Laptop",
      description:
        "Power through tasks with ease using our high-performance laptop. Whether for work or play, it offers seamless performance and stunning visuals.",
      URL: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    },
    
  ];
  

function MovieList() {
  const [latest, setLatest] = useState(false);
  const [productsDis, setProductsDis] = useState(movies);
  const hundleProd = () => {
    setLatest((prev) => !prev);
  }; 
  useEffect(() => {
    if (latest) {
      const newProd = [...productsDis].slice(0, 3);
      setProductsDis(newProd);
    } else {
      setProductsDis(products);
    }
  }, [latest]);
  return (
    <div className="px-8 ">
    <button onClick={hundleProd}>show all </button>
    <div className="grid grid-cols-3 gap-4">
      {productsDis.map((v, i) => (
        <MovieCard prod={v} key={i} />
      ))}
    </div>
  </div>
  )
}

export default MovieList