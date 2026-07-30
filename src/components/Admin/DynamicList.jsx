import { Plus, Trash2 } from "lucide-react";
import "./DynamicList.css";

export default function DynamicList({
    title,
    items,
    setItems
}) {

    const addItem = () => {
        setItems([...items, ""]);
    };

    const updateItem = (index, value) => {
        const updated = [...items];
        updated[index] = value;
        setItems(updated);
    };

    const removeItem = (index) => {
        if (items.length === 1) return;

        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    };

    return (
        <div className="dynamic-list">

            <div className="dynamic-header">

                <h3>{title}</h3>

                <button
                    type="button"
                    className="add-item-btn"
                    onClick={addItem}
                >
                    <Plus size={18} />
                    Add
                </button>

            </div>

            {items.map((item, index) => (

                <div
                    className="dynamic-row"
                    key={index}
                >

                    <input
                        type="text"
                        placeholder={`${title} ${index + 1}`}
                        value={item}
                        onChange={(e) =>
                            updateItem(index, e.target.value)
                        }
                    />

                    <button
                        type="button"
                        className="remove-item-btn"
                        onClick={() => removeItem(index)}
                        disabled={items.length === 1}
                    >
                        <Trash2 size={18} />
                    </button>

                </div>

            ))}

        </div>
    );
}