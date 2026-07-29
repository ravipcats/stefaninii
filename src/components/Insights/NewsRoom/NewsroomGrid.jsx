import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import newsroomData from "../../Insights/NewsRoom/newsroomData.js";
import NewsCard from "./NewsCard";

const REGIONS = [
    "Brazil",
    "LATAM",
    "US/EMEA",
];

export default function NewsroomGrid() {

    const [selectedRegions, setSelectedRegions] = useState([]);
    const [visible, setVisible] = useState(9);
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, []);

    const filteredArticles = useMemo(() => {

        if (selectedRegions.length === 0)
            return newsroomData;

        return newsroomData.filter(article =>
            selectedRegions.includes(article.region)
        );

    }, [selectedRegions]);

    const visibleArticles = filteredArticles.slice(0, visible);

    const toggleRegion = (region) => {

        setVisible(9);

        setSelectedRegions(prev => {

            if (prev.includes(region)) {
                return prev.filter(item => item !== region);
            }

            return [...prev, region];

        });

    };

    const loadMore = () => {

        setVisible(prev => prev + 9);

    };

    return (

        <section className="bg-white py-24">

            <div className="mx-auto max-w-[1450px] px-6">

                {/* FILTER */}

                <div className="mb-12 flex justify-center text-black">

                    <div
                        ref={dropdownRef}
                        className="relative"
                    >

                        <button

                            onClick={() => setOpen(!open)}

                            className="
                                flex
                                items-center
                                gap-3
                                rounded-lg
                                border
                                border-gray-300
                                bg-white
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                transition-all
                                hover:border-[#0068D7]
                            "

                        >

                            {selectedRegions.length === 0
                                ? "All Regions"
                                : `${selectedRegions.length} Selected`}

                            <ChevronDown

                                size={18}

                                className={`transition duration-300 ${open ? "rotate-180" : ""
                                    }`}

                            />

                        </button>

                        <AnimatePresence>

                            {open && (

                                <motion.div

                                    initial={{
                                        opacity: 0,
                                        y: -8
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    exit={{
                                        opacity: 0,
                                        y: -8
                                    }}

                                    transition={{
                                        duration: .25
                                    }}

                                    className="
                                        absolute
                                        right-0
                                        mt-3
                                        w-72
                                        overflow-hidden
                                        rounded-xl
                                        border
                                        bg-white
                                        shadow-2xl
                                        z-50
                                    "

                                >

                                    <div className="p-5">

                                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">

                                            Select Region

                                        </h4>

                                        {REGIONS.map(region => (

                                            <label

                                                key={region}

                                                className="
                                                    flex
                                                    cursor-pointer
                                                    items-center
                                                    justify-between
                                                    rounded-lg
                                                    px-3
                                                    py-3
                                                    transition
                                                    hover:bg-gray-100
                                                "

                                            >

                                                <span>{region}</span>

                                                <input

                                                    type="checkbox"

                                                    checked={selectedRegions.includes(region)}

                                                    onChange={() => toggleRegion(region)}

                                                    className="
                                                        h-4
                                                        w-4
                                                        accent-[#0068D7]
                                                    "

                                                />

                                            </label>

                                        ))}

                                    </div>

                                </motion.div>

                            )}

                        </AnimatePresence>

                    </div>

                </div>

                {/* NEWS GRID */}

                <motion.div

                    layout

                    className="
                        grid
                        gap-12
                        md:grid-cols-2
                        xl:grid-cols-3
                    "

                >
                    <AnimatePresence mode="popLayout">

                        {visibleArticles.map((article, index) => (

                            <motion.div
                                key={article.id}
                                layout
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                    scale: 0.96,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.95,
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.05,
                                }}
                            >

                                <NewsCard article={article} />

                            </motion.div>

                        ))}

                    </AnimatePresence>

                </motion.div>

                {/* EMPTY STATE */}

                {filteredArticles.length === 0 && (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        className="flex flex-col items-center justify-center py-24"
                    >

                        <h3 className="text-2xl font-semibold text-[#071B5C]">

                            No articles found

                        </h3>

                        <p className="mt-3 text-gray-500">

                            Try selecting another region.

                        </p>

                    </motion.div>

                )}

                {/* LOAD MORE */}

                {visible < filteredArticles.length && (

                    <div className="mt-20 flex justify-center">

                        <motion.button

                            whileHover={{
                                y: -4,
                                scale: 1.03,
                            }}

                            whileTap={{
                                scale: .97,
                            }}

                            onClick={loadMore}

                            className="
                                rounded-full
                                bg-[#0068D7]
                                px-10
                                py-4
                                text-sm
                                font-semibold
                                uppercase
                                tracking-wider
                                text-white
                                shadow-lg
                                transition-all
                                duration-300
                                hover:bg-[#0056b3]
                                hover:shadow-2xl
                            "

                        >

                            Load More

                        </motion.button>

                    </div>

                )}

            </div>

        </section>

    );

}