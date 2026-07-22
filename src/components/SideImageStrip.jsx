import { useState } from "react";

export default function SideImageStrip({ images, side = "left" }) {
    const [active, setActive] = useState(0);

    return (
        <div
            className={`hidden xl:flex gap-2 ${side === "right" ? "flex-row-reverse" : ""
                }`}
        >
            {images.map((img, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setActive(index)}
                    className={`
            relative
            overflow-hidden
            rounded-3xl
            cursor-pointer
            transition-all
            duration-500
            ease-out
            ${active === index
                            ? "w-72 h-[520px]"
                            : "w-20 h-[520px]"
                        }
          `}
                >
                    <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    <div
                        className={`
              absolute inset-0
              transition-all
              duration-500
              ${active === index
                                ? "bg-black/10"
                                : "bg-black/45"
                            }
            `}
                    />

                    {active === index && (
                        <div className="absolute bottom-8 left-8 text-white">

                            <h3 className="text-2xl font-bold">
                                Client Story
                            </h3>

                            <p className="mt-2 opacity-90">
                                AI Transformation
                            </p>

                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}