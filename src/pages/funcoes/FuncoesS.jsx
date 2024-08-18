import React from 'react';


export default function CompletePage() {
    return (
        <div className="bg-white">
            {/* Seção 1: Funções */}

            <section className="h-screen w-full">
                <div className={`h-full bg-[url('https://i.imgur.com/MRvKKUX.png')] bg-no-repeat bg-cover bg-center z-10 w-full`}>

                    <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
                        <div className="text-white flex items-center justify-center h-full w-full text-center px-4">
                            <div className="w-3/5 mx-auto pb-16 pt-80 max-w-full text-center md:w-9/10 md:pb-8">
                                <div className="">
                                    <div className="font-tinos font-normal text-7xl md:text-5xl">
                                        <h1 className=' text-7xl pb-7 md:px-4'>Funções</h1>
                                    </div>
                                    <div className="text-center">
                                        <p className='text-gray-400  text-justify font-fira'>Veja todas as funções do nosso TCC aqui no site. Pesquise, interaja e entre em contato conosco.</p>
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
                        <h2 className="m-0 font-tinos text-6xl">Funções</h2>
                        <div className="flex justify-center md:justify-start">
                            <p className="m-0 font-tinos font-bold text-azul pl-0.5">Entenda</p>
                            <div className="ml-4 bg-azul h-4 w-36 mt-3 ">
                                <hr className="text-azul" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 pl-0 font-tinos font-light text-2xl flex flex-col md:flex-row md:flex-wrap mt-12 justify-center md:justify-evenly">
                        <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[40rem] mb-8">
                            <img src="https://i.ibb.co/0Xx4ktf/image-8.png" alt="" className="w-60 mt-1 mx-auto" />
                            <div className="mt-4 md:mt-0 text-center md:text-left">
                                <h3 className="text-azul font-bold">Reconhecimento de emoções</h3>
                                <div className="w-80 mx-auto flex flex-col bg-gray-200 p-6 mt-4">
                                    <p className="font-fira-sans font-normal text-base text-justify">
                                        O Buddy utiliza imagens e animações para ajudar a criança a reconhecer
                                        expressões faciais, como a alegria, tristeza, frustração e surpresa. Essa
                                        capacidade permite que a criança consiga discernir emoções.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[40rem] mb-8">
                            <img src="https://i.ibb.co/SVRNz6b/image-10.png" alt="" className="w-60 mt-1 mx-auto" />
                            <div className="mt-4 md:mt-0 text-center md:text-left">
                                <h3 className="text-azul font-bold">Atividades interativas</h3>
                                <div className="w-80 mx-auto flex flex-col bg-gray-200 p-6 mt-4">
                                    <p className="font-fira-sans font-normal text-base text-justify">
                                        O robô oferece uma variedade de atividades interativas projetadas para
                                        estimular o desenvolvimento cognitivo e social das crianças, como: jogos
                                        educativos e histórias interativas que ajudam a melhorar habilidades de
                                        comunicação e interação social de maneira divertida.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[40rem] mb-8">
                            <img src="https://i.ibb.co/ZdZ0sDr/image-9.png" alt="" className="w-60 mt-1 mx-auto" />
                            <div className="mt-4 md:mt-0 text-center md:text-left">
                                <h3 className="text-azul font-bold">Gravação de mensagens</h3>
                                <div className="w-80 mx-auto flex flex-col bg-gray-200 p-6 mt-4">
                                    <p className="font-fira-sans font-normal text-base text-justify">
                                        A interface do robô permite que os responsáveis gravem mensagens para os
                                        seus filhos ouvirem durante o dia e se sentirem mais próximos dos pais
                                        mesmo que estejam longe.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[40rem]">
                            <img src="https://i.ibb.co/7RBqsSC/image-11.png" alt="" className="w-60 mt-1 mx-auto" />
                            <div className="mt-4 md:mt-0 text-center md:text-left">
                                <h3 className="text-azul font-bold">Monitoramento e Relatórios</h3>
                                <div className="w-80 mx-auto flex flex-col bg-gray-200 p-6 mt-4">
                                    <p className="font-fira-sans font-normal text-base text-justify">
                                    Com o Buddy, os pais tem acesso  a relátorios detalhados sobre o progresso dos seus filhos mensalmente. O robô monitora e registra interações e atividades, fornecendo insights valiosos sobre áreas de melhoria e avanço.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='h-full pb-[3rem]'>
                <div className='bg-gray-100 h-full pb-[3rem] pt-9 ml-[59px]'>
                    <div className='pl-[3rem]'>
                        <h2 className='font-tinos text-6xl'>Benefícios</h2>
                        <p className='text-azul'>Conheça os benefícios que tornam essa experiência ainda mais significativa</p>
                    </div>
                    <div className='flex'>
                        <div className='bg-white pl-[3rem] mt-[3rem] ml-[59px] mr-[0.5rem] w-[40rem] text-center p-9'>
                            <h3 className='font-tinos text-azul font-bold'>Educação Personalizada</h3>
                            <p className='font-fira text-justify'>Cada criança aprende em seu próprio ritmo. Nosso robô adapta as atividades de acordo com as necessidades individuais de cada uma.
                            </p>
                        </div>
                        <div className='bg-white pl-[3rem] mt-[3rem] ml-[10rem] mr-[4rem] w-[40rem] text-center p-9'>
                            <h3 className='font-tinos text-azul font-bold'>Segurança e Conforto</h3>
                            <p className='font-fira text-justify'>Nossa tecnologia garante que as interações sejam seguras e adequadas para todas as idades, promovendo um ambiente de conforto para as crianças.
                            </p>
                        </div></div>
                    <div className='flex'>
                        <div className='bg-white pl-[3rem] mt-[3rem] ml-[59px] w-[40rem] text-center p-9'>
                            <h3 className='font-tinos text-azul font-bold'>Interatividade Avançada</h3>
                            <p className='font-fira text-justify'>Através de jogos e atividades, o robô melhora a comunicação, a criatividade e as habilidades cognitivas das crianças.
                            </p>
                        </div>
                        <div className='bg-white pl-[3rem] pb-[3rem] mt-[3rem] ml-[10rem] mr-[4rem] w-[40rem] text-center p-9'>
                            <h3 className='font-tinos text-azul font-bold'>Relatórios Detalhados</h3>
                            <p className='font-fira text-justify'>Obtenha insights valiosos sobre o desenvolvimento do seu filho com relatórios que detalham o progresso e as áreas que necessitam de mais atenção.
                            </p>
                        </div></div></div>
            </section>

            <section className='pl-[3rem] pt-[3rem] h-full ml-[60px] '>
                <h2 className='font-tinos text-6xl'>Principais Telas</h2>
                <p className='font-fira text-azul'>Explore as principais telas que guiam sua navegação e experiência no projeto</p>

                <div className='flex justify-start
            '><div className='w-1/3  mt-3'>
                        <h3 className='text-azul font-tinos text-2xl '>Tela inicial</h3>
                        <p className='font-fira w-[20rem] text-justify '>O design do rosto é pensado para promover a interação de maneira gradual e compreensível, ajudando as crianças a se sentirem confortáveis e conectadas, facilitando a comunicação e o aprendizado.</p>
                        <div className='flex justify-start'> <img className='w-[20rem] pt-[30px] h-[12rem] mr-[2rem]  mt-12' src="https://th.bing.com/th/id/OIP.7kBYXt-ZDu9GYF7J0zvx3wHaFn?rs=1&pid=ImgDetMain" alt="" /></div>
                    </div>
                    <div className='mt-2.5 w-2/3 pt-3  flex justify-start'>
                        <img className='w-[50rem] h-96 ml-[2rem]' src="https://th.bing.com/th/id/OIP.7kBYXt-ZDu9GYF7J0zvx3wHaFn?rs=1&pid=ImgDetMain" alt="" />
                    </div></div>

                <div className='flex justify-start'>

                    <div className='flex justify-start'> <img className='w-[90rem] h-[27rem] pt-[30px] mt-4' src="https://th.bing.com/th/id/OIP.7kBYXt-ZDu9GYF7J0zvx3wHaFn?rs=1&pid=ImgDetMain" alt="" /></div>

                    <div className='flex justify-start'>
                        <div className='w-2/3 pt-3 mt-3'>
                            <h3 className='text-azul font-tinos text-2xl mt-4 ml-[15rem] mr-[3.75rem]'>Tela Home</h3>
                            <p className='font-fira w-[20rem] text-justify mr-[3.75rem] ml-[15rem] '> A tela home conta com abas projetada para ser intuitiva e organizar as informações de forma clara e acessível, permitindo que o usuário navegue facilmente entre as diferentes funções. </p>
                            <div className='flex justify-start'> <img className='w-[30rem] pt-[95px] h-[16rem] mr-[2rem] ml-[20rem] mb-[4rem]' src="https://th.bing.com/th/id/OIP.7kBYXt-ZDu9GYF7J0zvx3wHaFn?rs=1&pid=ImgDetMain" alt="" /></div>
                        </div>


                    </div>
                </div>
            </section>

            <section className='bg-gray-100 pt-[3rem] h-full'>
  <div className='pl-[5rem] pb-9'>
    <h2 className='font-tinos text-6xl ml-[2rem]'>Contate-nos</h2>
    <p className='font-fira text-azul ml-[2rem]'>
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
