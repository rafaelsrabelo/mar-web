import React from "react";

interface ModalProps {
    open: boolean;
    onClose: ()=>void;
    children: React.ReactNode;
}

export function Modal ({open, onClose, children}: ModalProps) {
    return (
        <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
            onClick={onClose}
        >
            <div className={`bg-[#1F1E24] rounded-lg shadow p-6 transition-all max-w-md ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-white bg-[#1F1E24]  hover:text-white"
                    onClick={onClose}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    )
}