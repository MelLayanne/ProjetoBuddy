import React, { useState, useEffect } from 'react';



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
                    <p className="text-gray-400 text-justify font-fira text-sm md:text-base md:ml-[1.5rem] md:mr-[4rem]">
                        Robô que auxilia responsáveis no desenvolvimento da fala, interação social e reconhecimento de emoções de crianças autistas de nível 2 entre 5 e 10 anos de idade. Possui integração com App, o que facilita a devolução de relatórios que analisam a evolução do autista.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<section className="py-8 container mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
    <div className="flex flex-col w-full pt-8 font-light text-2xl">
        <div className="titulo_da_segunda text-center md:text-left">
            <h2 className="m-0 font-tinos md:text-6xl w-[70%] text-5xl md:ml-[-10rem] h-full ml-[0.9rem] font-normal text-justify">Processo de criação</h2>
        <div className="flex text-justify md:justify-start mt-4">
            <p className='font-fira text-azul text-1xl md:ml-[-10rem] md:mt-[-1rem] font-bold md:ml-0 ml-[0.9rem] w-[90%]'>
            Compreenda os detalhes que moldaram o companheiro da sua criança
            </p>
            </div>
        </div>

        <div className="flex ml-0 flex-col md:flex-row md:space-x-8 space-y-8 md:ml-[8rem] md:space-y-0  mt-8 px-4 md:px-0">
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-base text-center md:text-left">Cor Azul</h2>
                <div className="bg-gray-200 p-7 max-w-xs text-sm flex flex-col items-center md:items-start">
                    <p className="font-fira text-sm text-justify">É menos estimulante visualmente em comparação a cores mais vibrantes como o vermelho ou o amarelo, o que pode ser benéfico para minimizar a agitação e ajudar a criança a se acalmar.</p>
                </div>
            </div>
            <img className="w-full max-w-xs md:ml-0 ml-[0.5rem]" src="https://th.bing.com/th/id/R.7f6ecb4efca234c948d4271b41bf16db?rik=ImU8rVRg9uFVng&pid=ImgRaw&r=0" alt="Cor Azul" />
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-base text-center md:text-left">Nome Buddy</h2>
                <div className="bg-gray-200 p-7 w-full max-w-xs text-sm flex flex-col items-center md:items-start">
                    <p className="font-fira text-sm text-justify">"Buddy" significa "companheiro" ou "amigo" em inglês. É uma palavra que transmite a ideia de alguém que está sempre ao lado, oferecendo apoio e amizade.</p>
                </div>
            </div>
            
        </div>
        <div className="flex ml-0 flex-col md:flex-row md:space-x-8 space-y-8 md:ml-[8rem] md:space-y-0  mt-8 px-4 md:px-0">
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-base text-center md:text-left">Cor Azul</h2>
                <div className="bg-gray-200 p-7 max-w-xs text-sm flex flex-col items-center md:items-start">
                    <p className="font-fira text-sm text-justify">É menos estimulante visualmente em comparação a cores mais vibrantes como o vermelho ou o amarelo, o que pode ser benéfico para minimizar a agitação e ajudar a criança a se acalmar.</p>
                </div>
            </div>
            <img className="w-full max-w-xs md:ml-0 ml-[0.5rem]" src="https://th.bing.com/th/id/R.7f6ecb4efca234c948d4271b41bf16db?rik=ImU8rVRg9uFVng&pid=ImgRaw&r=0" alt="Cor Azul" />
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-base text-center md:text-left">Nome Buddy</h2>
                <div className="bg-gray-200 p-7 w-full max-w-xs text-sm flex flex-col items-center md:items-start">
                    <p className="font-fira text-sm text-justify">"Buddy" significa "companheiro" ou "amigo" em inglês. É uma palavra que transmite a ideia de alguém que está sempre ao lado, oferecendo apoio e amizade.</p>
                </div>
            </div>
            
        </div>
        <div className="flex ml-0 flex-col md:flex-row md:space-x-8 space-y-8 md:ml-[8rem] md:space-y-0  mt-8 px-4 md:px-0">
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-base text-center md:text-left">Cor Azul</h2>
                <div className="bg-gray-200 p-7 max-w-xs text-sm flex flex-col items-center md:items-start">
                    <p className="font-fira text-sm text-justify">É menos estimulante visualmente em comparação a cores mais vibrantes como o vermelho ou o amarelo, o que pode ser benéfico para minimizar a agitação e ajudar a criança a se acalmar.</p>
                </div>
            </div>
            <img className="w-full max-w-xs md:ml-0 ml-[0.5rem]" src="https://th.bing.com/th/id/R.7f6ecb4efca234c948d4271b41bf16db?rik=ImU8rVRg9uFVng&pid=ImgRaw&r=0" alt="Cor Azul" />
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-base text-center md:text-left">Nome Buddy</h2>
                <div className="bg-gray-200 p-7 w-full max-w-xs text-sm flex flex-col items-center md:items-start">
                    <p className="font-fira text-sm text-justify">"Buddy" significa "companheiro" ou "amigo" em inglês. É uma palavra que transmite a ideia de alguém que está sempre ao lado, oferecendo apoio e amizade.</p>
                </div>
            </div>
            
        </div>
        <div className="flex ml-0 flex-col md:flex-row md:space-x-8 space-y-8 md:ml-[8rem] md:space-y-0  mt-8 px-4 md:px-0">
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-base text-center md:text-left">Cor Azul</h2>
                <div className="bg-gray-200 p-7 max-w-xs text-sm flex flex-col items-center md:items-start">
                    <p className="font-fira text-sm text-justify">É menos estimulante visualmente em comparação a cores mais vibrantes como o vermelho ou o amarelo, o que pode ser benéfico para minimizar a agitação e ajudar a criança a se acalmar.</p>
                </div>
            </div>
            <img className="w-full max-w-xs md:ml-0 ml-[0.5rem]" src="https://th.bing.com/th/id/R.7f6ecb4efca234c948d4271b41bf16db?rik=ImU8rVRg9uFVng&pid=ImgRaw&r=0" alt="Cor Azul" />
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
                <h2 className="text-azul font-bold font-tinos text-base text-center md:text-left">Nome Buddy</h2>
                <div className="bg-gray-200 p-7 w-full max-w-xs text-sm flex flex-col items-center md:items-start">
                    <p className="font-fira text-sm text-justify">"Buddy" significa "companheiro" ou "amigo" em inglês. É uma palavra que transmite a ideia de alguém que está sempre ao lado, oferecendo apoio e amizade.</p>
                </div>
            </div>
            
        </div>
      
    </div>
</section>


           

<section className='bg-gray-100 pt-[3rem] h-full md:h-[65%]'>
  <div className='pl-[5rem] pb-9 '>
    <h2 className='font-tinos text-4xl md:text-6xl md:ml-0 ml-[-3rem]'>Contate-nos</h2>
    <p className='font-fira text-azul font-bold text-justify w-50% md:ml-0 ml-[-2.8rem]'>
      Fale conosco em caso de dúvida, questionamentos, ou se apenas quiser nos dar uma dica de como melhorar.
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

</section>



</>
          
    );
}

