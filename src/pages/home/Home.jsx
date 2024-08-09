import React, { useState, useEffect } from 'react';


import img1 from '../../assets/jumpers.png';
import img2 from '../../assets/arduino mega.png';
import img3 from '../../assets/protoboard.png';
import img4 from '../../assets/bluetooth.png';
import ima from '../../assets/sensorS.png';
import img6 from '../../assets/sensorL.png';
import img5 from '../../assets/Logo.png';
import corda from '../../assets/corda 1.png';
import k from '../../assets/Kau.png'
import instagram from '../../assets/instagram 3 (1).png'
import linkedin from '../../assets/linkedin 11 (1).png'
import em from '../../assets/o-email 11.png'

function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3); // Mostrando 3 imagens por vez

    const images = [
        img1,
        img2,
        img3,
        img4,
        ima,


    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsPerSlide(1); // 1 imagem no mobile
            } else {
                setItemsPerSlide(3); // 3 imagens no desktop
            }
        };

        handleResize(); // Configura a quantidade inicial de itens por slide com base no tamanho da tela
        window.addEventListener('resize', handleResize); // Adiciona ouvinte de redimensionamento

        return () => {
            window.removeEventListener('resize', handleResize); // Limpa o ouvinte na desmontagem
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / itemsPerSlide));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(images.length / itemsPerSlide)) % Math.ceil(images.length / itemsPerSlide));
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
                <div className="flex flex-col md:block w-full md:w-full pt-8 pl-0 font-light text-2xl">
                    <div className="titulo_da_segunda text-center md:text-left ml-[50px]">
                        <h2 className="m-0 font-tinos text-6xl">Funções</h2>
                        <div className="flex justify-center md:justify-start">
                            <p className="m-0 font-tinos font-bold text-azul pl-0.5">Entenda</p>
                            <div className="ml-4 bg-azul h-4 w-36 mt-3 ">
                                <hr className="text-azul" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 pl-0 font-tinos font-light text-2xl flex flex-col md:flex-row md:flex-wrap justify-center md:justify-evenly">
                        <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[30rem] mb-8">
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

                        <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[30rem] mb-8">
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

                        <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[30rem] mb-8">
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

                        <div className="flex flex-col items-center m-0 w-full md:flex-row md:w-[30rem]">
                            <img src="https://i.ibb.co/7RBqsSC/image-11.png" alt="" className="w-60 mt-1 mx-auto" />
                            <div className="mt-4 md:mt-0 text-center md:text-left">
                                <h3 className="text-azul font-bold">Monitoramento e Relatórios</h3>
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
                    </div>
                </div>
            </section>


            <section className="py-8 h-full">
                <div className="terceira_section">
                    <h2 className='font-tinos ml-[50px] font-light text-6xl'>Referências</h2>
                    <div className='flex '><p className='text-azul font-tinos font-bold ml-[50px] text-[20px]'>Base cientifica</p>
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
                        <div className="pr-[3%]">
                            <img src={corda} alt="Corda" className='w-[80vh]' />
                            <div className='flex'><h3 className='pl-11'>Artigos Trabalhados</h3>
                            <div><a className='text-azul w-[30px] md:pl-11' href="">Tratamento Terapêutico</a><br /> <a className='text-azul w-[30px] md:p-11' href="">Robótica na educação</a></div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nova Seção de Slide */}
            <section className="py-8 mb-[20vh] mt-[10vh]">
                <h2 className="font-tinos text-6xl text-center md:pl-[50px] pb-[30px]">Componentes</h2>
                <div className="flex flex-col items-center ">


                    <div className="relative w-full max-w-6xl">
                        <div className="overflow-hidden rounded-lg ">
                            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}>
                                {images.map((image, index) => (
                                    <div className={`flex-none w-full md:w-[33.33%]`} key={index}> {/* Ajuste para desktop */}
                                        <img src={image} alt={`Slide ${index + 1}`} className="w-[300px] ml-auto mr-auto h-[200px] object-cover" /> {/* Tamanho maior */}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-azul px-4 py-2">❮</button>
                        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-azul px-4 py-2">❯</button>
                    </div>
                </div>
            </section>
            <section>

            <div className=" text-center  md:text-left ml-[50px] mr-10">
                        <h2 className="m-0 font-tinos text-6xl ">Sobre nós</h2>
                       <div className='flex mb-[50px]'>
                        <p className='font-fira text-azul'>Conheça</p>
                        <div className="ml-4 bg-azul h-4 w-36 mt-1 ">
                                <hr className="text-azul" />
                            </div></div> 
                        <div className="flex justify-center md:justify-start mb-10">
                            <p className="m-0 font-fira  pl-0.5">Trabalhando juntas para o sucesso do projeto Buddy, unindo habilidades e conhecimentos diversos para trazer soluções criativas 
                            e eficientes, e com muito comprometimento, fornecer a melhor experiência  para os usuários.</p>
                            
                        </div>
                        <div className="flex flex-col justify-center mr-[2vh] items-center space-y-6 md:flex-row md:space-y-0 md:space-x-10">
  {/* Card */}
  <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[20rem] transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-100 mb-6 md:mb-0">
    <img className="w-full h-48 object-cover md:w-1/3" src={k} alt="Kauhanny" />
    <div className="p-4 text-left md:w-2/3">
      <h4 className="font-bold text-lg mb-2">Kauhanny Santos</h4>
      <p className="text-gray-600">17 anos</p>
      <p className="text-gray-600">Ensino médio T.I.</p>
      <p className="text-gray-600 mb-4">UNASP-SP</p>
      <div className="flex justify-start space-x-4">
        <img className="w-6 h-6" src={instagram} alt="Instagram" />
        <img className="w-6 h-6" src={linkedin} alt="LinkedIn" />
        <img className="w-6 h-6" src={em} alt="Email" />
      </div>
    </div>
  </div>

  {/* Card */}
  <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[20rem] transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-100 mb-6 md:mb-0">
    <img className="w-full h-48 object-cover md:w-1/3" src="https://media.licdn.com/dms/image/v2/D4D03AQHr9eKiQT65ZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710469014338?e=1728518400&v=beta&t=_l0PLQwHIctnf52_iguHfKZTXGJI78lFteb4G1wYx5E" alt="Kauhanny" />
    <div className="p-4 text-left md:w-2/3">
      <h4 className="font-bold text-lg mb-2">Kauhanny Santos</h4>
      <p className="text-gray-600">17 anos</p>
      <p className="text-gray-600">Ensino médio T.I.</p>
      <p className="text-gray-600 mb-4">UNASP-SP</p>
      <div className="flex justify-start space-x-4">
        <img className="w-6 h-6" src={instagram} alt="Instagram" />
        <img className="w-6 h-6" src={linkedin} alt="LinkedIn" />
        <img className="w-6 h-6" src={em} alt="Email" />
      </div>
    </div>
  </div>
</div>


                        </div>
            </section>
        </>
    );
}

export default Home;
