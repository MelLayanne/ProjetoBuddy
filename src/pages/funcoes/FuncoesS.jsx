import React from 'react';

export default function CompletePage() {
    return (
        <div className="bg-white">
            {/* Seção 1: Funções */}
            
            <section className="h-screen w-full">
                <div className="h-full bg-[url('https://wallpaperbat.com/img/532459-ndis-funding-for-autism-spectrum-disorder.jpg')] bg-no-repeat bg-cover bg-center z-10 w-full">
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
            <section className="py-16">
                <div className="text-center md:text-left mx-8 md:ml-16">
                    <h2 className="text-6xl font-tinos text-azul mb-4">Funções</h2>
                    <div className="flex justify-center md:justify-start mb-12">
                        <p className="text-3xl font-bold text-azul">Entenda</p>
                        <div className="ml-4 bg-azul h-1 w-36 mt-3"></div>
                    </div>
                    {/* Card 1 */}
                    <div className="flex flex-col md:flex-row items-center mb-12">
                        <img src="https://i.ibb.co/0Xx4ktf/image-8.png" alt="Emoções" className="w-60 mx-auto mb-4 md:mb-0 md:mr-8" />
                        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-azul mb-4">Reconhecimento de emoções</h3>
                            <p className="font-fira-sans text-base text-justify">
                                O Buddy utiliza imagens e animações para ajudar a criança a reconhecer expressões faciais,
                                como a alegria, tristeza, frustração e surpresa.
                            </p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col md:flex-row items-center mb-12">
                        <img src="https://i.ibb.co/SVRNz6b/image-10.png" alt="Interatividade" className="w-60 mx-auto mb-4 md:mb-0 md:mr-8" />
                        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-azul mb-4">Atividades interativas</h3>
                            <p className="font-fira-sans text-base text-justify">
                                O robô oferece uma variedade de atividades interativas projetadas para estimular o desenvolvimento
                                cognitivo e social das crianças, como jogos educativos e histórias interativas.
                            </p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex flex-col md:flex-row items-center mb-12">
                        <img src="https://i.ibb.co/ZdZ0sDr/image-9.png" alt="Gravação de mensagens" className="w-60 mx-auto mb-4 md:mb-0 md:mr-8" />
                        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-azul mb-4">Gravação de mensagens</h3>
                            <p className="font-fira-sans text-base text-justify">
                                A interface do robô permite que os responsáveis gravem mensagens para os seus filhos ouvirem durante o dia e se sentirem mais próximos.
                            </p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="flex flex-col md:flex-row items-center">
                        <img src="https://i.ibb.co/7RBqsSC/image-11.png" alt="Monitoramento" className="w-60 mx-auto mb-4 md:mb-0 md:mr-8" />
                        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-azul mb-4">Monitoramento e Relatórios</h3>
                            <p className="font-fira-sans text-base text-justify">
                                O robô oferece monitoramento em tempo real e relatórios detalhados do progresso da criança, garantindo uma análise precisa das interações.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 2: Benefícios */}
            <section className="py-16 bg-gray-100">
                <div className="text-center mx-8 md:ml-16">
                    <h2 className="text-6xl font-tinos text-azul mb-8">Benefícios</h2>
                    <div className="flex justify-center md:justify-start mb-12">
                        <p className="text-3xl font-bold text-azul">Descubra</p>
                        <div className="ml-4 bg-azul h-1 w-36 mt-3"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Benefício 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-azul mb-4">Educação Personalizada</h3>
                            <p className="font-fira-sans text-base text-justify">
                                Cada criança aprende em seu próprio ritmo. Nosso robô adapta as atividades de acordo com as necessidades individuais de cada uma.
                            </p>
                        </div>
                        {/* Benefício 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-azul mb-4">Segurança e Conforto</h3>
                            <p className="font-fira-sans text-base text-justify">
                                Nossa tecnologia garante que as interações sejam seguras e adequadas para todas as idades, promovendo um ambiente de conforto para as crianças.
                            </p>
                        </div>
                        {/* Benefício 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-azul mb-4">Interatividade Avançada</h3>
                            <p className="font-fira-sans text-base text-justify">
                                Através de jogos e atividades, o robô melhora a comunicação, a criatividade e as habilidades cognitivas das crianças.
                            </p>
                        </div>
                        {/* Benefício 4 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-azul mb-4">Relatórios Detalhados</h3>
                            <p className="font-fira-sans text-base text-justify">
                                Obtenha insights valiosos sobre o desenvolvimento do seu filho com relatórios que detalham o progresso e as áreas que necessitam de mais atenção.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 3: Testemunhos */}
            <section className="py-16">
                <div className="text-center mx-8 md:ml-16">
                    <h2 className="text-6xl font-tinos text-azul mb-8">Testemunhos</h2>
                    <div className="flex justify-center md:justify-start mb-12">
                        <p className="text-3xl font-bold text-azul">Depoimentos</p>
                        <div className="ml-4 bg-azul h-1 w-36 mt-3"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Testemunho 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="font-fira-sans text-base text-justify">
                                "O robô ajudou meu filho a entender melhor suas emoções. Ele agora consegue expressar o que sente com mais facilidade."
                            </p>
                            <p className="mt-4 text-right font-fira-sans text-azul">- João, pai de Lucas</p>
                        </div>
                        {/* Testemunho 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="font-fira-sans text-base text-justify">
                                "Minha filha adora as atividades interativas do robô. Ela fica super engajada e sempre quer brincar mais."
                            </p>
                            <p className="mt-4 text-right font-fira-sans text-azul">- Maria, mãe de Ana</p>
                        </div>
                        {/* Testemunho 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="font-fira-sans text-base text-justify">
                                "Os relatórios detalhados me ajudam a acompanhar o progresso do meu filho e saber onde ele precisa de mais ajuda."
                            </p>
                            <p className="mt-4 text-right font-fira-sans text-azul">- Pedro, pai de Gabriel</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 4: Contato */}
            <section className="py-16 bg-gray-100">
                <div className="text-center mx-8 md:ml-16">
                    <h2 className="text-6xl font-tinos text-azul mb-8">Contato</h2>
                    <div className="flex justify-center md:justify-start mb-12">
                        <p className="text-3xl font-bold text-azul">Fale Conosco</p>
                        <div className="ml-4 bg-azul h-1 w-36 mt-3"></div>
                    </div>
                    <form className="max-w-lg mx-auto">
                        <div className="mb-6">
                            <label className="block text-left font-fira-sans text-lg text-azul mb-2" htmlFor="nome">Nome</label>
                            <input type="text" id="nome" className="w-full p-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-left font-fira-sans text-lg text-azul mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-left font-fira-sans text-lg text-azul mb-2" htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" className="w-full p-3 border border-gray-300 rounded-lg" rows="4"></textarea>
                        </div>
                        <button type="submit" className="bg-azul text-white font-bold py-3 px-6 rounded-lg">Enviar</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
