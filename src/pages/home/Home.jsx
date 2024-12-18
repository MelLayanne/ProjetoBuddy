import React, { useState, useEffect } from 'react';
import buddy from '../../assets/budd.jpg';
import carcaca from '../../assets/carcaca.jpeg';
import logoB from '../../assets/budddyy.png';
import lacoA from '../../assets/laco.jpg';
import atividade from '../../assets/atividd.jpg';
import estrutura from '../../assets/estrutura.jpg';





export default function Home() {
    return (
        <>
            <section className="h-screen w-full ">
            <div className="h-full bg-[url('https://i.ibb.co/X5tntdS/portrait-autistic.png')] bg-no-repeat bg-cover bg-center z-10 w-full">
    <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
        <div className="text-white flex flex-col items-center justify-center h-full w-full text-center px-4">
            <div className="w-full max-w-full px-4">
                <h1 className="font-tinos text-5xl md:text-7xl mb-4 mt-[20vh] md:mt-[30vh]">
                    BUDDY
                </h1>
                <div className="w-full max-w-full px-4">
                    <p className="text-gray-400 font-fira text-sm md:text-base text-center">
                        Robô que auxilia responsáveis no desenvolvimento da fala, interação social e reconhecimento de emoções de crianças autistas de nível 2 entre 5 e 10 anos de idade. Possui integração com App, o que facilita a devolução de relatórios que analisam a evolução do autista
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<section className="py-8 container mx-auto px-4 md:px-6 lg:px-8 xl:px-10 mb-8">
    <div className="flex flex-col w-full pt-8 font-light text-2xl">
        <div className="pl-0">
            <h2 className="text-3xl md:text-6xl font-tinos text-center">Processo de criação</h2>
            <div className="text-justify md:justify-start">
                <p className="m-0 font-tinos font-bold text-azul text-base max-sm:w-[90%] text-center mb-8 max-sm:ml-[1rem]">
                    Compreenda os detalhes que moldaram o companheiro da sua criança
                </p>
            </div>
        </div>

        {/* Flex container para as colunas */}
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:flex-row md:space-x-8 mt-8 px-4 md:px-0 2xl:gap-8 2xl:ml-[-2rem]">
            {/* Primeira coluna */}
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-lg text-center md:text-left">Cor Azul</h2>
                <div className="bg-gray-200 p-7 text-sm flex flex-col items-center max-w-[350px]">
                    <p className="font-fira text-sm text-justify">É menos estimulante visualmente em comparação a cores mais vibrantes como o vermelho ou o amarelo, o que pode ser benéfico para minimizar a agitação e ajudar a criança a se acalmar.</p>
                </div>
            </div>

            {/* Imagem ao lado */}
            <img className="w-full max-w-xs md:ml-0 ml-[0.5rem] max-sm:ml-[-0.1rem]" src={lacoA}alt="Cor Azul" />

            {/* Segunda coluna */}
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-lg text-center md:text-left">Nome Buddy</h2>
                <div className="bg-gray-200 p-7 text-sm flex flex-col items-center max-w-[350px]">
                    <p className="font-fira text-sm text-justify">"Buddy" significa "companheiro" ou "amigo" em inglês. É uma palavra que transmite a ideia de alguém que está sempre ao lado, oferecendo apoio e amizade.</p>
                </div>
            </div>
        </div>

        {/* Segunda linha */}
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:flex-row md:space-x-8 mt-8 px-4 md:px-0 2xl:gap-8 2xl:ml-[-2rem]">
            {/* Primeira coluna */}
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-lg text-center md:text-left">Logo</h2>
                <div className="bg-gray-200 p-8 pb-9 px-10 text-sm flex flex-col items-center max-w-[350px]">
                    <p className="font-fira text-sm text-justify">É projetada para refletir características humanas e dar uma aparência mais amigável ao nosso projeto.</p>
                </div>
            </div>

            {/* Imagem ao lado */}
            <img className="w-full max-w-xs md:ml-0 ml-[0.5rem] max-sm:ml-[-0.1rem] border" src={logoB} alt="Logo" />

            {/* Segunda coluna */}
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-lg text-center md:text-left">Atividades</h2>
                <div className="bg-gray-200 p-7 text-sm flex flex-col items-center max-w-[350px]">
                    <p className="font-fira text-sm text-justify">As atividades e habilidades desenvolvidas pelo robô foram selecionadas para serem realizadas em sequência, como um processo de evolução que acompanha a criança desde o início.</p>
                </div>
            </div>
        </div>

        {/* Terceira linha */}
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:flex-row md:space-x-8 mt-8 px-4 md:px-0 2xl:gap-8 2xl:ml-[-2rem]">
            {/* Primeira coluna */}
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-lg text-center md:text-left">Comunicação</h2>
                <div className="bg-gray-200 p-7 text-sm flex flex-col items-center max-w-[350px]">
                    <p className="font-fira text-sm text-justify">Criamos uma forma de guardar mensagens para a criança no robô, pois sabemos o quanto o contato com a pessoa com a qual são mais apegadas é eficiente em uma situação de crise.</p>
                </div>
            </div>

            {/* Imagem ao lado */}
            <img className="w-full max-w-xs md:ml-0 ml-[0.5rem] max-sm:ml-[-0.1rem] border" src={atividade} alt="Comunicação" />

            {/* Segunda coluna */}
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-lg text-center md:text-left">Sensores de som e luz:</h2>
                <div className="bg-gray-200 p-7 text-sm flex flex-col items-center max-w-[350px]">
                    <p className="font-fira text-sm text-justify">Os sensores de som e luz são projetados para captar estímulos do ambiente, possibilitando ajustar o local para o conforto da criança.</p>
                </div>
            </div>
        </div>

        {/* Quarta linha */}
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:flex-row md:space-x-8 mt-8 px-4 md:px-0 2xl:gap-8 2xl:ml-[-2rem]">
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-lg text-center md:text-left">Relatórios</h2>
                <div className="bg-gray-200 p-7 text-sm flex flex-col items-center max-w-[350px]">
                    <p className="font-fira text-sm text-justify">É uma ferramenta essencial que permite o acompanhamento do progresso da criança e oferece uma visão detalhada das atividades, conquistas e desafios enfrentados pela criança.</p>
                </div>
            </div>

            <img className="w-full max-w-xs md:ml-0 ml-[0.5rem] max-sm:ml-[-0.1rem]" src={estrutura} alt="Relatórios" />

            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-lg text-center md:text-left">Estrutura</h2>
                <div className="bg-gray-200 p-7 text-sm flex flex-col items-center max-w-[350px]">
                    <p className="font-fira text-sm text-justify">A estrutura do robô foi escolhida pensando na informação, de que crianças autista se sentem mais confortáveis ao interagir com um robô.</p>
                </div>
            </div>
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

</section>



</>
          
    );
}

