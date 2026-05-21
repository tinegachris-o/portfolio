
import { Link } from 'react-router-dom';

type HeroProps = {
  name?: string;
  text?: string;
};

const Hero: React.FC<HeroProps> = ({
  name = 'Tinega Chris',
  text = 'AI Engineer & Software Developer focused on Machine Learning, backend systems, cloud infrastructure, APIs, MLOps, and modern web applications.',
}) => {
  return (
    <header className='bg-gray-900 text-white py-24 px-6 transition-colors duration-300'>
      <div className='max-w-6xl mx-auto text-center'>
        {/* Badge */}
        <div className='inline-block mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm'>
          🚀 AI Engineer | Backend Developer | Cloud & MLOps
        </div>

        {/* Heading */}
        <h1 className='text-5xl md:text-6xl font-bold leading-tight mb-6'>
          Hey, I'm{' '}
          <span className='text-blue-500'>{name}</span> 👋
        </h1>

        {/* Description */}
        <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10'>
          {text}
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            to='/projects'
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition shadow-lg'
          >
            View Projects
          </Link>

          <Link
            to='/contact'
            className='border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-medium transition'
          >
            Contact Me
          </Link>

          <a
            href='https://github.com/tinegachris-o'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-white px-8 py-3 rounded-xl font-medium transition'
          >
            GitHub
          </a>
        </div>

        {/* Skills Highlights */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16'>
          <div className='bg-gray-800 border border-gray-700 rounded-2xl p-6'>
            <h3 className='text-2xl font-bold text-blue-500 mb-2'>AI</h3>

            <p className='text-gray-400'>
              Machine Learning, Deep Learning & Computer Vision
            </p>
          </div>

          <div className='bg-gray-800 border border-gray-700 rounded-2xl p-6'>
            <h3 className='text-2xl font-bold text-blue-500 mb-2'>
              Backend
            </h3>

            <p className='text-gray-400'>
              APIs, Databases & Scalable Backend Systems
            </p>
          </div>

          <div className='bg-gray-800 border border-gray-700 rounded-2xl p-6'>
            <h3 className='text-2xl font-bold text-blue-500 mb-2'>Cloud</h3>

            <p className='text-gray-400'>
              AWS EC2, S3, Linux, Docker & Cloud Deployment
            </p>
          </div>

          <div className='bg-gray-800 border border-gray-700 rounded-2xl p-6'>
            <h3 className='text-2xl font-bold text-blue-500 mb-2'>MLOps</h3>

            <p className='text-gray-400'>
              Model Deployment, CI/CD & Production AI Workflows
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;