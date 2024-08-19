import React, { useState } from 'react';

const ComponentesP = () => {
  const images = [
    'https://th.bing.com/th/id/OIP.svVJMrq_KZ6fXkWXg7FcjgAAAA?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.1f83571a85fbc283e60a22612814b0bd?rik=v1xQ9s0xoUvuJA&riu=http%3a%2f%2fcdn.globalso.com%2fdwin-global%2f1-151.jpg&ehk=zAsT%2b7O9lHWBDEox9knTmnfVBMgD2JgkNOdVV%2f6Gflg%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.Cy4SMThjodA5uqrw6XUVugHaGh?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP._Hy1udGWK_hLQU0Fof7g7AHaFQ?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.fVtIRytIe12U8e0Tw0wjHwHaHf?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.6a75b6a9413f33ddf45df4882a96f0c4?rik=5vyjVdPSrFPYvg&pid=ImgRaw&r=0',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.floor(images.length / itemsPerSlide) * itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= images.length ? 0 : prevIndex + itemsPerSlide
    );
  };
   
  return (
    <>
      <section className="h-screen w-full">
        <div className="h-full bg-[url('https://i.imgur.com/t6vSe9p.png')] bg-no-repeat bg-cover bg-center z-10 w-full">
          <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
            <div className="text-white flex flex-col items-center justify-center h-full w-full text-center px-4">
              <div className="w-full max-w-full px-4">
                <h1 className="font-tinos text-5xl md:text-7xl mb-4 mt-[20vh] md:mt-[30vh]">
                  BUDDY
                </h1>
                <div className="w-full max-w-full px-4">
                  <p className="text-gray-400 text-justify font-fira text-sm md:text-base">
                    Robô que auxilia responsáveis no desenvolvimento da fala, interação social e reconhecimento de emoções de crianças autistas de nível 2 entre 5 e 10 anos de idade. Possui integração com App, o que facilita a devolução de relatórios que analisam a evolução do autista.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="flex flex-col md:block w-full md:w-full pt-8 pl-0 font-light text-2xl">
          <div className="titulo_da_segunda text-center md:text-left ml-0 md:ml-[100px]">
            <h2 className="m-0 font-tinos text-4xl md:text-6xl">Componentes</h2>
            <div className="flex justify-center md:justify-start">
              <p className="m-0 font-tinos font-bold text-azul pl-0.5 text-base md:text-lg">
                Conheça os materiais que tornaram esse projeto possível
              </p>
              <div className="ml-0 md:ml-4 bg-azul h-2 md:h-4 w-24 md:w-36 mt-3">
                <hr className="text-azul" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-12">
        <section className="py-8 mb-[2rem] mt-[-2rem] ml-[-5rem]" id="componentes">
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-full md:max-w-6xl">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div
                  className="flex transition-transform duration-700 ease-in-out transform-gpu"
                  style={{
                    transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`,
                  }}
                >
                  {images.map((image, index) => (
                    <div
                      className="flex-none w-full md:w-1/3 px-2"
                      key={index}
                    >
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-azul px-3 py-1 rounded-full shadow-md hover:bg-blue-100 transition duration-300 md:px-4 md:py-2"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-azul px-3 py-1 rounded-full shadow-md hover:bg-blue-100 transition duration-300 md:px-4 md:py-2"
              >
                ❯
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white py-12">
        <section className="py-8 mb-[2rem] mt-[-2rem] ml-[-5rem]" id="componentes">
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-full md:max-w-6xl">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div
                  className="flex transition-transform duration-700 ease-in-out transform-gpu"
                  style={{
                    transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`,
                  }}
                >
                  {images.map((image, index) => (
                    <div
                      className="flex-none w-full md:w-1/3 px-2"
                      key={index}
                    >
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-azul px-3 py-1 rounded-full shadow-md hover:bg-blue-100 transition duration-300 md:px-4 md:py-2"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-azul px-3 py-1 rounded-full shadow-md hover:bg-blue-100 transition duration-300 md:px-4 md:py-2">❯
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className='bg-gray-100 pt-[3rem] h-full'>
  <div className='pl-[5rem] pb-9'>
    <h2 className='font-tinos text-6xl'>Contate-nos</h2>
    <p className='font-fira text-azul'>
      Fale conosco em caso de dúvida, questionamentos, ou se apenas quiser nos dar uma dica de como melhorar.
    </p>
    <form className='mt-6'>
      <div className='mb-4'>
        <label className='block text-azul text-sm font-bold mb-2' htmlFor='name'>
          Nome
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-azul leading-tight focus:outline-none focus:shadow-outline'
          id='name'
          type='text'
          placeholder='Seu nome'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-azul text-sm font-bold mb-2' htmlFor='email'>
          Email
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-azul leading-tight focus:outline-none focus:shadow-outline'
          id='email'
          type='email'
          placeholder='Seu email'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-azul text-sm font-bold mb-2' htmlFor='message'>
          Mensagem
        </label>
        <textarea
          className='shadow appearance-none border rounded w-full py-2 px-3 text-azul leading-tight focus:outline-none focus:shadow-outline'
          id='message'
          rows='4'
          placeholder='Sua mensagem'
        ></textarea>
      </div>
      <div className='mb-4'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</section>

      
    </>
  );
};

export default ComponentesP;
