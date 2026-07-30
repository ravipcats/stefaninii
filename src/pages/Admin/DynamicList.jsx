import { Plus, Trash2 } from "lucide-react";

export default function DynamicList({

    title,

    items,

    setItems

}) {

    const handleChange = (index, value) => {

        const copy = [...items];

        copy[index] = value;

        setItems(copy);

    };

    const addItem = () => {

        setItems([...items, ""]);

    };

    const removeItem = (index) => {

        const copy = items.filter((_, i) => i !== index);

        setItems(copy);

    };

    return (

        <div className="dynamic-list">

            <div className="dynamic-header">

                <h3>{title}</h3>

                <button
                    type="button"
                    onClick={addItem}
                >
                    <Plus size={18} />
                    Add
                </button>

            </div>

            {

                items.map((item, index) => (

                    <div
                        key={index}
                        className="dynamic-row"
                    >

                        <input

                            value={item}

                            placeholder={`${title} ${index + 1}`}

                            onChange={(e) =>

                                handleChange(

                                    index,

                                    e.target.value

                                )

                            }

                        />

                        <button

                            type="button"

                            onClick={() => removeItem(index)}

                        >

                            <Trash2 size={18} />

                        </button>

                    </div>

                ))

            }

        </div>

    );

}