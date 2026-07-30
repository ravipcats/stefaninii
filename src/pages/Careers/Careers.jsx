import { useMemo, useState } from "react";

import CareerHero from "../../components/Career/CareerHero";
import JobList from "../../components/Career/JobList";

import { getJobs } from "../../utils/storage";

export default function Careers() {

    const jobs = getJobs();

    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [country, setCountry] = useState("All Countries");

    const countries = useMemo(() => {

        return [
            "All Countries",
            ...new Set(
                jobs
                    .map(job => job.country)
                    .filter(Boolean)
                    .sort()
            )
        ];

    }, [jobs]);

    const filteredJobs = useMemo(() => {

        return jobs.filter(job => {

            const keywordMatch =
                job.title
                    .toLowerCase()
                    .includes(keyword.toLowerCase());

            const locationMatch =
                location === "" ||
                job.location
                    .toLowerCase()
                    .includes(location.toLowerCase());

            const countryMatch =
                country === "All Countries" ||
                job.country === country;

            return (
                keywordMatch &&
                locationMatch &&
                countryMatch
            );

        });

    }, [jobs, keyword, location, country]);

    return (

        <>

            <CareerHero

                keyword={keyword}
                setKeyword={setKeyword}

                location={location}
                setLocation={setLocation}

                country={country}
                setCountry={setCountry}

                countries={countries}

            />

            <JobList jobs={filteredJobs} />

        </>

    );

}