import heroImage from "../../../../assets/newsroom/news4.png";
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
        "Desenvolver ficou mais rápido, barato e acessível, e isso está mudando o valor dos sistemas dentro das organizações",

    paragraphs: [
        "Nos últimos meses, o debate sobre o suposto “fim do software” ganhou espaço entre executivos e líderes de tecnologia. A provocação chama atenção, mas parte de uma premissa equivocada. O desenvolvimento de software não está desaparecendo. O que está sendo profundamente transformado é o papel que o software ocupa dentro das empresas.",
        "Nunca foi tão simples criar sistemas. A combinação de inteligência artificial, automação e novas arquiteturas reduziu drasticamente o tempo e o custo necessários para transformar uma ideia em código funcional. O que antes exigia grandes equipes, longos ciclos de desenvolvimento e investimentos elevados hoje pode ser feito de forma muito mais ágil. Essa mudança altera a lógica de valor do software.Quando algo deixa de ser difícil, deixa também de ser escasso. E, quando deixa de ser escasso, deixa de ser o principal diferencial competi ivo.",
        "Durante décadas, o software foi tratado como um ativo estratégico quase imutável. Grandes sistemas corporativos levaram anos para ser construídos e passaram a sustentar processos críticos, decisões e modelos de negócio inteiros. O esforço envolvido em sua criação funcionava como uma barreira de entrada. Mudar era caro, demorado e arriscado. Permanecer parecia a opção mais segura.",
        "Esse cenário não existe mais. Hoje, a facilidade de desenvolver expõe um novo risco: a dependência de sistemas que evoluem mais lentamente do que o próprio negócio. Não se trata de falhas técnicas, mas de limitações estruturais. Muitos softwares foram concebidos para um ambiente mais previsível, com mudanças graduais e ciclos longos de planejamento. Em um mundo marcado por volatilidade, esse descompasso se torna evidente. O problema, portanto, não é tecnológico. É estratégico.",
        "Ainda é comum encontrar empresas que tratam software como algo que se compra, se implementa e se preserva ao máximo. Essa mentalidade perdeu aderência à realidade atual. Software deixou de ser um produto acabado e passou a ser um elemento vivo, que precisa ser constantemente revisto, ajustado e, em alguns casos, substituído.",
        "A inteligência artificial acelera esse movimento. Ao reduzir o esforço de codificação, facilitar testes e automatizar tarefas de engenharia, ela desloca o foco do “construir sistemas” para o “fazer sistemas evoluírem”. O valor já não está no tamanho ou na complexidade do software, mas na capacidade de adaptá-lo rapidamente quando o contexto muda.",
        "Isso redefine o papel da tecnologia nas organizações. O diferencial competitivo não está mais em qual sistema uma empresa utiliza, mas na rapidez com que consegue transformá-lo para atender novas demandas, novos clientes e novos modelos de negócio. A pergunta estratégica deixa de ser “qual software adotamos” e passa a ser “o quanto conseguimos mudar”.",
        "Essa mudança exige uma postura diferente da liderança. Em vez de proteger estruturas existentes a qualquer custo, é preciso criar ambientes tecnológicos flexíveis, capazes de conviver com o novo sem descartar o que ainda gera valor. Não se trata de abandonar sistemas consolidados, mas de evitar que eles se tornem obstáculos à evolução.",
        "Empresas que compreenderem essa transição estarão à frente na capacidade de transformar tecnologia em resultado. Elas usarão a facilidade de desenvolvimento para criar soluções mais aderentes à sua realidade, reduzir dependências excessivas e ganhar velocidade na tomada de decisão.",
        "O software continua sendo relevante. O que mudou foi a forma como ele cria valor. Em um ambiente de transformação constante, rigidez virou fragilidade — e adaptação passou a ser a principal vantagem competitiva.",
        "(*) Fabio Caversan é CTO do Grupo Stefanini, consultoria tech global com mindset AI-First.",




    ]
};


export default function Four() {
    return (
        <div className="bg-white text-black">
            <Header />
            <NewsArticleTop
                category="Brazil"
                date="19 days ago"
                title="O software ainda importa — mas não da forma como as empresas imaginam"
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