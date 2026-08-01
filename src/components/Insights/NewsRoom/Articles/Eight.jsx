import heroImage from "../../../../assets/newsroom/8.png";
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
        "A inovação real acontece na intersecção da tecnologia com as pessoas – e isso precisar estar no centro de qualquer negócio",

    paragraphs: [
        "Em sua edição 2026, o SXSW reforçou sua posição como um dos grandes motores de inovação global. Austin, no Texas, foi por uma semana um território em que a tecnologia não foi apenas apresentada, mas confrontada com a realidade cultural e social.",
        "Acompanhar as discussões do festival em 2026 é mergulhar em um ecossistema que gera tendências e provoca ideias, mas que, frequentemente, nos deixa com mais perguntas do que respostas.",
        "Em um mundo cada vez mais automatizado, esse paradoxo é, na verdade, nossa maior vantagem competitiva: na era da Inteligência Artificial, o valor do ser humano está menos na capacidade de processar dados e mais na habilidade de formular as perguntas certas. A curiosidade e o pensamento crítico tornaram-se as ferramentas de gestão mais valiosas do nosso tempo.",
        "O futuro da IA não se trata do uso da tecnologia, e sim de sua integração invisível e funcional na vida humana. A era do encantamento tecnológico deu lugar ao pragmatismo. IA passa a ser infraestrutura, e isso exige uma mudança de foco das empresas.",
        "Nessa transformação, o encantamento com as possibilidades tecnológicas deve abrir espaço para “o que é possível fazer hoje com as ferramentas existentes”. Não basta adotar ferramentas de IA ou disponibilizá-las para as equipes. O verdadeiro valor está em redesenhar os processos. É repensar o negócio a partir do zero, considerando um novo contexto em que a inteligência artificial já é parte da infraestrutura.",
        "Essa lógica exige um exercício menos confortável: voltar à prancheta. Rever fluxos, questionar etapas, eliminar camadas de complexidade acumuladas ao longo dos anos. Só quando a tecnologia é incorporada desde a origem dos processos — e não apenas adicionada ao final — é que os ganhos se tornam estruturais e escaláveis.",
        "De ferramentas de big data à construção de data lakes, avançamos para o machine learning, deep learning, IA generativa e, mais recentemente, a IA agêntica. Mas o salto real não está na tecnologia em si, mas na forma como reorganizamos o trabalho ao redor dela.",
        "Nessa jornada, o aprendizado contínuo e a capacidade de otimizar o uso das ferramentas é muito mais importante do que “reinventar a roda” a cada grande salto tecnológico. É nesse caminho de aprendizado contínuo que estamos saindo de um modelo em que solicitamos tarefas simples para máquinas e passamos a coordenar agentes digitais autônomos, que realizam workflows inteiros.",
        "A autonomia que a IA agêntica traz, porém, não exclui o ser humano da equação.Pelo contrário: reposiciona cada um de nós como orquestradores das ações digitais.As lideranças passam a atuar como curadoras estratégicas, responsáveis por interpretar cenários e garantir que o foco permaneça onde sempre deveria estar: nas pessoas.",
    ]
};


const articleContent2 = {
    title:
        "Tudo parece mudar, mas nem tudo muda",

    paragraphs: [
        "O ritmo das transformações tecnológicas é tão acelerado que é comum perdermos de vista a perspectiva do tempo. Nesse momento, olhar 100 anos para o passado pode fazer uma enorme diferença. Esse foi o convite que Andrew Ross Sorkin, jornalista do The New York Times, fez ao falar de seu novo livro, em que conta a história do crash da Bolsa de Nova York em 1929.",
        "Ele comparou a década de 20 do século passado com essa década, encontrando vários pontos em comum: uma “bolha tecnológica” (no passado, o rádio; hoje a IA) e um movimento intenso de democratização do mercado financeiro, que levou boa parte da população a ver a Bolsa como uma aposta.",
        "O ponto aqui não é julgar até que ponto essa analogia está correta – é entender que, no fim das contas, o ser humano continua sendo o mesmo. O entorno tecnológico é completamente diferente, mas as reações emocionais e as armadilhas psicológicas continuam sendo as mesmas. E enquanto olharmos mais para a tecnologia do que para as pessoas, vamos continuar perdendo o foco das transformações.",
    ]
};

const articleContent3 = {
    title:
        "O digital, o físico e a intuição humana",

    paragraphs: [
        "O que mais se destacou neste SXSW foi a visão de equilíbrio entre a eficiência dos algoritmos e a profundidade da experiência humana. A tecnologia avançou tanto que o debate passa a girar em torno daquilo que nos torna únicos.",
        "A escritora Jennifer Breheny Wallace trouxe uma reflexão importante sobre o momento que vivemos. “Se as máquinas assumem cada vez mais tarefas, onde as pessoas encontram a sensação de que importam?”. Ela defende que a criatividade, a eficiência e a saúde das empresas dependem do que ela chama de “mattering”: fazer com que as pessoas se sintam importantes.",
        "Outro antídoto contra a padronização das IAs atende pelo nome de Pensamento Exótico (“Exotic Thinking”). A ideia é que algoritmos operam nivelando por baixo, criando padrões e homogeneizando o que já existe. Para alguns especialistas, o ser humano precisa focar no irracional, no simbólico e no que é não-linear, desafiando a lógica para expandir os limites.",
        "O recado de 2026 me parece evidente. A tecnologia é um meio poderoso, mas o propósito e a direção vêm do ser humano. A inovação real acontece no ponto em que a precisão da Inteligência Artificial encontra a intuição, a ética e a capacidade de conexão emocional do ser humano. Quem souber orquestrar essas múltiplas inteligências não irá apenas reagir ao futuro: irá participar ativamente de sua construção.",
    ]
};
export default function Eight() {
    return (
        <div className="bg-white text-black">
            <Header />
            <NewsArticleTop
                category="Brazil"
                date="19 days ago"
                title="SXSW 2026: o futuro saiu do palco — agora é executar"
                image={heroImage}
            />
            <NewsArticleContent {...articleContent} />
            <NewsArticleContent {...articleContent2} />
            <NewsArticleContent {...articleContent3} />
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