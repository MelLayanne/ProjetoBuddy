import React, { useState, useEffect } from 'react';
import sensorL from '../../assets/sensorL.svg';
import protoboard from '../../assets/protoboard.svg';
import jumpers from '../../assets/jumpers.svg';
import sensorS from '../../assets/sensorS.svg';
import arduino from '../../assets/arduino.svg';
import moduloB from '../../assets/moduloB.svg';
import lcd from '../../assets/lcd.svg';
import moduloS from '../../assets/moduloS.svg';
import servo from '../../assets/servo.svg';

const ComponentesP = () => {
  const components = [
    { img: sensorL, title: 'Sensor de Luminosidade', price: 'R$16,90', description: 'O Sensor de luminosidade foi utilizado para se fixar na carcaça do robô, podendo então captar a luz do ambiente.' },
    { img: protoboard, title: 'Protoboard', price: 'R$9,40', description: 'A protoboard foi utilizada para montar e testar o circuito eletrônico do robô, possibilitando a conexão dos componentes de forma prática.' },
    { img: sensorS, title: 'Sensor de Som', price: 'R$8,90', description: 'O sensor de som foi integrado ao robô, permitindo captar variações acústicas no ambiente e reagir a diferentes níveis de ruído.' },
    { img: lcd, title: 'Display LCD', price: 'R$21,90', description: 'O Display LCD é responsável por mostrar as horas e indicar a temperatura exterior.' },
    { img: moduloS, title: 'Módulo Gravador de Som', price: 'R$30,90', description: 'O Módulo gravador de voz foi utilizado para tornar possível a comunicação do responsável através do robô.' },
    { img: jumpers, title: 'Jumpers', price: 'R$16,90', description: 'Os jumpers foram utilizados para estabelecer conexões temporárias entre os componentes na protoboard.' },
    { img: arduino, title: 'Arduíno Mega', price: 'R$219,20', description: 'O Arduino Mega foi utilizado como a base do controle do robô, oferecendo uma ampla capacidade de processamento e múltiplas portas de entrada e saída.' },
    { img: moduloB, title: 'Módulo Bluetooth', price: 'R$39,90', description: 'O módulo Bluetooth foi acoplado ao robô, permitindo a comunicação sem fio com o aplicativo, possibilitando troca de dados em tempo real.' },
    { img: servo, title: 'Servo Motor', price: 'R$28,02', description: 'O Servo motor trouxe mobilidade aos braços e à base, tornando o robô mais dinâmico.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= components.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const items = window.innerWidth < 768 ? 1 : 3;
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            <h2 className="m-0 font-tinos text-3xl max-sm:ml-[-9rem] md:text-6xl">Componentes</h2>
            <div className="flex text-justify md:justify-start max-sm:w-[70%] max-sm:ml-[2.5rem]">
              <p className="m-0 font-tinos font-bold text-azul text-base md:text-lg max-sm:ml-[-0.5rem]">
                Conheça os materiais que tornaram esse projeto possível
              </p>
              
            </div>
          </div>
        </div>
      </section>


      <section className="py-8 w-full flex flex-col items-center">
        <div className="relative w-[80%] max-w-full overflow-hidden">
          <div
            id="carousel"
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
          >
            {components.map((component, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-[31%] flex-shrink-0 flex flex-col items-center justify-between md:mr-[3rem] h-[450px]">
                <img src={component.img} alt={component.title} className="rounded-t-lg mx-auto max-h-[150px] object-contain" />
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-bold mt-16 font-tinos">{component.title} - {component.price}</h3>
                  <p className="text-gray-700 text-justify font-tinos ">{component.description}</p>
                </div>
              </div>
            ))}
          </div>

          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            >
              &#10094;
            </button>
          )}
          {currentIndex + itemsPerSlide < components.length && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            >
              &#10095;
            </button>
          )}
        </div>
      </section>
      <section className='bg-gray-100 pt-[3rem] h-full md:h-[65%] 2xl:h-[57%] max-sm:h-[67%]'>
  <div className='pl-[5rem] pb-5'>
    <h2 className='font-tinos text-3xl md:text-6xl md:ml-0 ml-[-3rem]'>Contate-nos</h2>
    <p className='font-tinos text-azul font-bold text-base text-justify w-50% md:ml-0 ml-[-2.8rem] max-sm:w-[98%]'>
      Fale conosco em caso de dúvida, questionamentos, ou se apenas quiser nos dar uma dica de como melhorar
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
