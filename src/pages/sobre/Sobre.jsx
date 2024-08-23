import React from 'react';
import k from '../../assets/Kau.png';
import instagram from '../../assets/instagram 3 (1).png';
import linkedin from '../../assets/linkedin 11 (1).png';
import em from '../../assets/o-email 11.png';
import fotomot from '../../assets/fotomot.png';
import fotmot2 from '../../assets/fotmot2.png';


const Sobre = () => { 
  return (
    <>
      <section className="h-screen w-full">
            <div className=" bg-[url('https://i.imgur.com/xGywgSj.png')] bg-no-repeat object-cover bg-cover bg-center z-10 h-full w-full">
    <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
        <div className="text-white flex flex-col items-center justify-center h-full w-full text-center px-4">
            <div className="w-full max-w-full px-4">
                <h1 className="font-tinos text-5xl md:text-7xl mb-4 mt-[20vh] md:mt-[30vh]">
                  BUDDY
                </h1>
                <div className="w-full max-w-full px-4 md:ml-[35rem]">
                    <p className="text-gray-400  font-fira text-sm md:text-base text-justify text-center">
                        Saiba sobre nossos objetivos e motivações. Explore, conheça nossa equipe e conecte-se conosco
                    </p> 
                </div>
            </div>
        </div>
    </div>
</div>

            </section>

      <section className="py-8 h-full">
                <div className="flex flex-col md:block w-full md:w-full pt-8 pl-0 font-light text-2xl ">
                    <div className="titulo_da_segunda text-center md:text-left ml-[100px]">
                        <h2 className="m-0 font-tinos md:text-6xl text-3xl md:ml-[-2.7rem] max-sm:ml-[-14rem]">Sobre Nós</h2>
                        <div className="flex text-justify md:justify-start">
                            <p className="m-0 font-tinos font-bold text-azul text-base pl-0.5 md:ml-[-2.7rem] max-sm:ml-[-4rem] max-sm:w-[115%]">Saiba mais sobre nós e nossa missão de transformar ideias em experiências únicas</p>
                        </div>
                    </div> 
                  </div>
      </section>

      <section>
        <div>
            <p className='font-fira-sans font-normal text-base text-justify text-[20px] mt[4rem]	xl:max-w-7xl md:ml-[4rem] ml-[6rem] max-sm:ml-[2.28rem]  max-sm:mr-[1.4rem]'>Trabalhando juntas para o sucesso do projeto Buddy, unindo habilidades e conhecimentos diversos para trazer soluções criativas
            e eficientes, e com muito comprometimento, fornecer a melhor experiência  para os usuários.</p><br />
            
          </div>

  <section>
  <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="flex flex-col md:ml-[4rem] ml-[6rem] max-sm:ml-[2.7rem] max-sm:w-[80%] items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mb-6 h-48 md:w-[45rem] w-[72%] sm:w-[90%]">
      <div className="flex justify-center w-full">
        <img className="h-48 object-cover rounded-lg mr-[15rem] w-1/3  absolute  transform md:translate-x-[-8rem] translate-x-1/5 mobile:left-1/4 mobile:transform-none max-sm:ml-[4rem] " src={k} alt="Kauhany" />
      </div>
      <div className="p-4 text-left max-sm:ml-[4rem]">
        <h4 className="font-bold text-lg mb-2">Kauhany Santos</h4>
        <p className="text-gray-600">17 anos</p>
        <p className="text-gray-600">Ensino médio T.I.</p>
        <p className="text-gray-600 mb-4">UNASP-SP</p>
        <div className="flex justify-center space-x-4 ml-[-1.5rem]">
          <img className="w-6 h-6" src={instagram} alt="Instagram" />
          <img className="w-6 h-6" src={linkedin} alt="LinkedIn" />
          <img className="w-6 h-6" src={em} alt="Email" />
        </div>
      </div>
    </div>

    
    <div className=" flex flex-col sm:w-3/4 ml-[6.3rem] items-center bg-white shadow-lg max-sm:ml-[2.7rem] max-sm:w-[80%] rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mb-6  h-48 md:w-[45rem] w-[72%]">
      <div className=" relative flex justify-center w-full ">
        <img className="h-48 object-cover rounded-lg mr-[15rem] w-1/3  absolute  transform md:translate-x-[-8rem] translate-x-1/5 mobile:left-1/4 mobile:transform-none  max-sm:ml-[4rem]" src="https://media.licdn.com/dms/image/v2/D4D03AQHr9eKiQT65ZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710469014338?e=1728518400&v=beta&t=_l0PLQwHIctnf52_iguHfKZTXGJI78lFteb4G1wYx5E" alt="Kauhanny" />
      </div>
      <div className="p-4 text-left  max-sm:ml-[4rem] ">
        <h4 className="font-bold text-lg mb-2">Melissa Layanne</h4>
        <p className="text-gray-600">18 anos</p>
        <p className="text-gray-600">Ensino médio T.I.</p>
        <p className="text-gray-600 mb-4">UNASP-SP</p>
        <div className="flex justify-center space-x-4 ml-[-1.5rem]">
          <img className="w-6 h-6" src={instagram} alt="Instagram" />
          <img className="w-6 h-6" src={linkedin} alt="LinkedIn" />
          <img className="w-6 h-6" src={em} alt="Email" />
          </div>
         </div>
       </div>
      </div>
     </section>
        
      </section>

      <section className="py-8 h-full">
                <div className="terceira_section" id='referencias'>
                    <h2 className='font-tinos md:ml-[4rem] ml-[6rem] font-light md:text-6xl  text-3xl  md:mt-[2rem] max-sm:ml-[2.3rem]'>O que nos motiva</h2>
                    <div className='flex '><p className='text-azul font-tinos font-bold text-base ml-[6rem] text-[20px] max-sm:ml-[2.3rem] md:ml-[4rem] max-sm:mr-[1rem] '>Descubra o que nos motiva a criar soluções que fazem a diferença.</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center pl-[18px]">
                        <div className="pt-[2rem] flex w-full md:w-[700px]">
                            <div className="mb-auto text-justify mt-auto w-[40vh] md:w-full">
                                <p className='font-fira-sans font-normal text-base text-justify md:ml-[-32.5rem] md:mt-[-0.8rem] md:mr-[32rem] max-sm:ml-[1.2rem] max-sm:mr-[1.7rem] max-sm:w-[15.5rem] md:ml-[-34rem] max-md:w-[40rem]'>As histórias e insights compartilhados despertaram nossa motivação e foram fundamentais para a decisão de iniciar este projeto. Elas ilustraram desafios e conquistas que ressoaram profundamente conosco, oferecendo uma nova perspectiva e fortalecendo nossa determinação. Essa influência nos impulsionou a buscar soluções inovadoras e a abraçar com entusiasmo as oportunidades à nossa frente.</p><br />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 pr-[3%] md:mt-[-20rem] md:gap-14 max-sm:ml-[-1rem] ">
                          <img
                            src={fotomot}
                            alt="img"
                            className="md:w-[20%] w-[100%] md:ml-[65rem] md:mr-[-7rem] md:mt-0 max-sm:mt-[-3rem]"
                            />
                           <img
                          src={fotmot2}
                          alt="img"
                          className="md:w-[20%] w-[100%] md:ml-0 md:mt-0 max-sm:mt-[-3rem]"
                          />
                          </div>

                    </div>
                </div>
            </section>

      <section className=''>
      <section className="py-8 ">
                <div className="flex flex-col md:block w-full md:w-full pt-8 pl-0 font-light text-2xl mt-[18rem] max-sm:mt-[-4rem]">
                    <div className="titulo_da_segunda text-center md:text-left ml-[100px] ">
                        <h2 className="m-0 font-tinos md:text-6xl text-3xl md:mt-[-20rem] max-md:ml-[-16rem] md:ml-[-2rem] max-sm:ml-[-12rem] ">Depoimentos</h2>
                        <div className="flex text-justify md:justify-start ">
                            <p className="m-0 font-tinos font-bold text-base text-azul pl-0.5justify-content md:ml-[-2rem] max-sm:ml-[-4rem] max-sm:w-[113%] ">Saiba mais sobre nós e nossa missão de transformar ideias em experiências únicas</p>
                        </div>
                    </div>
                  </div>
      </section>

      <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center md:mt-[-14rem] max-lg:ml-[7rem] mb-[5rem]'>
    <div className='bg-white p-6  mx-4 mb-6 w-[82%] md:w-[32.5rem] max-sm:w-[125%] max-sm:ml-[-5rem] text-center shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl'>
      <p className='font-fira text-base md:text-lg leading-relaxed text-justify'>
        "O robô ajudou meu filho a entender melhor suas emoções. Ele agora consegue expressar o que sente com mais facilidade."
      </p>
      <p className='mt-4 font-medium text-sm md:text-base'>
        - João, pai de Lucas
      </p>
    </div>
    <div className='bg-white p-6 mx-4 mb-6 md:w-[35rem] text-center shadow-lg max-sm:w-[125%] max-sm:ml-[-5rem] w-[82%] rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl'>
      <p className='font-fira text-base md:text-lg leading-relaxed text-justify'>
        "Minha filha adora as atividades interativas do robô. Ela fica super engajada e sempre quer brincar mais."
      </p>
      <p className='mt-4 font-medium text-sm md:text-base'>
        - Maria, mãe de Ana
      </p>
    </div>
    <div className='bg-white p-6 mx-4 mb-6 w-[82%] md:w-[32rem] text-center max-sm:w-[125%] max-sm:ml-[-5rem] shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl '>
      <p className='font-fira text-base md:text-lg leading-relaxed text-justify'>
        "Os relatórios detalhados me ajudam a acompanhar o progresso do meu filho e saber onde ele precisa de mais ajuda."
      </p>
      <p className='mt-4 font-medium text-sm md:text-base'>
        - Pedro, pai de Gabriel
      </p>
    </div>
</div>

  </section>
      

  <section className='bg-gray-100 pt-[3rem] h-full md:h-[65%] w-full 2xl:h-[57%] max-sm:h-[67%]'>
  <div className='pl-[5rem] pb-3'>
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

export default Sobre;
