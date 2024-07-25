import "./Home.css"
function Home() {
    return (
        <>
        <section className="h-screen">

            <div className="justificar">
                <div className="escuro">

                    <div className="texto">

                        <div className="ajuste">
                            <div className="">
                            <div className="titulo">
                                <h1>
                                    Buddy
                                </h1>
                            </div>
                            <div className="primeiro_paragrafo">

                                <p>Robô que auxilia responsáveis no desenvolvimento da fala, interação social e reconhecimento de emoções de crianças autistas de nível 2 entre 5 e 10 anos de idade.  Possui integração com App, o que facilita a devolução de relatórios que analisam a evolução do autista.</p>
                            </div></div>

                        </div>
                    </div>


                </div>
            </div>
        </section>
        
        <section className="h-screen">
            <div className="ajuste_do_texto">
            <h2>Funções</h2>
            
            <div className="imagens">
               <div className="info_primeira">
                <img src="https://i.ibb.co/0Xx4ktf/image-8.png" alt="" />
                <div className="funcoes">
                <h3>Reconhecimento de emoções</h3>
                <div className="info"><p>O Buddy utiliza imagens e animações para ajudar a criança a reconhecer expressões faciais, como a alegria, tristeza, frustração e surpresa. Essa capacidade permite que a criança consiga discernir emoções.</p></div></div>
               </div>

                <img src="https://i.ibb.co/SVRNz6b/image-10.png" alt="" />
            </div>
            <div className="imagens">
                <img src="https://i.ibb.co/7RBqsSC/image-11.png" alt="" />
                <img src="https://i.ibb.co/ZdZ0sDr/image-9.png" alt="" />
            </div>
            
            
            </div>
        </section>
        </>
    )
}

export default Home