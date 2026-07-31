import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CareerHero.css";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function CareerHero({

    keyword,
    setKeyword,

    location,
    setLocation,

    country,
    setCountry,

    countries

}) {
    const navigate = useNavigate();

    return (

        <section className="career-hero">


            <div className="career-overlay">

                <button
                    className="career-back-btn"
                    onClick={() => navigate("/")}
                >
                    <ArrowLeft size={18} />
                    Back
                </button>
            </div>

            <div className="career-content">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                >
                    Join us to co-create solutions for a better future!
                </motion.h1>

                <motion.div
                    className="career-search"

                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .2 }}
                >

                    <input
                        type="text"
                        placeholder="Job title or keyword"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="City or Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >

                        {countries.map((country) => (

                            <option
                                key={country}
                                value={country}
                            >
                                {country}
                            </option>

                        ))}

                    </select>

                </motion.div>

                <motion.div

                    className="career-actions"

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}

                    transition={{ delay: .4 }}

                >

                    <button className="search-btn">

                        Search Jobs

                    </button>

                    <Link
                        to="/admin/login"
                        className="login-btn"
                    >

                        Admin Login

                    </Link>

                </motion.div>

            </div>

        </section>

    );

}