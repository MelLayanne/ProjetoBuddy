    import React from 'react';
    import Slider from 'react-slick';
    import "slick-carousel/slick/slick.css"; 
    import "slick-carousel/slick/slick-theme.css";
    import img1 from '../../assets/jumpers.png';
    import img2 from '../../assets/Logo.png';
    import img3 from '../../assets/Logo.png';
    import img4 from '../../assets/Logo.png';
    import img5 from '../../assets/Logo.png';

    import "./Home.css";

    function Home() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        };

        return (
            <>
                <section className="h-screen w-full">
                    <div className="h-full bg-[url('https://i.ibb.co/X5tntdS/portrait-autistic.png')] bg-no-repeat bg-cover bg-center z-10 w-full">
                        <div className="bg-black bg-opacity-60 h-screen flex justify-center items-center text-center w-full">
                            <div className="text-white flex items-center justify-center h-full w-full text-center px-4">
                                <div className="ajuste">
                                    <div className="">
                                        <div className="titulo">
                                            <h1>BUDDY</h1>
                                        </div>
                                        <div className="primeiro_paragrafo">
                                            <p className='text-gray-400 text-justify'>Robô que auxilia responsáveis no desenvolvimento da fala, interação social e reconhecimento de emoções de crianças autistas de nível 2 entre 5 e 10 anos de idade. Possui integração com App, o que facilita a devolução de relatórios que analisam a evolução do autista.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="funcoes">
                    <div className="ajuste_do_texto">
                        <div className='titulo_da_segunda'>
                            <h2 className="p-0 m-0">Funções</h2>
                            <p className="m-0 text-cyan-500">Entenda</p>
                        </div>

                        <div className="imagens">
                            <div className="info_primeira">
                                <img src="https://i.ibb.co/0Xx4ktf/image-8.png" alt="" />
                                <div className="funcoes">
                                    <h3>Reconhecimento de emoções</h3>
                                    <div className="info">
                                        <p>O Buddy utiliza imagens e animações para ajudar a criança a reconhecer expressões faciais, como a alegria, tristeza, frustração e surpresa. Essa capacidade permite que a criança consiga discernir emoções.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info_primeira">
                                <img src="https://i.ibb.co/SVRNz6b/image-10.png" alt="" />
                                <div className="funcoes">
                                    <h3>Atividades interativas</h3>
                                    <div className="info">
                                        <p>O robô oferece uma variedade de atividades interativas projetadas para estimular o desenvolvimento cognitivo e social das crianças, como: jogos educativos e histórias interativas que ajudam a melhorar habilidades de comunicação e interação social de maneira divertida.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="imagens">
                            <div className="info_primeira">
                                <img src="https://i.ibb.co/ZdZ0sDr/image-9.png" alt="" />
                                <div className="funcoes">
                                    <h3>Gravação de mensagens</h3>
                                    <div className="info">
                                        <p>A interface do robô permite que os responsáveis gravem mensagens para os seus filhos ouvirem durante o dia e se sentirem mais próximos dos pais mesmo que estejam longe.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info_primeira">
                                <img src="https://i.ibb.co/7RBqsSC/image-11.png" alt="" />
                                <div className="funcoes">
                                    <h3>Atividades interativas</h3>
                                    <div className="info">
                                        <p>O robô oferece uma variedade de atividades interativas projetadas para estimular o desenvolvimento cognitivo e social das crianças, como: jogos educativos e histórias interativas que ajudam a melhorar habilidades de comunicação e interação social de maneira divertida.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="referencias">
                    <div className="terceira_section">
                        <h2>Referências</h2>
                        <div className="texto_base_cientifica">
                            <div className="linha">
                                <hr />
                                <div className="paragrafo_cientifico">
                                    <p>A ciência comprova a importância do desenvolvimento de robôs personalizados que auxiliam na terapia e na educação de crianças entre 5 e 10 anos e que se encaixam no nível 1 e 2 do Transtorno do Espectro Autista (TEA).</p>
                                    <p>Nesse sentido, pontuam-se maneiras de estimular a atenção, habilidades de comunicação, interação e aprendizado das crianças autistas através de animações que simulavam expressões humanas de forma simplificada na tela dos robôs, já que a falta de emoções nesses dispositivos facilitavam o interesse ao interagir com eles.</p>
                                    <p>Por consequência, há uma acentuada melhora na coordenação motora, comunicação e interação social. Pode-se comprovar então, que a ciência oferece embasamento teórico e prático para aplicação de robôs no tratamento terapêutico.</p>
                                </div>
                            </div>
                            <div className="imagen_terceira">
                                <img src={img1} alt="Corda" />
                                <div className="links">
                                    <h3>Artigos Trabalhados</h3>
                                    <div className="text-blue-600">
                                        <a href="" className="w-52">Tratamento Terapêutico</a> <br />
                                        <a href="" className="w-52">Robótica na computação</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="componentes">
                    <h2>Componentes</h2>
                    <Slider {...settings}>
                        <div className="slider-item">
                            <img src={img1} alt="Slide 1" />
                        </div>
                        <div className="slider-item">
                            <img src={img2} alt="Slide 2" />
                        </div>
                        <div className="slider-item">
                            <img src={img3} alt="Slide 3" />
                        </div>
                        <div className="slider-item">
                            <img src={img4} alt="Slide 4" />
                        </div>
                        <div className="slider-item">
                            <img src={img5} alt="Slide 5" />
                        </div>
                    </Slider>
                </section>
            </>
        );
    }

    export default Home;
