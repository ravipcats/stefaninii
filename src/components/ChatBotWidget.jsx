import { useState } from "react";
import { FaComments, FaTimes, FaSyncAlt, FaMinus, FaPaperPlane } from "react-icons/fa";

const initialMessages = [
    {
        sender: "bot",
        text: "Hi there! Send a message and I’ll help you with Stefanini services.",
    },
];

export default function ChatBotWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState("");

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: trimmed },
            { sender: "bot", text: "Thanks for your message! A Stefanini consultant will reach out shortly." },
        ]);
        setInput("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-4">
            {open && (
                <div className="w-[300px] max-w-full rounded-[10px] border border-slate-200/20 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.15)]" style={{ maxHeight: 'calc(100vh - 140px)' }}>
                    <div className="flex items-center justify-between gap-4 rounded-t-[30px] border-b border-slate-200/70 bg-slate-50 px-4 py-3">
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full border border-sky-300 bg-slate-100 p-1">
                                <img src="./sophieX.png" alt="SophieX" className="h-full w-full rounded-full object-cover" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900">SophieX</p>
                                <p className="text-[7px] uppercase tracking-[0.24em] text-slate-500">AI Assistant</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 transition hover:bg-slate-100"
                                aria-label="Refresh chat"
                                onClick={() => setMessages(initialMessages)}
                            >
                                <FaSyncAlt className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 transition hover:bg-slate-100"
                                aria-label="Close chat"
                                onClick={() => setOpen(false)}
                            >
                                <FaMinus className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="min-h-[320px] max-h-[calc(100vh-240px)] overflow-hidden bg-slate-100 px-4 py-3">
                        <div className="h-full space-y-3 overflow-y-auto pr-1">
                            {messages.map((message, index) => (
                                <div
                                    key={`${message.sender}-${index}`}
                                    className={`max-w-[85%] rounded-[24px] px-4 py-3 text-sm leading-6 shadow-sm ${message.sender === "user"
                                        ? "ml-auto bg-sky-600 text-white"
                                        : "bg-white text-slate-900"
                                        }`}
                                >
                                    {message.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-b-[30px] border-t border-slate-200/70 bg-white px-4 py-4">
                        <div className="flex items-center gap-3 rounded-[24px] border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm">
                            <textarea
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                onKeyDown={handleKeyDown}
                                className="min-h-[46px] w-full resize-none border-0 bg-transparent p-0 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                placeholder="Type your message"
                            />
                            <button
                                type="button"
                                onClick={handleSend}
                                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white shadow-md transition hover:bg-sky-500"
                                aria-label="Send message"
                            >
                                <FaPaperPlane className="h-4 w-4 rotate-45" />
                            </button>
                        </div>
                        <p className="mt-3 text-[11px] text-slate-400">
                            SophieX is powered by advanced AI technologies, but it can make mistakes.
                        </p>
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full"
                aria-label="Toggle chatbot"
            >
                <img
                    src="/sophieX.png"
                    alt="SophieX button"
                    className="w-full h-full object-cover"
                />
            </button>
        </div>
    );
}
