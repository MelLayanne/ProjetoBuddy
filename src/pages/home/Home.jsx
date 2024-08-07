import React, { useState } from 'react';

import img1 from '../../assets/jumpers.png';
import img2 from '../../assets/Logo.png';
import img3 from '../../assets/Logo.png';
import img4 from '../../assets/Logo.png';
import img5 from '../../assets/Logo.png';
import corda from '../../assets/corda 1.png';

function Home() {
    const images = [
        corda,
        corda,
        corda,
        corda,
        corda,
        corda,
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <section className="h-screen w-full">
                <div className="h-full bg-[url('https://i.ibb.co/X5tntdS/portrait-autistic.png')] bg-no-repeat bg-cover bg-center z-10 w-full">
                    <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
                        <div className="text-white flex items-center justify-center h-full w-full text-center px-4">
                            <div className="w-3/5 mx-auto pb-16 pt-80 max-w-full text-center md:w-9/10 md:pb-8">
                                <div className="">
                                    <div className="font-tinos font-normal text-7xl md:text-5xl">
                                        <h1 className=' text-7xl pb-7 md:px-4'>BUDDY</h1>
                                    </div>
                                    <div className="text-center">
                                        <p className='text-gray-400 text-justify font-fira'>Robô que auxilia responsáveis no desenvolvimento da fala, interação social e reconhecimento de emoções de crianças autistas de nível 2 entre 5 e 10 anos de idade. Possui integração com App, o que facilita a devolução de relatórios que analisam a evolução do autista.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="pt-8 pl-0 font-light text-2xl">
                    <div className='titulo_da_segunda'>
                        <h2 className="pl-12 m-0 font-tinos text-6xl">Funções</h2>
                        <div className='flex'>
                            <p className="m-0 font-tinos font-bold ml-12 text-azul pl-0.5">Entenda</p>
                            <div className='ml-4 bg-azul h-4 w-36 mt-3'>
                                <hr className=' text-azul ' />
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 pl-0 font-tinos font-light text-2xl flex justify-evenly">
                        <div className="flex items-center m-0 w-[30rem]">
                            <img src="https://i.ibb.co/0Xx4ktf/image-8.png" alt="" className='w-60 mt-1' />
                            <div className="pl-0">
                                <h3 className='text-azul font-bold'>Reconhecimento de emoções</h3>
                                <div className="w-80 flex flex-col bg-gray-200 p-6 pl-4 mt-4">
                                    <p className='font-fira-sans font-normal text-base text-justify'>O Buddy utiliza imagens e animações para ajudar a criança a reconhecer expressões faciais, como a alegria, tristeza, frustração e surpresa. Essa capacidade permite que a criança consiga discernir emoções.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center m-0 w-120 pl-20">
                            <img src="https://i.ibb.co/SVRNz6b/image-10.png" alt="" className='w-60 mt-1' />
                            <div className=" pl-2">
                                <h3 className='text-azul font-bold'>Atividades interativas</h3>
                                <div className="w-80 flex flex-col bg-gray-200 p-6 pl-4 mt-4">
                                    <p className='font-fira-sans font-normal text-base text-justify'>O robô oferece uma variedade de atividades interativas projetadas para estimular o desenvolvimento cognitivo e social das crianças, como: jogos educativos e histórias interativas que ajudam a melhorar habilidades de comunicação e interação social de maneira divertida.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 pl-0 font-tinos font-light text-2xl flex justify-evenly">
                        <div className="flex items-center m-0 w-120">
                            <img src="https://i.ibb.co/ZdZ0sDr/image-9.png" alt="" className='w-60 mt-1' />
                            <div className=" pl-4">
                                <h3 className='text-azul font-bold'>Gravação de mensagens</h3>
                                <div className="w-80 flex flex-col bg-gray-200 p-6 pl-4 mt-4">
                                    <p className='font-fira-sans font-normal text-base text-justify'>A interface do robô permite que os responsáveis gravem mensagens para os seus filhos ouvirem durante o dia e se sentirem mais próximos dos pais mesmo que estejam longe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center m-0 w-120">
                            <img src="https://i.ibb.co/7RBqsSC/image-11.png" alt="" className='w-60 mt-1' />
                            <div className=" pl-2">
                                <h3 className='text-azul font-bold'>Monitoramento e Relatórios</h3>
                                <div className="w-80 flex flex-col bg-gray-200 p-6 pl-4 mt-4">
                                    <p className='font-fira-sans font-normal text-base text-justify'>O robô oferece uma variedade de atividades interativas projetadas para estimular o desenvolvimento cognitivo e social das crianças, como: jogos educativos e histórias interativas que ajudam a melhorar habilidades de comunicação e interação social de maneira divertida.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="terceira_section ">
                    <h2 className='font-tinos ml-[50px] font-light text-6xl'>Referências</h2> 

                    <p className='text-azul font-tinos font-bold ml-[50px] text-[20px]'>Base cientifica</p>
                    <div className='ml-4 bg-azul h-4 w-36 mt-3'>
                        <hr className=' text-azul ' />
                    </div>
                    <div className="flex flex-wrap justify-center items-center pl-[18px]">
                        <div className="pt-[2rem] flex w-[700px]">
                            <hr className='h-[370px] w-[2rem] bg-[rgb(129,186,239)] border-none mr-8' />
                            <div className="mb-auto text-justify mt-auto w-4/6">
                                <p className='font-fira-sans font-normal text-base text-justify'>A ciência comprova a importância do desenvolvimento de robôs personalizados que auxiliam na terapia e na educação de crianças entre 5 e 10 anos e que se encaixam no nível 1 e 2 do Transtorno do Espectro Autista (TEA).</p><br />
                                <p className='font-fira-sans font-normal text-base text-justify'>Nesse sentido, pontuam-se maneiras de estimular a atenção, habilidades de comunicação, interação e aprendizado das crianças autistas através de animações que simulavam expressões humanas de forma simplificada na tela dos robôs, já que a falta de emoções nesses dispositivos facilitavam o interesse ao interagir com eles.</p><br />
                                <p className='font-fira-sans font-normal text-base text-justify'>Por consequência, há uma acentuada melhora na coordenação motora, comunicação e interação social. Pode-se comprovar então, que a ciência oferece embasamento teórico e prático para aplicação de robôs no tratamento terapêutico.</p>
                            </div>
                        </div>
                        <div className="pr-[3%]">
                            <img src={corda} alt="Corda" className='w-[519px] pt-2' />
                            <div className="flex flex-col w-full ml-[10%] ">
                                <h3 className='font-fira font-normal mt-4'>Artigos Trabalhados</h3>
                                <div className="text-azul flex">
                                    <a href="" className="w-52">Tratamento Terapêutico</a> <br />
                                    <a href="" className="w-52">Robótica na computação</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full h-[80vh] flex flex-wrap justify-center items-center relative overflow-hidden bg-gray-200">
                <h2 className="text-4xl font-tinos font-bold mb-4 w-full text-center">Componentes</h2>
                <div className="relative w-full h-full flex justify-center items-center">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 p-2 text-white bg-black bg-opacity-50 rounded-full"
                        aria-label="Slide anterior"
                    >
                        &#10094;
                    </button>
                    <div className="w-full h-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((image, index) => (
                                <div key={index} className="w-full h-full flex-shrink-0 flex justify-center">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-[48%] object-cover mt-[10vh]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 p-2 text-white bg-black bg-opacity-50 rounded-full"
                        aria-label="Próximo slide"
                    >
                        &#10095;
                    </button>
                </div>
            </section>
        </>
    );
}

export default Home;
