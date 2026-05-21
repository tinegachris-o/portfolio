const AboutPage = () => {
  const techStack = [
    'Python',
    'Machine Learning',
    'Deep Learning',
    'TensorFlow',
    'PyTorch',
    'OpenCV',
    'Flask',
    'FastAPI',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Docker',
    'Linux',
    'Git & GitHub',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'MLOps',
    'REST APIs',
  ];

  return (
    <div className='max-w-6xl mx-auto px-6 py-16 bg-gray-900 min-h-screen'>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center md:items-start gap-10 mb-16'>
        <img
          src='/images/profile.jpg'
          alt='Tinega'
          className='w-44 h-44 rounded-full object-cover border-4 border-blue-500 shadow-lg'
        />

        <div className='flex-1'>
          <h1 className='text-4xl font-bold text-white mb-4'>
            Hey, I'm Tinega Chris 👋
          </h1>

          <p className='text-lg text-gray-300 leading-relaxed mb-4'>
            I’m an AI Engineer and Software Developer passionate about building
            intelligent systems, scalable backend applications, and modern web
            experiences.
          </p>

          <p className='text-gray-400 leading-relaxed'>
            I enjoy working on machine learning projects, deploying AI models,
            building APIs, and creating software that solves real-world
            problems. My focus is on combining AI with solid software
            engineering practices to build reliable and impactful systems.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className='mb-16'>
        <h2 className='text-3xl font-semibold text-white mb-4'>
          🚀 What I’m Focused On
        </h2>

        <p className='text-gray-300 leading-relaxed text-lg'>
          I’m currently focused on Artificial Intelligence, Machine Learning,
          MLOps, backend engineering, and cloud deployment. I enjoy learning how
          large-scale systems work and building projects that combine AI models,
          APIs, databases, and production infrastructure.
        </p>
      </div>

      {/* Projects / Interests */}
      <div className='grid md:grid-cols-3 gap-6 mb-16'>
        <div className='bg-gray-800 p-6 rounded-2xl border border-gray-700'>
          <h3 className='text-xl font-semibold text-white mb-3'>
            🤖 AI Engineering
          </h3>

          <p className='text-gray-400'>
            Building machine learning and deep learning projects including image
            classification, computer vision, and intelligent applications.
          </p>
        </div>

        <div className='bg-gray-800 p-6 rounded-2xl border border-gray-700'>
          <h3 className='text-xl font-semibold text-white mb-3'>
            ⚙️ Backend Systems
          </h3>

          <p className='text-gray-400'>
            Developing scalable backend services, REST APIs, authentication
            systems, and cloud-ready applications using modern tools.
          </p>
        </div>

        <div className='bg-gray-800 p-6 rounded-2xl border border-gray-700'>
          <h3 className='text-xl font-semibold text-white mb-3'>
            ☁️ Deployment & MLOps
          </h3>

          <p className='text-gray-400'>
            Learning deployment workflows, Docker, Linux environments, CI/CD,
            and model serving for production AI applications.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className='text-3xl font-semibold text-white mb-6'>
          🛠 Tech Stack
        </h2>

        <div className='flex flex-wrap gap-4'>
          {techStack.map((tech) => (
            <span
              key={tech}
              className='bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-xl text-sm hover:border-blue-500 transition'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;