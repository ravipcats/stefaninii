import heroImage from "../../../../assets/newsroom/news7.png";
import NewsArticleHero from "../NewsroomHero";
import Header from "../../../Header";
import Footer from "../../../Footer";
import ChatBotWidget from "../../../ChatBotWidget";
import NewsArticleTop from "./NewsArticleTop";
import NewsArticleContent from "./NewsArticleContent";
import NewsArticleImage from "./NewsArticleImage";
import MultiStepForm from '../../../MultiStepForm';
import RelatedArticles from "./RelatedArticles";
import Image from "../../../../assets/newsroom/seven/img7.png";


const articleContent = {
    title:
        "Levantamento mostra por que o que domina a conversa cultural nem sempre se traduz em decisão no carrinho",

    paragraphs: [
        "São Paulo, abril de 2026 – O consumidor nunca participou tanto de conversas sobre valores, comportamento e posicionamento de marcas. Porém, essa intensidade de engajamento não se traduz, necessariamente, em decisão de compra, o que indica a necessidade de as empresas revisitarem a forma como constroem relacionamento com seus consumidores. Essa é a conclusão de um estudo feito pela Ecglobal, empresa da unidade de negócios Stefanini Marketing, do Grupo Stefanini, especializada em pesquisa de mercado e comunidades digitais, com base em monitoramento de redes sociais e enquete com consumidores.",

    ]
};

const articleContent2 = {

    paragraphs: [
        "Redes sociais, reality shows e eventos culturais se tornaram arenas onde opiniões se formam em tempo real, reputações são construídas e reconstruídas em horas, e marcas são cobradas por coerência. No entanto, na hora de decidir o que comprar, o consumidor continua guiado por critérios muito mais simples, como eficiência, praticidade e funcionalidade. Mais do que uma contradição, esse comportamento revela uma dualidade central do consumidor contemporâneo: ele transita entre o campo simbólico, onde expressa valores e posicionamentos, e o campo funcional, onde prioriza eficiência, praticidade e resolução de problemas no momento da escolha.",
        "O levantamento mostra que o comportamento do consumidor brasileiro se organiza a partir de duas camadas que coexistem, mas nem sempre se conectam. Há um plano mais visível, em que o consumidor participa ativamente das narrativas culturais, opina, julga e atribui significado a comportamentos, e outro mais prático, no qual as decisões de compra seguem orientadas por critérios funcionais ligados à resolução de necessidades do dia a dia. Essa dissociação evidencia um padrão recorrente, um gap entre cultura e conversão, no qual o que mobiliza atenção não é, necessariamente, o que direciona a escolha.",
        "A pesquisa combinou social listening com comunidades de insights, analisando mais de 40 milhões de comentários em redes sociais como X, Instagram, Reddit e Facebook, além de aprofundamento qualitativo com cera de 400 consumidores e Tracking quantitativo recorrente com 150 respondentes semanais. A partir dessa abordagem, a Ecglobal consegue capturar, em tempo real, como eventos culturais impactam emoções, narrativas e comportamentos, incluindo efeitos diretos em percepção de marca e intenção de compra, indo além do volume de conversas para entender como esses movimentos se formam e se traduzem, ou não, em decisão.",
        "O consumidor julga em tempo real, interpreta comportamentos e reage a estímulos culturais com muita velocidade. Esses ambientes geram impactos imediatos em percepção e até na intenção de compra. Porém, no momento da decisão, o cliente continua guiado por eficiência. A marca que confunde engajamento com intenção de compra corre o risco de otimizar presença cultural sem impacto real no negócio e deixar de usar esses espaços como fonte de inteligência estratégica”, afirma Luca Bon, CEO da Ecglobal.",
    ]
};

const articleContent3 = {
    title:
        "BBB é um recorte ilustrativo desse comportamento",

    paragraphs: [
        "Com audiência massiva e alcance multicanal, o programa Big Brother Brasil 26 opera, na prática, como um laboratório cultural em tempo real, onde narrativas são cocriadas pelo público, emoções se espalham rapidamente e pequenas ações dentro da casa geram repercussões imediatas fora dela, impactando diretamente reputação e relação com marcas.",
        "Ao longo da edição, o público deixou de ser espectador para atuar como agente ativo na construção de narrativas, julgando participantes em tempo real e atribuindo significado a comportamentos cotidianos. Um dos episódios mais discutidos foi a divisão de tarefas na cozinha da Xepa, uma questão prática que o público transformou em critério de caráter, responsabilidade e posicionamento dentro do jogo. Pequenas ações foram amplificadas, interpretadas e usadas como base para julgamentos coletivos, gerando alto engajamento e polarização nas redes.",
        "Fora desse contexto, o padrão se inverte. Os dados mostram que, no cotidiano, a limpeza é percebida principalmente como gestão da rotina, não como expressão de valores. Itens como máquina de lavar roupas ganham relevância por reduzir esforço e economizar tempo, enquanto durabilidade, facilidade de uso e eficiência lideram a percepção de valor.",
        "Esse contraste é o principal insight do estudo: engajamento cultural e intenção de compra não são a mesma coisa. O consumidor participa ativamente das narrativas, opina, cobra e se posiciona, mas, quando chega ao ponto de decisão, os critérios mudam.",
        "A presença em grandes plataformas culturais, como o BBB, segue sendo estratégica para construção de significado e fortalecimento de marca. “Portanto, não vence quem aparece mais, mas quem melhor interpreta esses sinais e os transforma em decisão”, finaliza o CEO da Ecglobal.",


    ]
};


const articleContent4 = {
    title:
        "Sobre o Grupo Stefanini",

    paragraphs: [
        "O Grupo Stefanini é uma consultoria tech global que domina o uso de Inteligência Artificial e cocria soluções sob medida para seus clientes progredirem em sua jornada digital, combinando presença global, ampla expertise técnica e um portfólio completo de serviços. Presente em 46 países, com 23 delivery centers em 5 continentes e mais de 35 mil colaboradores em todo o mundo, a consultoria organiza suas soluções em sete unidades de negócios: Technology, Cyber, Data & Analytics, Financial Tech, Operations, Marketing e Manufacturing, formando um grande ecossistema de inovação que entrega resultados relevantes e duradouros aos seus clientes.",
        "Com diversas plataformas proprietárias de Inteligência Artificial, organizadas principalmente na suíte SAI (Stefanini Artificial Intelligence), o Grupo Stefanini combina dados, automação e IA para impulsionar a transformação de ponta a ponta. O Grupo Stefanini tornou-se referência acadêmica com o case Criando uma Estratégia de Ecossistema na Era da AI pela INSEAD e até hoje é estudado em escolas de negócios globais. Para mais informações, acesse stefanini.com.",
        "Informações para Imprensa:",
        "DFREIRE Comunicação e Negócios",
        "WhatsApp: (11) 97399-0031",
        "Contatos:",
        "Luciana Abritta – lucianaabritta@dfreire.com.br",
        "Marcela Martinez – marcelamartinez@dfreire.com.br",
        "Talita França – talita@dfreire.com.br",
        "Thayná Franzo – thayna@dfreire.com.br",
    ]
};


export default function Seven() {
    return (
        <div className="bg-white text-black">
            <Header />
            <NewsArticleTop
                category="Brazil"
                date="19 days ago"
                title="Engajamento não é conversão: pesquisa da Ecglobal sobre BBB 26 revela que valores mobilizam, mas eficiência define a compra"
                image={heroImage}
            />
            <NewsArticleContent {...articleContent} />
            <NewsArticleImage
                image={Image}
                alt="Graça Silva speaking at an event"
            />
            <NewsArticleContent {...articleContent2} />
            <NewsArticleContent {...articleContent3} />
            <NewsArticleContent {...articleContent4} />
            <RelatedArticles
                currentId={1}
                currentRegion="Brazil"
            />
            <MultiStepForm />
            <Footer />
            <ChatBotWidget />

        </div>
    );
}