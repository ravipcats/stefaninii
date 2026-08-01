import Header from "../../Header";
import Footer from "../../Footer";
import ChatBotWidget from "../../ChatBotWidget";

import heroImage from "../../../assets/Library/6.png";
import Image from "../../../assets/Library/2of6.png";

import LibraryImage from "../LibraryImage";
import LibrarySection from "../LibrarySection";
import RelatedLibrary from "../RelatedLibrary";

const introduction = {
    paragraphs: [
        "The adoption of AI in companies has become an operational imperative. When we began structuring our own journey of artificial intelligence adoption, we realized that the biggest obstacles were organizational, cultural, and strategic.",

        "The urgency for real results with AI did not emerge from nowhere. Since the launch of ChatGPT in November 2022, global corporations have accelerated initiatives that previously took years.",

        "In Brazil, this movement was reinforced by the Brazilian Artificial Intelligence Strategy (EBIA), which has guided the responsible and productive adoption of technology by both the private and public sectors since 2021.",

        "According to data from IBGE (Pintec Semestral, 2025), the percentage of Brazilian industrial companies using AI jumped from 16.9% in 2022 to 41.9% in 2024 — a growth of 25 percentage points in just two years."
    ]

};

const challenge = {

    title: "How has the use of artificial intelligence started to generate value?",

    paragraphs: [
        "The use of artificial intelligence moved from isolated pilots to initiatives with an impact on revenue, efficiency, and customer experience when companies began connecting AI to critical business processes.",

        "The Superagency in the Workplace report by McKinsey (January 2025) reveals that 92% of global companies plan to increase AI investments over the next three years. However, only 1% of them consider themselves mature in implementation—meaning AI is integrated into workflows and generating tangible results.",

        "Below, we share five lessons consolidated throughout our business transformation trajectory with AI, so you can shorten your path to success"
    ]

};

const solution = {

    title: "Lesson 1: Start with the problem, not the tool",

    paragraphs: [
        "The best way to apply AI in companies is to start with the problem. Defining the use case before choosing the model or tool avoids the mistake of adopting AI simply because it exists, rather than because it solves something specific.",

        "In practice, teams that start with the question \"which operational pain points or business opportunity do we want to address?\" reach measurable results faster than those testing tools without a strategic anchor.",

        "For example, consider an operations team that spends hours per week consolidating reports from different systems to generate a single monitoring dashboard.",

        "Before thinking about which AI model to use, the right step is to map this process, its volume, frequency, error points, and the cost of rework. Clarity regarding the problem is what makes any solution internally defensible.",

        "To structure this initial diagnosis, three criteria help prioritize use cases with the highest potential for return:",

        "• Volume and frequency: Processes that occur daily and involve large amounts of data yield faster ROI.\n• Criticality and risk: Areas where human error has a high financial or reputational cost take priority.\n• Data availability: Without a quality history, no AI model works well; check this before starting."
    ]

};


const solution2 = {

    title: "Lesson 2: Culture changes slower than the project advances",

    paragraphs: [
        "Artificial intelligence in daily life transforms corporate processes and behaviors. The greatest cultural impact we observed was the change in people's relationship with error and decision speed, where teams working with AI develop a higher tolerance to iterate quickly and adjust course.",

        "In customer service automation projects, for instance, it is common for the first few months to generate resistance from teams that operated the process manually. The turning point happens when leadership starts using AI-generated data in performance meetings as a shared decision-making tool.",

        "Three movements help build an organizational culture compatible with artificial intelligence for business:",

        "1. Transparency regarding the role of AI: Clearly communicating what the AI does, where it decides, and where the human remains in control reduces resistance and increases trust. Ambiguity generates fear; clarity generates engagement.\n2. Continuous and contextualized training: 48% of employees indicate that training is the most important factor for AI adoption, yet nearly half say they have received minimal or no training, according to McKinsey. Investing in programs applied to the business context makes a difference.\n3. Leadership as a usage model: When managers use AI in their own routines and share results with the team, the behavior propagates naturally. Leadership that only talks about AI but does not practice it faces silent resistance."
    ]

};


const solution3 = {

    title: "Lesson 3: How to maintain governance when scaling artificial intelligence for business?",

    paragraphs: [
        "Maintaining governance when scaling artificial intelligence for business requires creating control structures before expanding the scope. Governance is not bureaucracy; it is what differentiates a functional pilot from a sustainable implementation.",

        "When AI usage expands to multiple areas, risks that were invisible in controlled environments emerge, such as model bias, improper use of sensitive data, and automated decisions without traceability.",

        "In predictive analysis projects for credit or HR, for example, models that work well in a test environment may present systematic bias in production. Without a periodic review process, this could go unidentified for months.",

        "The table below summarizes the four pillars of governance we structured in our journey:"
    ]

};
const solution4 = {
    title: "Lesson 4: Siloed AI increases operational overhead",
    paragraphs: [
        "Isolated solutions fail because artificial intelligence for business needs data from other systems, automations that execute its recommendations, and interfaces that connect the result to the right user.",

        "We have observed this pattern repeatedly: companies that deploy an AI model without connecting it to the ERP, CRM, or operational platforms end up creating more manual work.",

        "A company that automates lead screening with AI but requires someone to manually copy results into the CRM has not gained efficiency; it has merely shifted the problem.",

        "To build an integrated ecosystem, the sequence that works in practice is:",

        "1. Map the source systems of the data the model will consume.\n2. Define the output interfaces—where the AI result will be consumed and by whom.\n3. Automate the flow between the model and adjacent systems, eliminating manual transfer steps.\n4. Monitor input data quality, as its degradation contaminates the model's output over time."
    ]
};

const solution5 = {
    title: "Lesson 5: Define what success looks like before you start",
    paragraphs: [
        "Measuring the ROI of using artificial intelligence starts by defining, before launch, which indicators will prove success. Without a baseline and agreed-upon metrics, evaluation becomes subjective and vulnerable to internal disputes.",

        "The most common mistake is measuring only tool adoption (how many people use it, how many queries were made) rather than business impact. Adoption is a necessary condition, but not a sufficient one.",

        "In financial process automation projects, it is common for the tech team to celebrate adoption while the business area still questions the value. This happens because metrics were not agreed upon at the start, and each side began looking at different indicators.",

        "Metrics that effectively demonstrate AI return follow three main dimensions:",

        "• Operational efficiency: Reduction in task execution time, decrease in error rates, and reduction in rework.\n• Direct financial impact: Revenue increase in sales or retention processes, and cost reduction in automated operations.\n• Decision quality: Improvement in indicators such as customer satisfaction (NPS/CSAT), forecast accuracy, and incident response speed."
    ]
};

const solution6 = {
    title: "Is your company ready to go beyond pilots and scale AI with results?",
    paragraphs: [
        "Talk to a Stefanini specialist and discover where to start."
    ]
};

const solution7 = {
    title: "Frequently Asked Questions (FAQ)",
    paragraphs: [
        "1. What are the main challenges when implementing AI in companies?\n\nThe main challenges are: quality and availability of historical data, cultural resistance from employees, lack of governance to scale safely, and a lack of clarity on which use cases to prioritize.",

        "2. How does artificial intelligence for business improve operational efficiency?\n\nBy automating high-volume repetitive tasks, reducing human error in critical processes, and accelerating decisions that previously depended on time-consuming manual analysis.",

        "3. Is it possible to ensure data security with artificial intelligence in day-to-day operations?\n\nYes, it is possible to ensure data security with artificial intelligence in daily life, provided that the implementation includes governance layers from the very beginning."
    ]
};

export default function Four() {

    return (
        <>
            <Header />
            <LibraryImage
                title="AI in Companies: 5 Practical Lessons Learned from Transforming the Way We Operate"
                image={heroImage}
            />
            <LibrarySection {...introduction} />
            <LibrarySection {...challenge} />
            <LibrarySection {...solution} />
            <LibrarySection {...solution2} />
            <LibrarySection {...solution3} />
            <LibraryImage
                image={Image}
            />
            <LibrarySection {...solution4} />
            <LibrarySection {...solution5} />
            <LibrarySection {...solution6} />
            <LibrarySection {...solution7} />
            <RelatedLibrary currentId={1} />
            <Footer />
            <ChatBotWidget />
        </>

    );

}