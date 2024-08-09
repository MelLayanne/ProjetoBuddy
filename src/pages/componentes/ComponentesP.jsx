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
  const itemsPerSlide = 1; // Ajuste o número de itens por slide conforme necessário

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <section className="h-screen w-full">
    <div className="h-full bg-[url('https://png.pngtree.com/background/20230614/original/pngtree-autism-puzzle-pieces-that-are-colorful-background-stock-photo-picture-image_3523481.jpg')] bg-no-repeat bg-cover bg-center z-10 w-full">
        <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
            <div className="text-white flex items-center justify-center h-full w-full text-center px-4">
                <div className="w-3/5 mx-auto pb-16 pt-80 max-w-full text-center md:w-9/10 md:pb-8">
                    <div className="">
                        <div className="font-tinos font-normal text-7xl md:text-5xl">
                            <h1 className=' text-7xl pb-7 md:px-4'>Componentes</h1>
                        </div>
                        <div className="text-center">
                            <p className='text-gray-400  text-justify font-fira'>Veja todas as funções do nosso TCC aqui no site. Pesquise, interaja e entre em contato conosco.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    <div className="bg-gradient-to-b from-blue-100 to-blue-50 py-12">
      <section className="py-8 mb-[20vh] mt-[10vh]" id="componentes">
       
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-6xl">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div
                className="flex transition-transform duration-700 ease-in-out transform-gpu"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div
                    className={`flex-none w-full md:w-[33.33%]`}
                    key={index}
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-[300px] mx-auto h-[200px] object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-azul px-4 py-2 rounded-full shadow-md hover:bg-blue-100 transition duration-300"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-azul px-4 py-2 rounded-full shadow-md hover:bg-blue-100 transition duration-300"
            >
              ❯
            </button>
          </div>
        </div>
      </section>

      {/* Outras Seções */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="font-tinos text-5xl text-center text-azul mb-12">
            Mais Componentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-azul font-bold text-2xl mb-4">
                Tela DWIN
              </h3>
              <p className="font-fira-sans text-justify">
              A Teka DWIN é uma tela de interface inteligente que desempenha um papel crucial na criação de soluções interativas e personalizadas em projetos de automação e eletrônica. Destinada a desenvolvedores que buscam integrar recursos visuais avançados em seus dispositivos, a Teka DWIN se destaca por sua versatilidade e capacidade de adaptação a uma ampla gama de aplicações.
              </p>
            </div>
            <div className="bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-azul font-bold text-2xl mb-4">
                Jumpers
              </h3>
              <p className="font-fira-sans text-justify">
              Jumpers de Pino: Normalmente consistem em um ou mais pinos que podem ser conectados a outros pinos. Usados para fazer conexões simples.
Jumpers de Conexão: Usados em fios com conectores de fêmea nas extremidades, facilitando a conexão entre componentes em protoboards.
              </p>
            </div>
            <div className="bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-azul font-bold text-2xl mb-4">
                Monitoramento e Relatórios
              </h3>
              <p className="font-fira-sans text-justify">
                O robô oferece uma variedade de atividades interativas projetadas para estimular o desenvolvimento cognitivo e social das crianças.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div></>
  );
};

export default ComponentesP;
