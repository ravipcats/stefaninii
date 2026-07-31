import heroImage from "../../../../assets/newsroom/news3.png";
import NewsArticleHero from "../NewsroomHero";
import Header from "../../../Header";
import Footer from "../../../Footer";
import ChatBotWidget from "../../../ChatBotWidget";
import NewsArticleTop from "./NewsArticleTop";
import NewsArticleContent from "./NewsArticleContent";
import NewsArticleImage from "./NewsArticleImage";
import MultiStepForm from '../../../MultiStepForm';
import RelatedArticles from "./RelatedArticles";

const articleContent = {
    title:
        "Executivas lideram áreas estratégicas da companhia e impulsionam inovação, negócios e cultura organizacional com mentalidade AI-First",

    paragraphs: [
        "A ascensão da inteligência artificial, combinada ao uso intensivo de dados, inaugurou uma nova geração de ataques digitais: hiperpersonalizados, contextuais e cada vez mais difíceis de detectar. Não se trata mais de ameaças massificadas, campanhas genéricas ou tentativas aleatórias. Os ataques agora são mais precisos, conhecem o comportamento do usuário, simulam padrões legítimos e exploram, em tempo real, fragilidades específicas de cada jornada. Esse movimento redefine o próprio conceito de risco no sistema financeiro.",
        "Se antes a preocupação estava concentrada na proteção de perímetro e em regras estáticas, hoje o desafio passa a ser acompanhar uma dinâmica em que o ataque aprende, se adapta e evolui continuamente. A fraude já não é mais um evento isolado: ela passou a fazer parte de um ecossistema organizado, com uso sofisticado de IA, automação e engenharia social.",
        "Levantamento do Gartner reforça a dimensão desse cenário: nos últimos 12 meses, 62% das organizações sofreram ataques com deepfake envolvendo engenharia social ou exploração de processos automatizados, enquanto 32% enfrentaram ataques a aplicações de IA baseados na exploração de prompts.",
        "Na prática, isso significa que a defesa tradicional já não é suficiente. Modelos baseados apenas em regras, listas de bloqueio ou análises retrospectivas não conseguem acompanhar a velocidade e a complexidade desse novo cenário. Quando a fraude é detectada, muitas vezes, o dano já aconteceu.",
        "A resposta precisa mudar de lógica. O combate à fraude passa a exigir inteligência contextual, capacidade de análise em tempo real e integração ao longo de toda a jornada financeira, do onboarding à transação. É nesse ponto que a inteligência artificial passa a ser um elemento central de defesa, e não somente uma ferramenta de eficiência.",
        "Mas não qualquer IA. O que ganha relevância agora são modelos capazes de interpretar contexto, correlacionar sinais e agir em microssegundos. Sistemas que não apenas detectam anomalias, mas compreendem comportamento, combinando dados de dispositivo, padrões transacionais, identidade digital e sinais de rede para tomar decisões dinâmicas.",
        "Esse avanço traz um novo paradigma: a segurança deixa de ser reativa e passa a ser adaptativa. Na prática, vemos três movimentos importantes nesse novo cenário.O primeiro é o fortalecimento de camadas biométricas e de prova de vida, que evoluem para identificar manipulações sintéticas, deepfakes e tentativas de fraude baseadas em IA. Não basta reconhecer uma face ou um documento, é preciso validar a integridade do canal e a autenticidade da interação.",
        "O segundo é a consolidação de arquiteturas de identidade inteligente, baseadas em princípios de zero trust. A identidade passa a ser um conjunto dinâmico de atributos, monitorado continuamente ao longo da jornada. Cada interação passa a ser validada com base em risco, contexto e comportamento.",
        "O terceiro é a integração entre áreas que historicamente operavam de forma isolada. Segurança, prevenção à fraude, TI e experiência do cliente passam a atuar de forma coordenada. A fragmentação, muitas vezes causada por uma combinação de sistemas desconectados, não só aumenta a complexidade operacional, como amplia superfícies de risco.",
        "É nesse ponto que a arquitetura tecnológica passa a ter um papel crítico. Ambientes fragmentados, construídos como verdadeiros “frankensteins” de soluções, dificultam a correlação de dados e atrasam a resposta a incidentes. Já arquiteturas integradas permitem orquestrar informações em tempo real, reduzir latência e tomar decisões mais precisas.",
        "Essa mudança também impacta a forma como medimos eficiência em segurança. Indicadores tradicionais, como número de fraudes detectadas, passam a dividir espaço com métricas mais sofisticadas: tempo médio de detecção, tempo de resposta, redução de falsos positivos e impacto na experiência do cliente. O objetivo não é apenas bloquear fraude, mas fazer isso sem fricção desnecessária.O desafio, portanto, não é apenas tecnológico, é estrutural.",
        "A hiperpersonalização dos ataques exige uma resposta igualmente sofisticada, baseada em dados, integração e capacidade de adaptação contínua. Segurança passa a ser uma disciplina transversal, que sustenta a confiança no sistema financeiro, deixando de ser um componente isolado.",
        "No fim, a equação é clara: quanto mais inteligente o ataque, mais inteligente precisa ser a defesa. E essa inteligência não está apenas na tecnologia, mas na capacidade das instituições de repensar suas arquiteturas, seus processos e sua forma de operar em um ambiente onde o risco evolui na mesma velocidade da inovação.",

        "*Jorge Iglesias é CEO da Topaz, empresa do Grupo Stefanini especializada em soluções financeiras digitais.Conteúdos relacio",




    ]
};


export default function Three() {
    return (
        <div className="bg-white text-black">
            <Header />
            <NewsArticleTop
                category="Brazil"
                date="19 days ago"
                title="Hiperpersonalização dos ataques digitais: quando a IA transforma risco em escala"
                image={heroImage}
            />
            <NewsArticleContent {...articleContent} />
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