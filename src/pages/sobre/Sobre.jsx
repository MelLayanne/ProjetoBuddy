import React from 'react';
import k from '../../assets/Kau.png';
import instagram from '../../assets/instagram 3 (1).png';
import linkedin from '../../assets/linkedin 11 (1).png';
import em from '../../assets/o-email 11.png';

const Sobre = () => {
  return (
    <>
      <section className="h-screen w-full">
        <div className="h-full bg-[url('https://th.bing.com/th/id/R.2045d90089182341751269c275389391?rik=f78vWk9xmb5Gzg&pid=ImgRaw&r=0')] bg-no-repeat bg-cover bg-center z-10 w-full">
          <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
            <div className="text-white flex items-center justify-center h-full w-full text-center px-4">
              <div className="w-3/5 mx-auto pb-16 pt-80 max-w-full text-center md:w-9/10 md:pb-8">
                <div className="">
                  <div className="font-tinos font-normal text-7xl md:text-5xl">
                    <h1 className=' text-7xl pb-7 md:px-4'>Sobre nós</h1>
                  </div>
                  <div className="text-center">
                    <p className='text-gray-400 text-justify font-fira'>Veja todas as funções do nosso TCC aqui no site. Pesquise, interaja e entre em contato conosco.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50" id="sobre">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-tinos text-center mb-8">Sobre Nós</h2>
          <p className="text-gray-700 text-lg text-center mb-12">
            Nós somos uma equipe dedicada a criar soluções inovadoras e inclusivas que visam melhorar a vida de crianças com Transtorno do Espectro Autista (TEA). Nosso foco é no desenvolvimento de tecnologia assistiva que facilite a comunicação, o aprendizado e a interação social.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mb-6">
              <div className="flex justify-center w-full">
                <img className="h-48 object-cover" src={k} alt="Kauhanny" />
              </div>
              <div className="p-4 text-left">
                <h4 className="font-bold text-lg mb-2">Kauhanny Santos</h4>
                <p className="text-gray-600">17 anos</p>
                <p className="text-gray-600">Ensino médio T.I.</p>
                <p className="text-gray-600 mb-4">UNASP-SP</p>
                <div className="flex justify-center space-x-4">
                  <img className="w-6 h-6" src={instagram} alt="Instagram" />
                  <img className="w-6 h-6" src={linkedin} alt="LinkedIn" />
                  <img className="w-6 h-6" src={em} alt="Email" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mb-6">
              <div className="flex justify-center w-full">
                <img className="h-48 object-cover" src="https://media.licdn.com/dms/image/v2/D4D03AQHr9eKiQT65ZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710469014338?e=1728518400&v=beta&t=_l0PLQwHIctnf52_iguHfKZTXGJI78lFteb4G1wYx5E" alt="Kauhanny" />
              </div>
              <div className="p-4 text-left">
                <h4 className="font-bold text-lg mb-2">Kauhanny Santos</h4>
                <p className="text-gray-600">17 anos</p>
                <p className="text-gray-600">Ensino médio T.I.</p>
                <p className="text-gray-600 mb-4">UNASP-SP</p>
                <div className="flex justify-center space-x-4">
                  <img className="w-6 h-6" src={instagram} alt="Instagram" />
                  <img className="w-6 h-6" src={linkedin} alt="LinkedIn" />
                  <img className="w-6 h-6" src={em} alt="Email" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
