import CompanyCard from "./CompanyCard";
import companies from "./companiesData";

export default function Companies() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-[1320px] mx-auto px-6">

        <h2
          className="
            text-5xl
            md:text-6xl
            font-bold
            text-[#08245C]
          "
        >
          Our Companies
        </h2>

        <p
          className="
            mt-6
            text-xl
            text-gray-600
            max-w-3xl
          "
        >
          Discover the brands that are part of the Stefanini Group ecosystem.
        </p>

        <div
          className="
            mt-16
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {companies.map((company, index) => (
            <CompanyCard
              key={company.id}
              company={company}
              index={index}
            />
          ))}
        </div>

      </div>

    </section>
  );
}