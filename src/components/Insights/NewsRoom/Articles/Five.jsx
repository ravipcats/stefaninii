import heroImage from "../../../../assets/newsroom/news5.png";
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
        "Em cocriação com clientes dos setores automotivo e financeiro, a unidade do Grupo Stefanini comprova como sua solução de Cloud com mentalidade AI-First transforma gargalos de infraestrutura em resultados comprovados",

    paragraphs: [
        "São Paulo, abril de 2026 – Ambientes de TI lentos, provisionamento manual e incidentes recorrentes de configuração ainda são queixas comuns em setores industriais e isso gera necessidades diferentes de gerenciamento em nuvem. Em projetos cocriados com clientes das indústrias automotiva e financeira, a Stefanini Technology, uma das sete unidades de negócios do Grupo Stefanini, redesenhou arquiteturas operacionais e implementou sua abordagem de Cloud com mentalidade AI-First, integrando infraestrutura, aplicações e governança em um modelo unificado, automatizado e orientado a resultados.",
        "A nuvem deixou de ser apenas infraestrutura e passou a ser parte central da estratégia das empresas. Na Stefanini Technology, aplicamos o mindset AI-First para integrar aplicações, dados e cloud em um modelo operacional mais eficiente e orientado a resultados. Nosso foco não está apenas na modernização tecnológica, mas em garantir que a infraestrutura sustente crescimento, inovação e disciplina financeira de forma sustentável”, afirma Rodrigo Stefanini, CEO Latam e Brasil do Grupo Stefanini.",
        "No setor automotivo, a solução em Cloud da Stefanini Technology reduziu em até 80% o tempo de provisionamento de ambientes, por meio da automação total com Infraestrutura como Código (IaC) e execução paralela em múltiplas contas e regiões. Processos que antes levavam dias passaram a ser concluídos em horas, com o mínimo de intervenção manual e menos margem para erro.",
        "Além da velocidade, a solução reduziu em 90% os incidentes de configuração, graças à aplicação automatizada de políticas, tags e controles via código, eliminando a variabilidade que gerava retrabalho e risco operacional. A produtividade das equipes também foi impactada. O uso de IA para geração de módulos IaC e documentação automática elevou em 60% a capacidade de entrega dos times de infraestrutura.",
        "No setor financeiro, a Stefanini Technology enfrentou um cenário de alta instabilidade, monitoramento precário e custos elevados. A solução estruturou uma nova base tecnológica com automação de entregas, modernização de aplicações e monitoramento contínuo, resultando em 99,9% de disponibilidade, mais de 18 aplicações migradas para a nova plataforma e redução de 50% nos custos operacionais.",

    ]
};
const articleContent2 = {
    title:
        "Infraestrutura que não trava o negócio",

    paragraphs: [
        "A ascensão da IA agêntica redefine o que se espera de uma infraestrutura de nuvem. Segundo o IDC, até 2030, 45% das organizações devem orquestrar agentes para operar funções com mínima intervenção humana. Isso exige uma base de cloud que seja rápida, confiável e governada por código, exatamente o que a Stefanini Technology entregou nos projetos com clientes. A abordagem AI-First não é uma promessa de modernização, é uma metodologia comprovada em ambientes de missão crítica.",
        "A expertise acumulada nesses projetos posiciona a Stefanini Technology como referência em cloud para ambientes de alta complexidade de infraestruturas industriais a operações financeiras reguladas.",

    ]
};

const articleContent3 = {
    title:
        "Sobre o Grupo Stefanini",

    paragraphs: [
        "O Grupo Stefanini é uma consultoria tech global que domina o uso de Inteligência Artificial e cocria soluções sob medida para seus clientes progredirem em sua jornada digital, combinando presença global, ampla expertise técnica e um portfólio completo de serviços. Presente em 46 países, com 23 delivery centers em 5 continentes e mais de 35 mil colaboradores em todo o mundo, a consultoria organiza suas soluções em sete unidades de negócios: Technology, Cyber, Data & Analytics, Financial Tech, Operations, Marketing e Manufacturing, formando um grande ecossistema de inovação que entrega resultados relevantes e duradouros aos seus clientes.",
        "Com diversas plataformas proprietárias de Inteligência Artificial, organizadas principalmente na suíte SAI (Stefanini Artificial Intelligence), o Grupo Stefanini combina dados, automação e IA para impulsionar a transformação de ponta a ponta. O Grupo Stefanini tornou-se referência acadêmica com o case “Criando uma Estratégia de Ecossistema na Era da AI” pela INSEAD e até hoje é estudado em escolas de negócios globais. Para mais informações, acesse stefanini.com.",
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

export default function Five() {
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