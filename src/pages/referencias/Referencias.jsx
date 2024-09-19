import React from 'react';
import corda from '../../assets/corda 1.png';

export default function CompletePage() {
    return (
        <>
       
            
       <section className="h-screen w-full ">
            <div className="h-full bg-[url('https://i.imgur.com/QTJkkpi.png')] bg-no-repeat bg-cover bg-center z-10 w-full">
    <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
        <div className="text-white flex flex-col items-center justify-center h-full w-full text-center px-4">
            <div className="w-full max-w-full px-4">
                <h1 className="font-tinos text-5xl md:text-7xl mb-4 mt-[20vh] md:mt-[30vh]">
                    BUDDY
                </h1>
                <div className="w-full max-w-full px-4">
                    <p className="text-gray-400 text-justify font-fira text-sm md:text-base md:ml-[1.5rem] md:mr-[4rem]">
                        Robô que auxilia responsáveis no desenvolvimento da fala, interação social e reconhecimento de emoções de crianças autistas de nível 2 entre 5 e 10 anos de idade. Possui integração com App, o que facilita a devolução de relatórios que analisam a evolução do autista
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

            </section>
            <section className="py-8 h-full">
                <div className="terceira_section" id='referencias'>
                    <h2 className='font-tinos md:ml-[4rem] ml-[6rem] font-light md:text-6xl max-sm:ml-[2rem] text-3xl md:mt-[2rem] '>Referências</h2>
                    <div className='flex '><p className='text-azul font-tinos font-bold ml-[6rem] text-base max-sm:ml-[2rem] text-[20px] md:ml-[4rem] max-sm:w-[75%] text-justify'>Confira as bases ciêntificas que fundamentaram o desenvolvimento deste projeto</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center pl-[18px]">
                        <div className="pt-[2rem] flex w-full md:w-[700px]">
                            <div className="mb-auto text-justify mt-auto w-[40vh] md:w-full">
                                <p className='font-fira-sans font-normal text-base text-justify md:ml-[-11rem] md:mt-[-8rem] max-sm:ml-[1rem] max-sm:w-[19rem]'>A ciência comprova a importância do desenvolvimento de robôs personalizados que auxiliam na terapia e na educação de crianças entre 5 e 10 anos e que se encaixam no nível 1 e 2 do Transtorno do Espectro Autista (TEA).</p><br />
                                <p className='font-fira-sans font-normal text-base text-justify md:ml-[-11rem] max-sm:ml-[1rem] max-sm:w-[19rem]'>Nesse sentido, pontuam-se maneiras de estimular a atenção, habilidades de comunicação, interação e aprendizado das crianças autistas através de animações que simulavam expressões humanas de forma simplificada na tela dos robôs, já que a falta de emoções nesses dispositivos facilitavam o interesse ao interagir com eles.</p><br />
                                <p className='font-fira-sans font-normal text-base text-justify md:ml-[-11rem] max-sm:ml-[1rem] max-sm:w-[19rem]'>Por consequência, há uma acentuada melhora na coordenação motora, comunicação e interação social. Pode-se comprovar então, que a ciência oferece embasamento teórico e prático para aplicação de robôs no tratamento terapêutico.</p>
                            </div>
                        </div>
                        <div className="pr-[3%] md:mt-[-2rem] max-sm:mt-[3rem]" >
                            <img src={corda} alt="Corda" className='w-[100%] md:ml-[10rem] max-sm:w-[22rem] max-sm:ml-[-1.5rem] md:mt-[-2rem]' />
                            <div className='flex ml-[1rem]'><h3 className='pl-11 md:ml-[10rem] max-sm:ml-[-3.3rem] text-justify max-sm:w-[91%] max-sm:text-sm'>Artigos Trabalhados:</h3>
                                <div><a className='text-azul w-[30px] md:pl-11  font-fira max-sm:text-sm  max-sm:w-[50] max-sm:ml-[-6rem]' href="">Tratamento Terapêutico</a><br /> <a className=' max-sm:text-sm text-azul w-[30px] font-fira md:p-11 md:ml-[0.2rem] max-sm:ml-[-6rem]' href="">Robótica na educação</a></div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-gray-100 pt-[3rem] h-full md:h-[65%] 2xl:h-[57%] max-sm:h-[67%]'>
  <div className='pl-[5rem] pb-8'>
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
}
