import React from 'react';
import imgTemporarea from '../../assets/imgTemporarea.svg';
import Historias from '../../assets/Sílabas.png';
import home from '../../assets/TelaHome.png';
import emocoes from '../../assets/TelaEmocoes.png';
import numeros from '../../assets/numeros.png';




export default function CompletePage() { 
    return (
        <>
        <section className="h-screen w-full ">
        <div className=" bg-[url('https://i.imgur.com/MRvKKUX.png')] bg-no-repeat object-cover bg-cover bg-center z-10 h-full w-full">
   <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
    <div className="text-white flex flex-col items-center justify-center h-full w-full text-center px-4">
        <div className="w-full max-w-full px-4">
            <h1 className="font-tinos text-5xl md:text-7xl mb-4 mt-[20vh] md:mt-[30vh]">
              BUDDY
            </h1>
            <div className="w-full max-w-full px-4">
                <p className="text-gray-400 font-fira text-sm md:text-base text-center ">
                Veja todas as funções do nosso TCC aqui no site. Pesquise, interaja e entre em contato conosco
                </p> 
            </div>
        </div>
    </div>
</div>
</div>
</section>



<section className="py-8 px-4">
    <div className="flex flex-col w-full pt-8 font-light text-xl">
        <div className="mb-10">
            <h2 className="text-3xl md:text-6xl font-tinos text-center">Funções</h2>
            <div className="text-justify md:justify-start">
                <p className="m-0 font-tinos font-bold text-azul text-base text-center">Descubra as funcionalidades que revelam os detalhes que moldam essa experiência </p>
            </div>
        </div>

        <div className="pt-8 font-tinos font-light text-xl flex flex-col md:flex-row md:flex-wrap mt-12 justify-center md:justify-evenly mt-[-0.5rem]">
            <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[40rem] mb-8">
                <img src="https://i.ibb.co/0Xx4ktf/image-8.png" alt="" className="w-48 md:w-60 mt-1 mx-auto" />
                <div className="mt-4 md:mt-0 text-center md:text-left">
                    <h3 className="text-azul font-bold text-lg md:text-xl">Reconhecimento de emoções</h3>
                    <div className="w-[90%] md:w-80 mx-auto flex flex-col bg-gray-200 p-3 md:p-4 mt-4 p-8">
                        <p className="font-fira-sans font-normal text-sm md:text-base text-justify">
                            O Buddy utiliza imagens e animações para ajudar a criança a reconhecer
                            expressões faciais, como a alegria, tristeza, frustração e surpresa. Essa
                            capacidade permite que a criança consiga discernir emoções.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[40rem] mb-8">
                <img src="https://i.ibb.co/SVRNz6b/image-10.png" alt="" className="w-48 md:w-60 mt-1 mx-auto" />
                <div className="mt-4 md:mt-0 text-center md:text-left">
                    <h3 className="text-azul font-bold text-lg md:text-xl">Atividades interativas</h3>
                    <div className="w-[90%] md:w-80 mx-auto flex flex-col bg-gray-200 p-3 md:p-4 mt-4 p-8">
                        <p className="font-fira-sans font-normal text-sm md:text-base text-justify">
                            O robô oferece uma variedade de atividades interativas projetadas para
                            estimular o desenvolvimento cognitivo e social das crianças, como: jogos
                            educativos e histórias interativas que ajudam a melhorar habilidades de
                            comunicação e interação social de maneira divertida.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[40rem] mb-8">
                <img src="https://i.ibb.co/ZdZ0sDr/image-9.png" alt="" className="w-48 md:w-60 mt-1 mx-auto" />
                <div className="mt-4 md:mt-0 text-center md:text-left">
                    <h3 className="text-azul font-bold text-lg md:text-xl">Gravação de mensagens</h3>
                    <div className="w-[90%] md:w-80 mx-auto flex flex-col bg-gray-200 p-3 md:p-4 mt-4 p-8">
                        <p className="font-fira-sans font-normal text-sm md:text-base text-justify">
                            A interface do robô permite que os responsáveis gravem mensagens para os
                            seus filhos ouvirem durante o dia e se sentirem mais próximos dos pais
                            mesmo que estejam longe.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[40rem]">
                <img src="https://i.ibb.co/7RBqsSC/image-11.png" alt="" className="w-48 md:w-60 mt-1 mx-auto" />
                <div className="mt-4 md:mt-0 text-center md:text-left">
                    <h3 className="text-azul font-bold text-lg md:text-xl">Monitoramento e Relatórios</h3>
                    <div className="w-[90%] md:w-80 mx-auto flex flex-col bg-gray-200 p-3 md:p-4 mt-4 p-8">
                        <p className="font-fira-sans font-normal text-sm md:text-base text-justify">
                        Com o Buddy, os pais têm acesso a relatórios detalhados sobre o progresso dos seus filhos mensalmente. O robô monitora e registra interações e atividades, fornecendo insights valiosos sobre áreas de melhoria e avanço.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section className='pb-[1rem] bg-gray-100 pt-[1rem] h-full '>
    <div className='bg-gray-100 h-full pb-[3rem] pt-9 mx-4 md:mx-[72px]'>
        <div className=''>
            <h2 className='text-3xl md:text-6xl font-tinos text-center  '>Benefícios</h2>
            <p className='text-azul text-lg md:text-base font-tinos font-bold text-center'>Conheça os benefícios que tornam essa experiência ainda mais significativa</p>
        </div>
        <div className='flex gap-10 ml-12 mt-8 max-sm:block max-sm:ml-1'>
            <div className='bg-white p-5 md:p-9 w-[48%] text-center max-sm:w-[96%] max-sm:mb-7 itemns-center'>
                <h3 className='font-tinos text-azul font-bold text-lg md:text-xl'>Educação Personalizada</h3>
                <p className='font-fira text-justify text-sm md:text-base'>Cada criança aprende em seu próprio ritmo. Nosso robô adapta as atividades de acordo com as necessidades individuais de cada uma.</p>
            </div>
            <div className='bg-white p-5 md:p-9 w-[48%] text-center max-sm:w-[96%] max-sm:mb-7  itemns-center'>
                <h3 className='font-tinos text-azul font-bold text-lg md:text-xl'>Segurança e Conforto</h3>
                <p className='font-fira text-justify text-sm md:text-base'>Nossa tecnologia garante que as interações sejam seguras e adequadas para todas as idades, promovendo um ambiente de conforto para as crianças.</p>
            </div>
        </div>
        <div className='flex gap-10 mt-10 ml-12 max-sm:block max-sm:ml-1'>
            <div className='bg-white p-5 md:p-9 w-[48%] text-center max-sm:w-[96%] max-sm:mb-7 itemns-center'>
                <h3 className='font-tinos text-azul font-bold text-lg md:text-xl'>Interatividade Avançada</h3>
                <p className='font-fira text-justify text-sm md:text-base'>Através de jogos e atividades, o robô melhora a comunicação, a criatividade e as habilidades cognitivas das crianças.</p>
            </div>
            <div className='bg-white p-5 md:p-9 w-[48%] text-center max-sm:w-[96%] max-sm:mb-7  itemns-center'>
                <h3 className='font-tinos text-azul font-bold text-lg md:text-xl'>Relatórios Detalhados</h3>
                <p className='font-fira text-justify text-sm md:text-base'>Obtenha insights valiosos sobre o desenvolvimento do seu filho com relatórios que detalham o progresso e as áreas que necessitam de mais atenção.</p>
            </div>
        </div>
    </div>
</section>

<section className='mt-10 pb-10 mb-7'>
    <div>
        <div className=' pb-9'>
            <h2 className='font-tinos text-3xl md:text-6xl text-center'>Principais Telas</h2>
            <p className='text-azul font-tinos text-lg md:text-base font-bold w-50% max-sm:w-[88%] max-sm:ml-[2rem] text-center'>Explore as principais telas que guiam sua navegação e experiência no projeto</p>
        </div>
        <div className='flex gap-10 max-lg:block justify-center items-center max-2xl:gap-11 max-sm:ml-[12%] md:items-center'>
            <div className='flex max-lg:flex gap-10 justify-center items-center max-sm:block'>
                <div className='max-w-80  max-sm:max-w-96  max-2xl:max-w-64 items-center  '>
                    <h3 className='font-tinos text-azul text-xl'>Tela Histórias:</h3>
                    <p className='font-fira text-justify text-sm max-sm:w-[90%]'>A tela oferece acesso a duas histórias envolventes e cuidadosamente desenvolvidas para ajudar crianças autistas a se conectarem e explorarem o mundo de forma divertida e acolhedora.</p>
                    <img className='mt-4 mb-15 max-sm:mb-10  max-sm:w-[90%]' src={Historias} alt="imagem cinza com simbulo de imagem" />
                </div>
                
                <div className='max-w-80 max-sm:mt-[2rem] max-2xl:max-w-64  max-sm:max-w-96'>
                    <h3 className='font-tinos text-azul text-xl '>Tela Home:</h3>
                    <p className='font-fira text-justify text-sm mb-9 max-sm:mb-8  max-sm:w-[90%]'>Tela home conta com abas projetada para ser intuitiva e organizar as informações de forma clara e acessível, permitindo que o usuário navegue facilmente entre as diferentes funções. </p>
                    <img className='mt-4 mb-15 max-sm:mt-[-1rem] max-sm:w-[90%]' src={home} alt="imagem cinza com simbulo de imagem" />
                </div>
            </div>
            <div className='flex max-lg:flex gap-10 justify-center items-center max-md:mt-12 max-sm:block'>
                <div className='max-w-80 max-sm:mt-[2rem] max-2xl:max-w-64 max-sm:max-w-96'>
                    <h3 className='font-tinos text-azul text-xl '>Tela Emoções:</h3>
                    <p className='font-fira text-justify text-sm  mb-9 max-sm:mb-4 max-sm:w-[90%]'>A tela de reconhecimento de emoções foi desenhada para ser intuitiva, oferecendo uma interface simples que facilita a identificação e a análise das emoções.</p>
                    <img className='mt-2 mb-15  max-sm:w-[90%]' src={emocoes} alt="imagem cinza com simbulo de imagem" />
                </div>

                
                <div className='max-w-80 max-sm:mt-[2rem]  max-2xl:max-w-64  max-sm:max-w-96'>
                    <h3 className='font-tinos text-azul text-xl '>Tela de números:</h3>
                    <p className='font-fira text-justify text-sm max-sm:mb-4  mb-14 max-sm:w-[90%]'>A tela foi projetada para guiar o usuário a uma atividade interativa que ensina a pronúncia dos números de forma simples e envolvente.</p>
                    <img className='mt-2 mb-15  max-sm:w-[90%]' src={numeros} alt="imagem cinza com simbulo de imagem" />
                </div>
            </div>

        </div>
    </div>
</section>

<section className='mb-16'>
<div className="flex flex-col items-center justify-center min-h-screen">
    <h2 className="font-tinos text-3xl md:text-6xl text-center">Compreenda nosso projeto</h2>
    <p className="font-tinos text-azul font-bold text-base text-center mb-10 w-[50%] max-sm:w-[80%] max-sm:ml-8">
    Assista aos vídeos abaixo para entender melhor o nosso projeto e descobrir todos os detalhes sobre como ele funciona.
    </p>
    <div className="lg:flex gap-10 block items-center justify-center">
    <iframe width="400" height="215" className='lg:mb-0 mb-10'
                src="https://www.youtube.com/embed/y1TF_JHcgjU" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
        </iframe>
        <iframe width="400" height="215" 
                src="https://youtu.be/f4aw4F2vyvc?si=1zSLtvDB5nISZtGx" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
        </iframe>
    </div>
</div>

</section>

<section className='bg-gray-100 pt-[3rem] h-full md:h-[90%] 2xl:h-[57%] max-sm:h-[83%] max-sm:pb-[2rem]'>
  <div className=''>
    <h2 className='font-tinos text-3xl md:text-6xl text-center'>Contate-nos</h2>
    <p className='font-tinos text-azul font-bold text-base text-center mb-10 w-50% max-sm:w-[80%] max-sm:ml-8 '>
      Fale conosco em caso de dúvida, questionamentos, ou se apenas quiser nos dar uma dica de como melhorar
    </p>
    <form className='mt-6 pl-[5rem]'>
      <div className='mb-4'>
        <label className='block text-azul text-sm font-bold mb-2 md:ml-[-1rem] ml-[-2.8rem]' htmlFor='name'>
          Nome
        </label>
        <input
          className='md:ml-[-1rem] ml-[-2.8rem] md:w-[95%] shadow appearance-none border rounded w-full py-2 px-3 text-azul leading-tight focus:outline-none focus:shadow-outline' id='name'type='text' placeholder='Seu nome'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-azul text-sm font-bold mb-2 md:ml-[-1rem] ml-[-2.8rem]' htmlFor='email'>
          Email
        </label>
        <input
          className=' md:ml-[-1rem] ml-[-2.8rem] md:w-[95%] shadow appearance-none border rounded w-full py-2 px-3 text-azul leading-tight focus:outline-none focus:shadow-outline'
          id='email'
          type='email'
          placeholder='Seu email'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-azul text-sm font-bold mb-2 md:ml-[-1rem] ml-[-2.8rem]' htmlFor='message'>
          Mensagem
        </label>
        <textarea
          className='md:ml-[-1rem] ml-[-2.8rem] md:w-[95%] shadow appearance-none border rounded w-full py-2 px-3 text-azul leading-tight focus:outline-none focus:shadow-outline'id='message' rows='4' placeholder='Sua mensagem'></textarea>
      </div>
      <div className='mb-4'>
        <button
          className='md:ml-[-1rem] ml-[-2.8rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
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
