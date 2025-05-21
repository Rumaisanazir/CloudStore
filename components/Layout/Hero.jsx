import coverImage from '../../assets/cover-image.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <img
        src={coverImage}
        alt="CloudStore"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <br />
      
      <div className='absolute top-1/3 inset-0 bg-purple-600 opacity-0.5  flex items-center justify-center'>
      <div  className='text-center text-gray-400  p-6 '>
       <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>
       Gateway <br />  Ready
        </h1>
        <p className='text-sm tracking-tighter md:text-lg mb-6'>
        Check out our getaway-ready styles with quick global delivery.

        </p>
        <Link to="#"
         className='bg-yellow-500   text-red-950 px-6 py-2 rounded-sm text-lg'
         >
          Shop Now
         </Link> 



      </div>
      

      </div>

    </div>
  );
};

export default Hero;