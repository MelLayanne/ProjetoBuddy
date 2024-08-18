import React from 'react';
import corda from '../../assets/corda 1.png'
export default function CompletePage() {
    return (
        <>
       
            
            <section className="h-screen w-full">
                <div className="h-full bg-[url('https://i.imgur.com/MRvKKUX.png')] bg-no-repeat bg-cover bg-center z-10 w-full">
                    <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
                        <div className="text-white flex items-center justify-center h-full w-full text-center px-4">
                            <div className="w-3/5 mx-auto pb-16 pt-80 max-w-full text-center md:w-9/10 md:pb-8">
                                <div className="">
                                    <div className="font-tinos font-normal text-7xl md:text-5xl">
                                        <h1 className=' text-7xl pb-7 md:px-4'>Referências</h1>
                                    </div>
                                    <div className="text-center">
                                        <p className='text-gray-400  text-justify font-fira'>Explore a nossa base ciêntífica aqui. Consulte, aprofunde-se  e fique por dentro.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 h-full">
                <div className="terceira_section" id='referencias'>
                    <h2 className='font-tinos ml-[50px] font-light text-6xl'>Referências</h2>
                    <div className='flex '><p className='text-azul font-tinos font-bold ml-[50px] text-[20px]'>Confira as bases ciêntificas que fundamentaram o desenvolvimento deste projeto</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center pl-[18px]">
                        <div className="pt-[2rem] flex w-full md:w-[700px]">
                            <hr className='h-[370px] w-[2rem] bg-[rgb(129,186,239)] border-none mr-8' />
                            <div className="mb-auto text-justify mt-auto w-[40vh] md:w-full">
                                <p className='font-fira-sans font-normal text-base text-justify'>A ciência comprova a importância do desenvolvimento de robôs personalizados que auxiliam na terapia e na educação de crianças entre 5 e 10 anos e que se encaixam no nível 1 e 2 do Transtorno do Espectro Autista (TEA).</p><br />
                                <p className='font-fira-sans font-normal text-base text-justify'>Nesse sentido, pontuam-se maneiras de estimular a atenção, habilidades de comunicação, interação e aprendizado das crianças autistas através de animações que simulavam expressões humanas de forma simplificada na tela dos robôs, já que a falta de emoções nesses dispositivos facilitavam o interesse ao interagir com eles.</p><br />
                                <p className='font-fira-sans font-normal text-base text-justify'>Por consequência, há uma acentuada melhora na coordenação motora, comunicação e interação social. Pode-se comprovar então, que a ciência oferece embasamento teórico e prático para aplicação de robôs no tratamento terapêutico.</p>
                            </div>
                        </div>
                        <div className="pr-[3%]" >
                            <img src={corda} alt="Corda" className='w-[80vh]' />
                            <div className='flex'><h3 className='pl-11'>Artigos Trabalhados</h3>
                                <div><a className='text-azul w-[30px] md:pl-11' href="">Tratamento Terapêutico</a><br /> <a className='text-azul w-[30px] md:p-11' href="">Robótica na educação</a></div></div>
                        </div>
                    </div>
                </div>
            </section>

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
}
