import React, { useState } from 'react';
import sensorL from '../../assets/sensorL.svg';
import protoboard from '../../assets/protoboard.svg'
import jumpers from '../../assets/jumpers.svg'
import sensorS from '../../assets/sensorS.svg'
import arduino from '../../assets/arduino.svg'
import moduloB from '../../assets/moduloB.svg'


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
                  <p className="text-gray-400 text-justify font-fira text-sm md:text-base md:text-center md:mr-[4rem]">
                  Descubra todos os componentes usados no nosso projeto e veja como cada peça foi fundamental para realização desse trabalho
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="flex flex-col md:block w-full md:w-full pt-8 pl-0 font-light text-2xl">
          <div className="titulo_da_segunda text-center md:text-left ml-0 md:ml-[4rem]">
            <h2 className="m-0 font-tinos text-3xl max-sm:ml-[-4.9rem] md:text-6xl">Componentes</h2>
            <div className="flex text-justify md:justify-start max-sm:w-[70%] max-sm:ml-[2.5rem]">
              <p className="m-0 font-tinos font-bold text-azul pl-0.5 text-base md:text-lg">
                Conheça os materiais que tornaram esse projeto possível
              </p>
              
            </div>
          </div>
        </div>
      </section>

  

      <section className="relative  overflow-hidden w-[80%] max-sm:ml-[2rem] ml-[16rem] max-sm:h-[70vh] md:mt-[3rem] max-sm:mb-16">
  <div id="carousel" className="flex transition-transform duration-500 ease-in-out ">
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-[30%] flex-shrink-0 md:mr-[3rem] pb-10 ">
      <img src={sensorL} alt="Sensor de Luminosidade" className="rounded-t-lg md:ml-[4rem]" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 font-tinos">Sensor de Luminosidade - R$16,90</h3>
        <p className="text-gray-700 text-justify max-w-80% font-tinos">O Sensor de luminosidade foi utilizado para se fixar na carcaça do robô, podendo então captar a luz do ambiente.</p>
      </div>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-[30%] flex-shrink-0 md:mr-[3rem]">
      <img src={protoboard} alt="Sensor de Luminosidade" className="rounded-t-lg md:ml-[4rem]" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 mt-14 font-tinos">Protoboard - R$9,40</h3>
        <p className="text-gray-700 text-justify font-tinos">A protoboard foi utilizada para montar e testar o circuito eletrônico do robô, possibilitando a conexão dos componentes de forma prática.</p>
      </div>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-[30%] flex-shrink-0 md:mr-[3rem]">
      <img src={sensorS} alt="Sensor de Luminosidade" className="rounded-t-lg md:ml-[3rem]" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 mt-[-0.8rem] font-tinos">Sensor de Som - R$8,90</h3>
        <p className="text-gray-700 text-justify font-tinos">O sensor de som foi integrado ao robô, permitindo captar variações acústicas no ambiente e reagir a diferentes níveis de ruído.</p>
      </div>
    </div>
  </div>
  <button id="prevBtn" className="absolute left-[-8] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
    &#10094;
  </button>
  <button id="nextBtn" className="  absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full md:mr-[3rem]">
    &#10095;
  </button>
</section>

<section className="relative overflow-hidden w-[80%] max-sm:ml-[2rem] ml-[16rem] max-sm:h-[70vh] md:mt-[4rem] md:mb-[4rem] max-sm:mb-16">
  <div id="carousel" className="flex transition-transform duration-500 ease-in-out">
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-[30%] flex-shrink-0 md:mr-[3rem] pb-18">
      <img src={jumpers} alt="Sensor de Luminosidade" className="rounded-t-lg md:ml-[4rem]" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 mt-16 font-tinos">Jumpers - R$16,90</h3>
        <p className="text-gray-700 text-justify font-tinos">Os jumpers foram utilizados para estabelecer conexões temporárias entre os componentes na protoboard.</p>
      </div>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-[30%] flex-shrink-0 md:mr-[3rem]">
      <img src={arduino} alt="Sensor de Luminosidade" className="rounded-t-lg mt-20 ml-2 w-60  md:ml-[4rem]" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 mt-14 font-tinos">Arduíno Mega - R$219,20</h3>
        <p className="text-gray-700 text-justify font-tinos">O Arduino Mega foi utilizado como a base do controle do robô, oferecendo uma ampla capacidade de processamento e múltiplas portas de entrada e saída.</p>
      </div>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-[30%] flex-shrink-0 md:mr-[3rem]">
      <img src={moduloB} alt="modulo bluetooth" className="rounded-t-lg mt-10 ml-4  md:ml-[6rem]" />
      <div className="p-4">
        <h3 className="text-xl font-bold font-tinos mb-2 mt-14">Módulo Bluetooth - R$39,90</h3>
        <p className="text-gray-700 text-justify font-tinos">O módulo Bluetooth foi acoplado ao robô, permitindo a comunicação sem fio com o aplicativo, permitindo a troca de dados em tempo real.</p>
      </div>
    </div>
  </div>

  <button id="prevBtn" className="absolute left-[0rem] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
    &#10094;
  </button>
  <button id="nextBtn" className="absolute right-[0rem] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full md:mr-[3rem]">
    &#10095;
  </button>
</section>


      <section className='bg-gray-100 pt-[3rem] h-full md:h-[65%] 2xl:h-[57%] max-sm:h-[67%]'>
  <div className='pl-[5rem] pb-5'>
    <h2 className='font-tinos text-3xl md:text-6xl md:ml-0 ml-[-3rem]'>Contate-nos</h2>
    <p className='font-tinos text-azul font-bold text-base text-justify w-50% md:ml-0 ml-[-2.8rem] max-sm:w-[98%]'>
      Fale conosco em caso de dúvida, questionamentos, ou se apenas quiser nos dar uma dica de como melhorar.
    </p>
    <form className='mt-6'>
      <div className='mb-4'>
        <label className='block text-azul text-sm font-bold mb-2 md:ml-0 ml-[-2.8rem]' htmlFor='name'>
          Nome
        </label>
        <input
          className='md:ml-0 ml-[-2.8rem] md:w-[95%] shadow appearance-none border rounded w-full py-2 px-3 text-azul leading-tight focus:outline-none focus:shadow-outline'
          id='name'
          type='text'
          placeholder='Seu nome'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-azul text-sm font-bold mb-2 md:ml-0 ml-[-2.8rem]' htmlFor='email'>
          Email
        </label>
        <input
          className=' md:ml-0 ml-[-2.8rem] md:w-[95%] shadow appearance-none border rounded w-full py-2 px-3 text-azul leading-tight focus:outline-none focus:shadow-outline'
          id='email'
          type='email'
          placeholder='Seu email'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-azul text-sm font-bold mb-2 md:ml-0 ml-[-2.8rem]' htmlFor='message'>
          Mensagem
        </label>
        <textarea
          className='md:ml-0 ml-[-2.8rem] md:w-[95%] shadow appearance-none border rounded w-full py-2 px-3 text-azul leading-tight focus:outline-none focus:shadow-outline'
          id='message'
          rows='4'
          placeholder='Sua mensagem'
></textarea>
      </div>
      <div className='mb-4'>
        <button
          className='md:ml-0 ml-[-2.8rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'>
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
