import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./DropdownFilter.css";

export default function DropdownFilter({

    title,

    items,

    selected,

    setSelected

}) {

    const [open, setOpen] = useState(false);

    const ref = useRef(null);

    useEffect(() => {

        const handleClickOutside = (e) => {

            if (ref.current && !ref.current.contains(e.target)) {

                setOpen(false);

            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);

    }, []);

    const toggleItem = (item) => {

        if (selected.includes(item)) {

            setSelected(selected.filter(x => x !== item));

        } else {

            setSelected([...selected, item]);

        }

    };

    return (

        <div
            className="dropdown-filter"
            ref={ref}
        >

            <button
                className="dropdown-trigger"
                onClick={() => setOpen(!open)}
            >

                <span>

                    {title}

                    {selected.length > 0 && ` (${selected.length})`}

                </span>

                {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}

            </button>

            {open && (

                <div className="dropdown-menu">

                    {items.map(item => (

                        <label
                            key={item}
                            className="dropdown-item"
                        >

                            <input
                                type="checkbox"
                                checked={selected.includes(item)}
                                onChange={() => toggleItem(item)}
                            />

                            <span>{item}</span>

                        </label>

                    ))}

                </div>

            )}

        </div>

    );

}