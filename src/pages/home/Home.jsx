import "./Home.css"
function Home() {
    return (
        <>
        <section className="h-screen">

            <div className="justificar">
                <div className="escuro">

                    <div className="texto">

                        <div className="ajuste">

                            <div className="titulo">
                                <h1>
                                    Buddy
                                </h1>
                            </div>
                            <div className="primeiro_paragrafo">

                                <p>Robô que auxilia responsáveis no desenvolvimento da fala, interação social e reconhecimento de emoções de crianças autistas de nível 2 entre 5 e 10 anos de idade.  Possui integração com App, o que facilita a devolução de relatórios que analisam a evolução do autista.</p>
                            </div>

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
                <h3>Reconhecimento de emoções</h3>
                <div className="textinho"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illo delectus soluta id sint nulla dolores aspernatur ab labore, sequi doloremque, cum distinctio, eum vel eveniet minus animi. Dolores, vero.</p></div>
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