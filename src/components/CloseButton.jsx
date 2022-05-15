import { X } from "phosphor-react";

export default function CloseButton({ onClick }) {
    return (
        <button
            style={{
                backgroundColor: "transparent",
                position: "relative",
                border: "none",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            <X size="16" weight="bold" color="#fff" />
        </button>
    )
}