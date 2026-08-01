import { useMemo, useState } from "react";

import LibraryHero from "../../components/Library/LibraryHero";
import DropdownFilter from "../../components/Library/DropdownFilter";
import LibraryGrid from "../../components/Library/LibraryGrid";

import libraryData from "../../data/libraryData";

import "./Library.css";

export default function Library() {

    const [selectedIndustries, setSelectedIndustries] = useState([]);

    const [selectedTypes, setSelectedTypes] = useState([]);

    const industries = [

        ...new Set(

            libraryData.map(item => item.industry)

        )

    ].sort();

    const types = [

        ...new Set(

            libraryData.map(item => item.type)

        )

    ].sort();

    const filtered = useMemo(() => {

        return libraryData.filter(item => {

            const industryMatch =

                selectedIndustries.length === 0 ||

                selectedIndustries.includes(item.industry);

            const typeMatch =

                selectedTypes.length === 0 ||

                selectedTypes.includes(item.type);

            return industryMatch && typeMatch;

        });

    }, [

        selectedIndustries,

        selectedTypes

    ]);

    return (

        <div className="library-page">

            <LibraryHero />

            <div className="library-filter-bar">

                <DropdownFilter

                    title="Industries"

                    items={industries}

                    selected={selectedIndustries}

                    setSelected={setSelectedIndustries}

                />

                <DropdownFilter

                    title="Types"

                    items={types}

                    selected={selectedTypes}

                    setSelected={setSelectedTypes}

                />

            </div>

            <LibraryGrid

                data={filtered}

            />

        </div>

    );

}