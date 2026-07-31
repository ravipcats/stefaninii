import heroImage from "../../../../assets/newsroom/news1.png";
import NewsArticleHero from "../NewsroomHero";
import Header from "../../../Header";
import Footer from "../../../Footer";
import ChatBotWidget from "../../../ChatBotWidget";
import NewsArticleTop from "./NewsArticleTop";
import NewsArticleContent from "./NewsArticleContent";
import NewsArticleImage from "./NewsArticleImage";
import one from "../../../../assets/newsroom/one/1.png";
import two from "../../../../assets/newsroom/one/2.png";
import three from "../../../../assets/newsroom/one/3.png";
import four from "../../../../assets/newsroom/one/4.png";
import five from "../../../../assets/newsroom/one/5.png";
import six from "../../../../assets/newsroom/one/6.png";
import seven from "../../../../assets/newsroom/one/7.png";
import MultiStepForm from '../../../MultiStepForm';
import RelatedArticles from "./RelatedArticles";

const articleContent = {
    title:
        "Executivas lideram áreas estratégicas da companhia e impulsionam inovação, negócios e cultura organizacional com mentalidade AI-First",

    paragraphs: [
        "São Paulo, março de 2026 – Em um cenário em que tecnologia, dados e inteligência artificial redefinem a forma como empresas operam e crescem, executivos têm papel decisivo na condução dessas mudanças. No Grupo Stefanini, consultoria tech global com mentalidade AI-First, mulheres ocupam posições estratégicas e conduzem iniciativas que impactam diretamente a gestão de pessoas, a cultura organizacional e o desenvolvimento de negócios com apoio de tecnologia, IA e dados.",

        "No Brasil, 43% dos cargos de gestão são ocupados por mulheres. No cenário global, elas representam 39% da liderança da companhia. Os números refletem uma política voltada à formação de novas lideranças, ao desenvolvimento interno e à valorização de talentos em áreas essenciais para a evolução do grupo.",

        "Mais do que presença em cargos executivos, trata-se de participação efetiva nas decisões que influenciam produtos, operações, estratégia, governança e inovação. Essa atuação amplia a diversidade de perspectivas nas tomadas de decisão e contribui para fortalecer um ambiente corporativo preparado para os desafios da era digital.",

        "A seguir, algumas das executivas que hoje contribuem diretamente para definir os próximos movimentos estratégicos do Grupo Stefanini."
    ]
};

const articleContent2 = {

    paragraphs: [
        "Graça Sajovic é sócia e vice-presidente do Grupo Stefanini. Também é presidente do Instituto Stefanini, braço social da empresa, e atua como conselheira do grupo e do Instituto Ayrton Senna. Com uma trajetória marcada pelo olhar atento às pessoas, Graça teve papel fundamental na construção da cultura organizacional da companhia. Para ela, mais do que tecnologia, as empresas são feitas de talentos — e preparar pessoas para um ambiente cada vez mais orientado por tecnologia, dados e inteligência artificial é um dos grandes desafios das organizações hoje. Além da sua atuação na governança e gestão, Graça, formada em Psicologia, trabalha para fortalecer a cultura de equidade dentro da empresa, garantindo que todos tenham acesso às mesmas oportunidades de crescimento e desenvolvimento. À frente do Instituto Stefanini, lidera iniciativas de capacitação profissional e inclusão social por meio da educação e da tecnologia, além de participar de projetos na América Latina voltados à formação de talentos e à preparação de profissionais para o futuro do trabalho em um contexto cada vez mais AI-First."
    ]
};
const articleContent3 = {

    paragraphs: [
        "Alessandra Sant’Ana é CEO da W3haus, agência do Grupo Stefanini. Com 27 anos de trajetória no mercado publicitário, lidera a integração entre criatividade, tecnologia e dados para transformar a forma como marcas constroem relacionamento com seus consumidores. Sob sua liderança, a W3haus vem ampliando o uso de IA, analytics e automação para desenvolver campanhas mais personalizadas, estratégias orientadas por dados e experiências digitais capazes de gerar impacto direto em performance de marca e resultados de negócio, como na campanha “Força G”, da Getnet, cujo filme-manifesto foi produzido com apoio de inteligência artificial, em um processo que combina inovação tecnológica e direção criativa humana. A executiva também tem impulsionado a integração entre criatividade e inteligência de dados dentro do ecossistema do grupo, conectando o trabalho da W3haus às capacidades analíticas da Gauge e reforçando a visão da agência de que dados e sensibilidade criativa - data & feelings - precisam caminhar juntos para gerar comunicação relevante."
    ]
};
const articleContent4 = {

    paragraphs: [
        "Bibiana Lopez é diretora global de Branding e PR do Grupo Stefanini. Com mais de 25 anos de experiência em branding e comunicação, Bibiana Lopez, diretora de marca e relações públicas global do Grupo Stefanini, tem como missão consolidar a imagem de uma consultoria tech global com mentalidade AI-First. Entre as iniciativas sob sua liderança, destaca-se a criação de uma equipe que já opera com agente de IA para ampliar capacidades de análise, monitoramento e geração de insights globais. Ao conectar branding, relações públicas e liderança executiva, Bibiana fortalece a identidade institucional e impulsiona a presença do Grupo Stefanini e suas 7 unidades negócios, nos territórios globais de tech, data & analytics, cyber, operations, marketing, financial tech, manufacturing e inteligência artificial."
    ]
};
const articleContent5 = {

    paragraphs: [
        "Arabela Del Cueto é Chief Revenue Officer (CRO) Latam do Grupo Stefanini e recentemente ampliou sua atuação ao assumir também responsabilidades estratégicas relacionadas à expansão de soluções baseadas em Inteligência Artificial na região. Com visão voltada à transformação digital, lidera a integração da IA aos modelos de negócio dos clientes, impulsionando eficiência, competitividade e geração de resultados.",
        "Para Arabela, a Inteligência Artificial já é uma realidade que redefine processos e decisões corporativas. Sob sua liderança, o grupo fortalece estratégias AI-First que aproximam empresas de soluções avançadas de IA, incluindo iniciativas de automação e inteligência aplicadas à gestão de ambientes multicloud, capazes de gerar monitoramento contínuo, insights preditivos e otimização automática do consumo de recursos em nuvem."
    ]
};
const articleContent6 = {

    paragraphs: [
        "Carla Alessandra Figueiredo, diretora de People & Performance Latam, e Daniele Brasil, gerente executiva da área no Grupo Stefanini, têm atuado diretamente na evolução da gestão de pessoas com o apoio de tecnologia, dados e inteligência artificial, atuando como lideranças na adoção de IA aplicada à área de People & Performance. Com trajetórias consolidadas em desenvolvimento de talentos, cultura organizacional e liderança de equipes, as executivas participam da incorporação de novas ferramentas e agentes digitais que vêm ampliando a capacidade analítica do RH, tornando processos de recrutamento, desenvolvimento e gestão de carreira mais eficientes, personalizados e orientados por dados. Em 2025, a área também liderou o Programa Embaixadores de IA, iniciativa interna que mobilizou colaboradores na criação de soluções práticas de inteligência artificial, com impactos no negócio, na experiência e no fortalecimento da cultura AI-First. A iniciativa faz parte de uma transformação mais ampla na forma como o RH atua dentro da organização. Ao integrar tecnologia às práticas de gestão de pessoas, a área passa a operar com maior capacidade de análise e antecipação de necessidades, sem abrir mão do olhar humano que sustenta decisões estratégicas sobre talentos, cultura e desenvolvimento profissional."
    ]
};
const articleContent7 = {

    paragraphs: [
        "Tania Herrezeel é diretora de Marketing do Grupo Stefanini nos Estados Unidos e Europa, onde lidera as estratégias de marketing e comunicação da companhia. Com mais de 16 anos de trajetória na empresa, conduz a integração entre marketing, comunicação e geração de demanda para fortalecer o posicionamento da Stefanini e apoiar o crescimento das diferentes linhas de negócio na região. Cada vez mais, Tania vem incorporando o uso de dados, automação e inteligência artificial nas estratégias de comunicação e relacionamento com o mercado, ampliando a personalização das campanhas, a geração de leads e a análise de performance. Também é responsável pela gestão da comunicação externa e pela coordenação das agências de relações públicas na região, contribuindo para fortalecer a presença global da Stefanini em um mercado cada vez mais orientado por tecnologia e dados."
    ]
};


const articleContent8 = {
    title:
        "Sobre o Grupo Stefanini",

    paragraphs: [
        "O Grupo Stefanini é uma consultoria tech global que domina o uso de Inteligência Artificial e cocria soluções sob medida para seus clientes progredirem em sua jornada digital, combinando presença global, ampla expertise técnica e um portfólio completo de serviços. Presente em 46 países, com 23 delivery centers em 5 continentes e mais de 35 mil colaboradores em todo o mundo, a consultoria organiza suas soluções em sete unidades de negócios: Technology, Cyber, Data & Analytics, Financial Tech, Operations, Marketing e Manufacturing, formando um grande ecossistema de inovação que entrega resultados relevantes e duradouros aos seus clientes. ",
        "Com diversas plataformas proprietárias de Inteligência Artificial, organizadas principalmente na suíte SAI (Stefanini Artificial Intelligence), o Grupo Stefanini combina dados, automação e IA para impulsionar a transformação de ponta a ponta. O Grupo Stefanini tornou-se referência acadêmica com o case “Criando uma Estratégia de Ecossistema na Era da AI” pela INSEAD e até hoje é estudado em escolas de negócios globais. Para mais informações, acesse stefanini.com.",

        "Informações para imprensa",
        "DFREIRE Comunicação e Negócios",
        "Tel: (11) 5105 - 7171",
        "Luciana Abritta – lucianaabritta@dfreire.com.br",
        "Marcela Martinez – marcelamartinez@dfreire.com.br",
        "Talita França – talita@dfreire.com.br"

    ]
};
export default function One() {
    return (
        <div className="bg-white text-black">
            <Header />
            <NewsArticleTop
                category="Brazil"
                date="19 days ago"
                title="Liderança feminina avança no Grupo Stefanini e já ocupa 43% da gestão no Brasil"
                image={heroImage}
            />
            <NewsArticleContent {...articleContent} />
            <NewsArticleImage
                image={one}
                alt="Graça Silva speaking at an event"
            />
            <NewsArticleContent {...articleContent2} />
            <NewsArticleImage
                image={two}
                alt="Graça Silva speaking at an event"
            />
            <NewsArticleContent {...articleContent3} />
            <NewsArticleImage
                image={three}
                alt="Graça Silva speaking at an event"
            />
            <NewsArticleContent {...articleContent4} />
            <NewsArticleImage
                image={four}
                alt="Graça Silva speaking at an event"
            />
            <NewsArticleContent {...articleContent5} />
            <NewsArticleImage
                image={five}
                alt="Graça Silva speaking at an event"
            />
            <NewsArticleImage
                image={six}
                alt="Graça Silva speaking at an event"
            />
            <NewsArticleContent {...articleContent6} />
            <NewsArticleImage
                image={seven}
                alt="Graça Silva speaking at an event"
            />
            <NewsArticleContent {...articleContent7} />
            <NewsArticleContent {...articleContent8} />
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