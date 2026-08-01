import heroImage from "../../../../assets/newsroom/news9.png";
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

    paragraphs: [
        "Em 2026, a diferença entre empresas que estão crescendo de forma consistente e aquelas que apenas reagem estará, mais do que nunca, na maneira como tratam seus dados. Com o avanço das aplicações de inteligência artificial, transformar informação em ação deixa de ser diferencial e passa a ser requisito para competir em alto nível.",
        "A conversa sobre dados deixou de ser técnica: hoje, ela é estratégica e deve estar no centro das discussões de planejamento. Mais do que prever o futuro, é hora de consolidar no plano de 2026 os pilares que já provam impacto em 2025 e cuja ausência já começa a custar caro.",
        "Três pontos se destacam como prioridades a considerar: Data Products, Agentic Analytics e Decision Intelligence. Eles representam algo além de tecnologias: uma mudança de mentalidade que já está em curso e que separa quem consegue provar ROI de IA de quem ainda está testando em projetos isolados.",

        "Data Products: estruturando o uso de dados em escala",
        "Em 2026, muitas empresas ainda buscam implementar soluções de inteligência artificial, mas poucas conseguiram dar o salto para uma mentalidade AI First. O próximo passo, portanto, não é apenas testar IA em processos isolados, mas repensar como os dados circulam na organização.",
        "É nesse contexto que surgem os data products, estruturas que organizam, validam e entregam conjuntos de dados prontos para uso, com governança bem definida. O objetivo não é apenas armazenar informações, mas torná-las acessíveis, confiáveis e aplicáveis à rotina de negócio. Isso exige uma mudança de modelo: do controle centralizado para a governança federada, em que diferentes áreas ganham autonomia sobre seus dados sem abrir mão da segurança.",

        "Na prática, os data products aceleram todo o ciclo: da coleta ao uso. No marketing, por exemplo, é possível automatizar a captura de dados digitais diretamente das interfaces, validar e qualificar informações em tempo real, e gerar visualizações inteligentes que entregam insights prontos para ação. Esse fluxo reduz a dependência de análises manuais e aumenta a velocidade das decisões.",
        "Agentic Analytics: IA que age, não só analisa",
        "Uma vez que os dados estão organizados e fluindo com eficiência, o passo seguinte é transformar análise em ação. É aí que entra o conceito de agentic analytics, com agentes autônomos que usam IA para executar tarefas e decisões táticas no dia a dia.",
        "Esses agentes funcionam como extensões inteligentes das equipes: absorvem dados, aprendem com o contexto e automatizam decisões que antes exigiam intervenção humana. O objetivo não é substituir pessoas, mas potencializar seu trabalho, liberando tempo para escolhas mais estratégicas.",

        "No mercado, esse movimento já entrega resultados mensuráveis em vendas e atendimento, duas áreas onde a pressão por eficiência operacional e ROI é mais direta e visível. Nesses contextos, a IA atua como copiloto: antecipa necessidades, prioriza leads, sugere respostas e executa ações em escala.",
        "Por isso, não surpreende que esses agentes venham sendo associados a figuras como os super atendentes ou super gerentes: profissionais potencializados pela IA, capazes de oferecer interações mais rápidas, precisas e contextuais.",

        "Decision Intelligence: o salto da decisão baseada em dados",

        "Com dados bem estruturados e ações táticas automatizadas, o próximo nível é tomar decisões complexas com suporte da inteligência artificial. Esse é o campo do Decision Intelligence.",
        "Segundo o Gartner, 75% das organizações globais devem adotar práticas de Decision Intelligence no próximo ano, acelerando decisões com base em dados e IA. O cenário atual, porém, ainda está distante: apenas 10% dos líderes de negócios afirmam ter insights suficientes para tomar decisões com segurança, de acordo com a Google Cloud.",

        "O motivo é simples: quem não conseguir encurtar o caminho entre dado e decisão — e provar o impacto disso em resultados — vai perder orçamento para quem consegue. Muitas empresas já buscam esse modelo, mesmo sem nomeá-lo como tal. Incorporar o termo no planejamento agora é estratégico, pois dá clareza e diferenciação em relação ao mercado. Entretanto, para que isso funcione na prática, é preciso superar alguns mitos. Um deles é achar que basta plugar um ChatGPT e esperar que ele resolva tudo, porém é necessário ferramentas mais focadas e assertivas que considerem pontos como:",
        "• Ambientes multimodais, que integrem não apenas dados quantitativos, mas também informações qualitativas — como textos de atendimento, reviews em app stores, feedbacks de clientes, etc. Esse tipo de dado enriquece o contexto e melhora a qualidade das decisões.",

        "• Composability de IA, ou seja, criar agentes especializados por área de decisão. Um único modelo genérico não entende a fundo o que é preciso para decidir sobre crédito, precificação, churn ou aquisição. A combinação de modelos estatísticos com LLMs e outras arquiteturas específicas traz mais precisão, menor custo e mais aderência à realidade do negócio.",
        "Mais do que um novo termo, Decision Intelligence representa um novo modelo operacional, no qual o dado deixa de ser só “insumo para análise” e se transforma em instrumento direto de decisão, com agilidade, consistência e inteligência.",

        "A corrida por dados já não é novidade. O que define quem avança agora é a capacidade de usar dados para decidir melhor, mais rápido e provar isso em resultados concretos. Data Products, Agentic Analytics e Decision Intelligence não são apostas para o futuro. Já estão moldando quem lidera e quem perde espaço. Quem agir agora terá mais do que eficiência; terá o argumento mais valioso do momento: ROI real com IA.",
        "*Felipe Rodriguez é CEO da Gauge, empresa que integra a unidade de negócios Stefanini Marketing.",

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