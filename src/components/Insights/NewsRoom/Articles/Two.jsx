import heroImage from "../../../../assets/newsroom/news2.png";
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
        "Topaz, empresa brasileira que monitora mais de 6 bilhões de transações por mês, leva ao Febraban SEC sua visão de “imunidade digital”",

    paragraphs: [
        "São Paulo, março de 2026 O avanço das transações digitais e dos pagamentos instantâneos na América Latina tem ampliado também a escala e a sofisticação das fraudes financeiras, colocando pressão crescente sobre bancos e instituições para fortalecer as infraestruturas críticas que sustentam a economia digital. O uso de inteligência artificial por redes criminosas tem elevado a pressão sobre bancos e instituições financeiras para ampliar mecanismos de prevenção a fraudes.",
        "A segurança deixou de ser apenas um mecanismo de proteção tecnológica e passou a ocupar papel estrutural na integridade da jornada financeira. A Topaz, empresa do Grupo Stefanini especializada em soluções financeiras digitais, acompanha essa transformação em escala global, com tecnologia que hoje protege mais de 6 bilhões de transações por mês em instituições financeiras da América Latina e de outros mercados.",
        "A digitalização acelerou o sistema financeiro, mas também elevou o nível de complexidade dos riscos. Em um ambiente de pagamentos instantâneos e transações em tempo real, a resposta precisa ser igualmente imediata e integrada. Segurança deixou de ser um componente isolado e passou a ser uma disciplina contínua dentro da jornada financeira, afirma Jorge Iglesias, CEO da Topaz.É dentro dessa agenda que a Topaz participa do Febraban SEC 2026, um dos principais fóruns latino-americanos sobre segurança no setor financeiro, realizado em conjunto com o Congresso Latino-Americano de Segurança da Felaban. Durante o evento, especialistas da empresa discutem temas como hiperpersonalização de ataques digitais, governança de sistemas críticos e continuidade de negócios.No dia 18 de março, Lawrence Bandería, Executivo Sênior de Pré-Vendas da Topaz, apresenta a palestra Hiperpersonalização nos ataques digitais e a evolução das defesas: como a IA transforma risco e prevenção. Já no dia 19 de março, Rangel Donizeti Graçadio, CTO da companhia, aborda o tema Governança de sistemas críticos e continuidade de negócios, discutindo os desafios de resiliência em infraestruturas financeiras de alta disponibilidade.",
        "A Topaz tem evoluído uma estratégia que integra e orquestra controles de segurança ao longo de toda a jornada digital. Essa abordagem é suportada pela arquitetura modular da plataforma Topaz One, que conecta operações, dados e monitoramento transacional em um ambiente integrado.",
        "Essa estratégia se materializa na SecureJourney, família de soluções voltada à prevenção de fraude transacional e à mitigação de riscos operacionais, regulatórios e financeiros, incluindo frentes associadas a AML e OFD, com foco em resiliência operacional, continuidade de negócios e conformidade regulatória.",
        "Quando falamos de pagamentos instantâneos e jornadas digitais cada vez mais integradas, a segurança precisa ser invisível para o usuário, mas extremamente sofisticada na arquitetura. Ela precisa ser adaptativa, contextual e contínua. É assim que conseguimos proteger o sistema financeiro sem comprometer a experiência do cliente”, complementa Iglesias.",
        "Durante o Febraban SEC, a Topaz também apresenta essa visão em seu estande, reunindo sua equipe para discutir tendências em prevenção a fraudes, monitoramento transacional e proteção de infraestruturas financeiras críticas.",
    ]
};

const articleContent2 = {
     title:
        "Sobre a Topaz",

    paragraphs: [
        "Com mais de três décadas de experiência, a Topaz é uma das maiores empresas de tecnologia especializada em soluções financeiras digitais, destacando-se como líder no mercado brasileiro e latino-americano. Como parte do grupo Stefanini, atua em mais de 25 países com mais de 300 clientes de diversos portes e segmentos. A Topaz desenvolveu o Topaz One, a primeira plataforma full banking do mundo, oferecendo um ecossistema completo de soluções integradas, seguras e de alta disponibilidade como core bancário completo e core para microfinanceiras, prevenção e combate à fraude, canais físicos e digitais, AML/FTP e compliance, pagamentos instantâneos, regulatórios, investimentos e customer engagement para bancos e instituições financeiras em geral, impactando mais de 550 milhões clientes finais todos os dias. A Topaz posiciona-se como referência em tecnologia para negócios digitais e é reconhecida pelo Gartner®, FORRESTER® e Celent®.",
        "Informações para a imprensa",
        "DFreire Comunicação e Negócios",
        "Luciana Abritta - lucianaabritta@dfreire.com.br",
        "Marcela Martinez - marcelamartinez@dfreire.com.br",
        "Vanessa Sanches - vanessa@dfreire.com.br"
    ]
};

export default function Two() {
    return (
        <div className="bg-white text-black">
            <Header />
            <NewsArticleTop
                category="Brazil"
                date="19 days ago"
                title="Fraudes digitais mais sofisticadas colocam resiliência transacional no centro da agenda do sistema financeiro"
                image={heroImage}
            />
            <NewsArticleContent {...articleContent} />
            <NewsArticleContent {...articleContent2} />
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