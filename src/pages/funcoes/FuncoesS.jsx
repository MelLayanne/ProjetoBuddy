import React from 'react';


export default function CompletePage() {
    return (
        <div className="bg-white">
            {/* Seção 1: Funções */}

            <section className="h-screen w-full">
    <div className={`h-full bg-[url('https://i.imgur.com/MRvKKUX.png')] bg-no-repeat bg-cover bg-center z-10 w-full`}>
        <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
            <div className="text-white flex items-center justify-center h-full w-full text-center px-4">
                <div className="w-4/5 mx-auto pb-16 pt-40 max-w-full text-center md:w-9/10 md:pb-8">
                    <div className="">
                        <div className="font-tinos font-normal text-4xl md:text-5xl">
                            <h1 className='text-4xl pb-7 md:text-7xl'>Funções</h1>
                        </div>
                        <div className="text-center">
                            <p className='text-gray-400 text-base md:text-lg font-fira'>Veja todas as funções do nosso TCC aqui no site. Pesquise, interaja e entre em contato conosco.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="py-8 px-4">
    <div className="flex flex-col w-full pt-8 font-light text-xl">
        <div className="titulo_da_segunda text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-tinos">Funções</h2>
            <div className="flex justify-center md:justify-start">
                <p className="m-0 font-tinos font-bold text-azul pl-0.5">Descubra as funcionalidades que revelam os detalhes que moldam essa experiência </p>
            </div>
        </div>

        <div className="pt-8 font-tinos font-light text-xl flex flex-col md:flex-row md:flex-wrap mt-12 justify-center md:justify-evenly">
            <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[40rem] mb-8">
                <img src="https://i.ibb.co/0Xx4ktf/image-8.png" alt="" className="w-48 md:w-60 mt-1 mx-auto" />
                <div className="mt-4 md:mt-0 text-center md:text-left">
                    <h3 className="text-azul font-bold text-lg md:text-xl">Reconhecimento de emoções</h3>
                    <div className="w-full md:w-80 mx-auto flex flex-col bg-gray-200 p-4 md:p-6  mt-4">
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
                    <div className="w-full md:w-80 mx-auto flex flex-col bg-gray-200 p-4 md:p-6 mt-4">
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
                    <div className="w-full md:w-80 mx-auto flex flex-col bg-gray-200 p-4 md:p-6 mt-4">
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
                    <div className="w-full md:w-80 mx-auto flex flex-col bg-gray-200 p-4 md:p-6 mt-4">
                        <p className="font-fira-sans font-normal text-sm md:text-base text-justify">
                        Com o Buddy, os pais têm acesso a relatórios detalhados sobre o progresso dos seus filhos mensalmente. O robô monitora e registra interações e atividades, fornecendo insights valiosos sobre áreas de melhoria e avanço.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section className='h-full pb-[3rem]'>
    <div className='bg-gray-100 h-full pb-[3rem] pt-9 mx-4 md:mx-[59px]'>
        <div className='pl-0 md:pl-[3rem]'>
            <h2 className='font-tinos text-4xl md:text-6xl'>Benefícios</h2>
            <p className='text-azul text-lg md:text-base'>Conheça os benefícios que tornam essa experiência ainda mais significativa</p>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='bg-white mb-4 md:mb-0 md:pl-[3rem] mt-[3rem] md:ml-[59px] md:mr-[0.5rem] w-full md:w-[40rem] text-center p-6 md:p-9'>
                <h3 className='font-tinos text-azul font-bold text-lg md:text-xl'>Educação Personalizada</h3>
                <p className='font-fira text-justify text-sm md:text-base'>Cada criança aprende em seu próprio ritmo. Nosso robô adapta as atividades de acordo com as necessidades individuais de cada uma.</p>
            </div>
            <div className='bg-white mb-4 md:mb-0 md:pl-[3rem] mt-[3rem] md:ml-[10rem] md:mr-[4rem] w-full md:w-[40rem] text-center p-6 md:p-9'>
                <h3 className='font-tinos text-azul font-bold text-lg md:text-xl'>Segurança e Conforto</h3>
                <p className='font-fira text-justify text-sm md:text-base'>Nossa tecnologia garante que as interações sejam seguras e adequadas para todas as idades, promovendo um ambiente de conforto para as crianças.</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:space-x-4'>
            <div className='bg-white mb-4 md:mb-0 md:pl-[3rem] mt-[3rem] md:ml-[59px] w-full md:w-[40rem] text-center p-6 md:p-9'>
                <h3 className='font-tinos text-azul font-bold text-lg md:text-xl'>Interatividade Avançada</h3>
                <p className='font-fira text-justify text-sm md:text-base'>Através de jogos e atividades, o robô melhora a comunicação, a criatividade e as habilidades cognitivas das crianças.</p>
            </div>
            <div className='bg-white mb-4 md:mb-0 md:pl-[3rem] pb-[3rem] mt-[3rem] md:ml-[10rem] md:mr-[4rem] w-full md:w-[40rem] text-center p-6 md:p-9'>
                <h3 className='font-tinos text-azul font-bold text-lg md:text-xl'>Relatórios Detalhados</h3>
                <p className='font-fira text-justify text-sm md:text-base'>Obtenha insights valiosos sobre o desenvolvimento do seu filho com relatórios que detalham o progresso e as áreas que necessitam de mais atenção.</p>
            </div>
        </div>
    </div>
</section>

<section className='pr-[3rem] pt-[3rem] h-full ml-[60px]'>
    <h2 className='font-tinos text-6xl md:text-6xl text-4xl'>Principais Telas</h2>
    <p className='font-fira text-azul text-lg md:text-lg text-base'>Explore as principais telas que guiam sua navegação e experiência no projeto</p>

    <div className='flex flex-col md:flex-row md:justify-start'>
        <div className='w-full md:w-1/3 mt-3'>
            <h3 className='text-azul font-tinos text-2xl md:text-2xl text-xl'>Tela inicial</h3>
            <p className='font-fira text-justify text-base md:text-base text-sm'>O design do rosto é pensado para promover a interação de maneira gradual e compreensível, ajudando as crianças a se sentirem confortáveis e conectadas, facilitando a comunicação e o aprendizado.</p>
            <div className='flex justify-center md:justify-start'>
                <img className='w-full md:w-[20rem] h-auto md:h-[12rem] mt-4 md:mt-12' src="https://th.bing.com/th/id/OIP.7kBYXt-ZDu9GYF7J0zvx3wHaFn?rs=1&pid=ImgDetMain" alt="" />
            </div>
        </div>
        <div className='w-full md:w-2/3 mt-4 md:mt-0 flex justify-center md:justify-start'>
            <img className='w-full md:w-[50rem] h-auto md:h-96 pl-0 md:pl-[4rem]' src="https://th.bing.com/th/id/OIP.7kBYXt-ZDu9GYF7J0zvx3wHaFn?rs=1&pid=ImgDetMain" alt="" />
        </div>
    </div>

    <div className='flex flex-col md:flex-row md:justify-start mt-4'>
        <div className='w-full md:w-1/2 flex justify-center md:justify-start'>
            <img className='w-full md:w-[90rem] h-auto md:h-[27rem] mt-4 pr-0 md:pr-[3rem]' src="https://th.bing.com/th/id/OIP.7kBYXt-ZDu9GYF7J0zvx3wHaFn?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start'>
            <div className='w-full md:w-2/3 pt-3'>
                <h3 className='text-azul font-tinos text-xl md:text-2xl mt-4 md:mt-0 text-center md:text-left'>Tela Home</h3>
                <p className='font-fira text-justify text-sm md:text-base mt-2 md:mt-4 text-center md:text-left'>A tela home conta com abas projetada para ser intuitiva e organizar as informações de forma clara e acessível, permitindo que o usuário navegue facilmente entre as diferentes funções.</p>
                <div className='flex justify-center md:justify-start'>
                    <img className='w-full md:w-[30rem] h-auto md:h-[16rem] mt-4 mb-[4rem]' src="https://th.bing.com/th/id/OIP.7kBYXt-ZDu9GYF7J0zvx3wHaFn?rs=1&pid=ImgDetMain" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>

<section className='bg-gray-100 pt-[3rem] h-full '>
  <div className='pl-[5rem] pb-9 md:pl-4 pr-[5rem] md:pr-0'>
    <h2 className='font-tinos text-6xl ml-[2rem] text-4xl md:text-3xl md:ml-0'>Contate-nos</h2>
    <p className='font-fira text-azul ml-[2rem] text-base md:text-sm md:ml-0'>
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

        </div>
    );
}
