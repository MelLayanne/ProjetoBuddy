import React from 'react';

export default function CompletePage() {
    return (
        <>
       
            
            <section className="h-screen w-full">
                <div className="h-full bg-[url('https://png.pngtree.com/background/20230614/original/pngtree-autism-puzzle-pieces-that-are-colorful-background-stock-photo-picture-image_3523481.jpg')] bg-no-repeat bg-cover bg-center z-10 w-full">
                    <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
                        <div className="text-white flex items-center justify-center h-full w-full text-center px-4">
                            <div className="w-3/5 mx-auto pb-16 pt-80 max-w-full text-center md:w-9/10 md:pb-8">
                                <div className="">
                                    <div className="font-tinos font-normal text-7xl md:text-5xl">
                                        <h1 className=' text-7xl pb-7 md:px-4'>Referências</h1>
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
            <section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
    <h2 className="font-tinos text-5xl text-azul mb-12 text-center">
      Referências
    </h2>
    <div className="space-y-12">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="lg:w-1/2">
          <p className="text-base text-justify leading-relaxed font-fira-sans">
            A ciência comprova a importância do desenvolvimento de robôs personalizados que auxiliam na terapia e na educação de crianças entre 5 e 10 anos e que se encaixam no nível 1 e 2 do Transtorno do Espectro Autista (TEA).
            <br /><br />
            Nesse sentido, pontuam-se maneiras de estimular a atenção, habilidades de comunicação, interação e aprendizado das crianças autistas através de animações que simulavam expressões humanas de forma simplificada na tela dos robôs.
            <br /><br />
            Por consequência, há uma acentuada melhora na coordenação motora, comunicação e interação social. Pode-se comprovar então, que a ciência oferece embasamento teórico e prático para aplicação de robôs no tratamento terapêutico.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src="https://i.ibb.co/0Xx4ktf/image-8.png" alt="Referências Visuais" className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-azul text-center">Artigos Trabalhados</h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-azul text-lg">
            <a href="#" className="hover:text-indigo-600 transition duration-300">Tratamento Terapêutico</a>
          </li>
          <li className="text-azul text-lg">
            <a href="#" className="hover:text-indigo-600 transition duration-300">Robótica na Educação</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
</>
          
    );
}
