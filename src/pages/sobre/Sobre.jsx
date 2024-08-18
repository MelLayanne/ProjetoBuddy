import React from 'react';
import k from '../../assets/Kau.png';
import instagram from '../../assets/instagram 3 (1).png';
import linkedin from '../../assets/linkedin 11 (1).png';
import em from '../../assets/o-email 11.png';

const Sobre = () => {
  return (
    <>
      <section className="h-screen w-full">
        <div className="h-full bg-[url('https://i.imgur.com/xGywgSj.png')] bg-no-repeat bg-cover bg-center z-10 w-full">
          <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
            <div className="text-white flex items-center justify-center h-full w-full text-center px-4">
              <div className="w-3/5 mx-auto pb-16 pt-80 max-w-full text-center md:w-9/10 md:pb-8">
                <div className="">
                  <div className="font-tinos font-normal text-7xl md:text-5xl">
                    <h1 className=' text-7xl pb-7 md:px-4'>Sobre nós</h1>
                  </div>
                  <div className="text-center">
                    <p className='text-gray-400 text-justify font-fira'>Saiba sobre nossos objetivos e motivações. Explore, conheça nossa equipe e conecte-se conosco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
                <div className="flex flex-col md:block w-full md:w-full pt-8 pl-0 font-light text-2xl">
                    <div className="titulo_da_segunda text-center md:text-left ml-[100px]">
                        <h2 className="m-0 font-tinos text-6xl">Sobre Nós</h2>
                        <div className="flex justify-center md:justify-start">
                            <p className="m-0 font-tinos font-bold text-azul pl-0.5 ">Saiba mais sobre nós e nossa missão de transformar ideias em experiências únicas</p>
                            <div className="ml-4 bg-azul h-4 w-36 mt-3 ">
                                <hr className="text-azul" />
                            </div>
                        </div>
                    </div>
                  </div>
      </section>
      <section>
        <div>
            <p className='font-fira-sans font-normal text-base text-justify '>Trabalhando juntas para o sucesso do projeto Buddy, unindo habilidades e conhecimentos diversos para trazer soluções criativas 
            e eficientes, e com muito comprometimento, fornecer a melhor experiência  para os usuários.</p><br />
          </div>
      </section>
      <section>
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
        
      </section>

      <section className="py-8 h-full">
                
                    <h2 className='font-tinos ml-[50px] font-light text-6xl'>O que nos motiva</h2>
                    <div className='flex '><p className='text-azul font-tinos font-bold ml-[50px] text-[20px]'>Descubra o que nos motiva a criar soluções que fazem a diferença.</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center pl-[18px]">
                        <div className="pt-[2rem] flex w-full md:w-[700px]">
                            <div className="mb-auto text-justify mt-auto w-[40vh] md:w-full">
                                <p className='font-fira-sans font-normal text-base text-justify'>As histórias e insights compartilhados despertaram nossa motivação e foram fundamentais para a decisão de iniciar este projeto. Elas ilustraram desafios e conquistas que ressoaram profundamente conosco, oferecendo uma nova perspectiva e fortalecendo nossa determinação. Essa influência nos impulsionou a buscar soluções inovadoras e a abraçar com entusiasmo as oportunidades à nossa frente.</p><br />
                            </div>
                        </div>
                        
                    </div>
                
      </section>

      <section className='h-full pb-[3rem]'>
                <div className='bg-white h-full pb-[3rem] pt-9 ml-[59px]'>
                    <div className='pl-[3rem]'>
                        <h2 className='font-tinos text-6xl'>Depoimentos</h2>
                        <p className="m-0 font-tinos font-bold text-azul pl-0.5 ">Leia os depoimentos de quem já vivenciou e aprovou a nossa experiência</p>
                            <div className="ml-4 bg-azul h-4 w-36 mt-3 ">
                                <hr className="text-azul" />
                            </div>
                </div>
                    <div className='flex'>
                        <div className='bg-white pl-[3rem] mt-[3rem] ml-[59px] mr-[0.5rem] w-[40rem] text-center p-9  shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl'>
                            <p className='font-fira text-justify'>"O robô ajudou meu filho a entender melhor suas emoções. Ele agora consegue expressar o que sente com mais facilidade."
                            </p>
                            <p>- João, pai de Lucas</p>
                        </div>
                        <div className='bg-white pl-[3rem] mt-[3rem] ml-[10rem] mr-[4rem] w-[40rem] text-center p-9 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl'>
                            <p className='font-fira text-justify'>"Minha filha adora as atividades interativas do robô. Ela fica super engajada e sempre quer brincar mais."
                            </p>
                            <p>- Maria, mãe de Ana</p>
                        </div></div>
                    <div className='flex'>
                        <div className='bg-white pl-[3rem] mt-[3rem] ml-[59px] w-[40rem] text-center p-9 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl'>
                            <p className='font-fira text-justify'>"Os relatórios detalhados me ajudam a acompanhar o progresso do meu filho e saber onde ele precisa de mais ajuda."
                            </p>
                            <p>- Pedro, pai de Gabriel</p>
                        </div>
                       </div></div>
            </section>
            
      

      <section className='bg-gray-100'>
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

export default Sobre;
