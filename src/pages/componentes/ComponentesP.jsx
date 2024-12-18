import React, { useState } from 'react';
import sensorL from '../../assets/sensorL.svg';
import protoboard from '../../assets/protoboard.svg';
import jumpers from '../../assets/jumpers.svg';
import sensorS from '../../assets/sensorS.svg';
import arduino from '../../assets/arduino.svg';
import moduloB from '../../assets/moduloB.svg';
import lcd from '../../assets/lcd.svg';
import moduloS from '../../assets/moduloS.svg';
import servo from '../../assets/servo.svg';
import tela from '../../assets/tela.webp';
import gravador  from '../../assets/gravador.webp';
import presenca  from '../../assets/presença.png';
import pulso  from '../../assets/pulso.png';
import rtc  from '../../assets/rtc.jpg';

// Função que define o componente
const ComponentesP = () => {
  const cards = [
    { id: 1, img: sensorL, title: "Sensor de Luminosidade", price: "R$16,90", desc: "O Sensor de luminosidade foi utilizado para se fixar na carcaça do robô, podendo então, capitar a luz do ambiente." },
    { id: 2, img: protoboard, title: "Protoboard", price: "R$20,00", desc: "A protoboard foi utilizada para montar e testar o circuito eletrônico do robô, possibilitando a conexão dos componentes de forma prática." },
    { id: 3, img: jumpers, title: "Jumpers", price: "R$5,00", desc: "Os jumpers foram integrados ao robô, permitindo a conexão eficiente entre diferentes componentes eletrônicos e garantindo a comunicação entre os circuitos." },
    { id: 4, img: arduino, title: "Arduino Mega", price: "R$219,00", desc: "O Arduino Mega foi integrado ao robô, proporcionando maior capacidade de processamento e expandindo o número de pinos disponíveis para conectar diversos sensores e módulos." },
    { id: 5, img: lcd, title: "Display LCD", price: "R$21,90", desc: "O Display LCD é responsável por mostrar as horas, a data e indicar a temperatura exterior, bem como as medidas de batimento cardíaco e temperatura corporal." },
    { id: 6, img: moduloB, title: "Módulo Bluetooth", price: "R$42,90", desc: "O módulo Bluetooth foi integrado ao robô, permitindo a comunicação sem fio com o aplicativo, facilitando a troca de informações." },
    { id: 7, img: sensorS, title: "Sensor de Som", price: "R$8,90", desc: "O sensor de som foi integrado ao robô, permitindo captar variações acústicas no ambiente e reagir a diferentes níveis de ruído." },
    { id: 8, img: gravador, title: "Módulo Gravador de Voz", price: "R$30,90", desc: "O Módulo gravador de voz foi utilizado para tornar possível trazer a comunicação do responsável através do robô." },
    { id: 9, img: tela, title: "Tela Nextion 5 polegadas", price: "R$825,00", desc: "A tela é a parte principal do projeto e comporta em seu software as atividades que serão resposáveis pela desenvolvimento da criança." },
    { id: 10, img: presenca, title: "Sensor de Movimento Presença", price: "R$12,90", desc: "O módulo sensor de movimento foi integrado ao robô, permitindo detectar a presença de objetos ou pessoas no ambiente e reagir automaticamente a mudanças de movimento." },
    { id: 11, img: pulso, title: "Sensor Monitor de Pulso", price: "R$30,00", desc: "O sensor de batimento cardíaco foi integrado ao robô, permitindo monitorar a frequência cardíaca em tempo real." },
    { id: 12, img: rtc, title: "Real Time Clock", price: "R$28,00", desc: "O módulo RTC permite fornecer o tempo e a temperatura atualizados em tempo real." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = window.innerWidth >= 768 ? 4 : 1; // 4 para desktop, 1 para mobile

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow < cards.length ? prevIndex + itemsToShow : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow >= 0 ? prevIndex - itemsToShow : prevIndex
    );
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <>
      <section className="h-screen w-full">
        <div className="h-full bg-[url('https://i.imgur.com/t6vSe9p.png')] bg-no-repeat bg-cover bg-center z-10 w-full">
          <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
            <div className="text-white flex flex-col items-center justify-center h-full w-full text-center px-4">
              <h1 className="font-tinos text-5xl md:text-7xl mb-4 mt-[20vh] md:mt-[30vh]">BUDDY</h1>
              <p className="text-gray-400 font-fira text-sm md:text-base md:text-center md:mr-[4rem]">
                Descubra todos os componentes usados no nosso projeto e veja como cada peça foi fundamental para realização desse trabalho
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 mb-10">
        <div className="flex flex-col md:block w-full md:w-full pt-8 font-light text-2xl">
          <div className="titulo_da_segunda text-center md:text-left">
            <h2 className="m-0 font-tinos text-3xl md:text-6xl text-center">Componentes</h2>
            <div className="text-justify md:justify-start max-sm:w-[98%] items-center">
              <p className="m-0 font-tinos font-bold text-azul text-base md:text-lg text-center mb-8 max-sm:ml-[1rem]">
                Conheça os materiais que tornaram esse projeto possível
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" mb-10">
        <div className="relative flex items-center justify-center">
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-[5%] bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            >
              &lt;
            </button>
          )}

          <div className="flex flex-wrap justify-center">
            {visibleCards.map((card) => (
              <div key={card.id} className="bg-white p-6 shadow-lg rounded-2xl w-72 h-auto m-2 items-center justify-center">
              <div className="flex items-center justify-center">
                <img src={card.img} alt={card.title} className="w-32 h-32 object-contain mb-4" />
              </div>
              <h4 className="text-center text-lg font-semibold mb-2 font-tinos">
                {card.title} - {card.price}
              </h4>
              <p className="text-sm text-gray-600 text-center mb-4 text-justify font-tinos">
                {card.desc}
              </p>
            </div>
            
            ))}
          </div>

          {currentIndex + itemsToShow < cards.length && (
            <button
              onClick={nextSlide}
              className="absolute right-[5%] bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            >
              &gt;
            </button>
          )}
        </div>
      </section>

      <section className='bg-gray-100 pt-[3rem] h-full md:h-[65%] w-full 2xl:h-[57%] max-sm:h-[67%]'>
  <div className='pb-3'>
    <h2 className='font-tinos text-3xl md:text-6xl text-center '>Contate-nos</h2>
    <p className='font-tinos text-azul font-bold text-base text-center w-50% max-sm:w-[80%] max-sm:ml-[2.5rem] '>
      Fale conosco em caso de dúvida, questionamentos, ou se apenas quiser nos dar uma dica de como melhorar
    </p>
    <form className='mt-6 pl-[5rem]'>
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
