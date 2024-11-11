import React from 'react';
import k from '../../assets/Kau.png';
import instagram from '../../assets/instagram 3 (1).png';
import linkedin from '../../assets/linkedin 11 (1).png';
import em from '../../assets/o-email 11.png';
import fotomot from '../../assets/fotomot.png';
import fotmot2 from '../../assets/fotmot2.png';
import mel from '../../assets/mel.jpeg';


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
                <div className="w-full max-w-full px-4">
                    <p className="text-gray-400 font-fira text-sm md:text-base text-center ">
                        Saiba sobre nossos objetivos e motivações. Explore, conheça nossa equipe e conecte-se conosco
                    </p> 
                </div>
            </div>
        </div>
    </div>
</div>

            </section>

      <section className="py-8 h-full">
                <div className="flex flex-col md:block w-full md:w-full pt-8 font-light text-2xl ">
                    <div className="titulo_da_segunda text-center">
                        <h2 className="text-3xl md:text-6xl font-tinos text-center">Sobre Nós</h2>
                        <div className="text-justify md:justify-start">
                            <p className=" max-sm:ml-[2rem] font-tinos font-bold text-azul text-base max-sm:w-3/4 text-center">Saiba mais sobre nós e nossa missão de transformar ideias em experiências únicas</p>
                        </div>
                    </div> 
                  </div>
      </section>

      <section>
        <div className='flex justify-center text-center items-center mb-5 '>
            <p className='font-fira-sans font-normal text-base text-justify text-[20px] mt[4rem]	xl:max-w-7xl max-sm:mr-[1.4rem] max-sm:w-3/4 lg:w-3/4'>Trabalhando juntas para o sucesso do projeto Buddy, unindo habilidades e conhecimentos diversos para trazer soluções criativas
            e eficientes, e com muito comprometimento, fornecer a melhor experiência  para os usuários.</p><br />
            
          </div>

          <section>
  <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12">
    
    {/* Card Kauhany */}
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mb-6 w-80">
      <img className="h-80 w-full object-cover" src={k} alt="Kauhany" />
      <div className="p-4 text-center">
        <h4 className="font-bold text-lg mb-2">Kauhany Santos</h4>
        <p className="text-gray-600">18 anos</p>
        <p className="text-gray-600">Ensino Médio T.I.</p>
        <p className="text-gray-600 mb-4">UNASP-SP</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/kauhany_y/"><img className="w-6 h-6" src={instagram} alt="Instagram" /></a>
          <a href="https://www.linkedin.com/in/kauhany-santos-89b1762a0/"><img className="w-6 h-6" src={linkedin} alt="LinkedIn" /></a>
          <a href="kauhanyoliveira52@gmail.com"><img className="w-6 h-6" src={em} alt="Email" /></a>
        </div>
      </div>
    </div>

    {/* Card Melissa */}
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mb-6 w-80">
      <img className="h-80 w-full object-cover" src={mel} alt="Melissa" />
      <div className="p-4 text-center">
        <h4 className="font-bold text-lg mb-2">Melissa Reis</h4>
        <p className="text-gray-600">18 anos</p>
        <p className="text-gray-600">Ensino Médio T.I.</p>
        <p className="text-gray-600 mb-4">UNASP-SP</p>
        <div className="flex justify-center space-x-4">
          <img className="w-6 h-6" src={instagram} alt="Instagram" />
          <a href="https://www.linkedin.com/in/melissa-reis-1798a52b9/"><img className="w-6 h-6" src={linkedin} alt="LinkedIn" /></a>
          <img className="w-6 h-6" src={em} alt="Email" />
        </div>
      </div>
    </div>

  </div>
</section>

        
      </section>

      <section className="py-8 h-full">
                <div className="terceira_section" id='referencias'>
                    <h2 className='font-tinos font-light md:text-6xl  text-3xl  md:mt-[2rem] text-center'>O que nos motiva</h2>
                    <div className=''><p className='text-azul font-tinos font-bold text-base text-[20px] max-sm:w-3/4 max-sm:ml-10 text-center max-sm:mr-[1rem] '>Descubra o que nos motiva a criar soluções que fazem a diferença.</p>
                    </div>

                    <div className="lg:flex block items-center justify-center">
                      <div className="flex justify-center lg:w-6/12 w-full">
                        <p className="font-fira-sans font-normal text-base text-justify w-10/12">
                          As histórias e insights compartilhados despertaram nossa motivação e foram fundamentais para a decisão de iniciar este projeto. Elas ilustraram desafios e conquistas que ressoaram profundamente conosco, oferecendo uma nova perspectiva e fortalecendo nossa determinação. Essa influência nos impulsionou a buscar soluções inovadoras e a abraçar com entusiasmo as oportunidades à nossa frente.
                        </p>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row items-center justify-center lg:w-6/12 w-full ">
                        <img className="w-full lg:w-[45%] object-contain  " src={fotomot} alt="img" />
                        <img className="w-full lg:w-[45%] object-contain" src={fotmot2} alt="img" />
                      </div>
                    </div>



                </div>
            </section>

      <section className=''>
      <section className="py-8 ">
                <div className="flex flex-col md:block w-full md:w-full pt-8 pl-0 font-light text-2xl mt-[18rem] max-sm:mt-[-4rem]">
                    <div className="titulo_da_segunda text-center md:text-left ">
                        <h2 className="m-0 font-tinos md:text-6xl text-3xl md:mt-[-20rem] text-center ">Depoimentos</h2>
                        <div className=" text-justify md:justify-start ">
                            <p className="m-0 font-tinos font-bold text-base text-azul pl-0.5 justify-content text-center max-sm:w-[80%] max-sm:ml-8 ">Saiba mais sobre nós e nossa missão de transformar ideias em experiências únicas</p>
                        </div>
                    </div>
                  </div>
      </section>

      <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center align-items md:mt-[-14rem] max-lg:ml-[7rem] mb-[5rem]'>
    <div className='bg-white p-6  mx-4 mb-6 w-[82%] md:w-[32.5rem] max-sm:w-[115%] max-sm:ml-[-5.5rem] text-center shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl'>
      <p className='font-fira text-base md:text-lg leading-relaxed text-justify'>
        "O robô ajudou meu filho a entender melhor suas emoções. Ele agora consegue expressar o que sente com mais facilidade."
      </p>
      <p className='mt-4 font-medium text-sm md:text-base'>
        - João, pai de Lucas
      </p>
    </div>
    <div className='bg-white p-6 mx-4 mb-6 md:w-[35rem] text-center shadow-lg max-sm:w-[115%] max-sm:ml-[-5.5rem] w-[82%] rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl'>
      <p className='font-fira text-base md:text-lg leading-relaxed text-justify'>
        "Minha filha adora as atividades interativas do robô. Ela fica super engajada e sempre quer brincar mais."
      </p>
      <p className='mt-4 font-medium text-sm md:text-base'>
        - Maria, mãe de Ana
      </p>
    </div>
    <div className='bg-white p-6 mx-4 mb-6 w-[82%] md:w-[32rem] text-center max-sm:w-[115%] max-sm:ml-[-5.5rem] shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl '>
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

export default Sobre;
