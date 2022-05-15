import { ArrowLeft } from "phosphor-react";
import CloseButton from "../../CloseButton";
import { feedBackTypes } from "../WidgetForm";
import "./style.css"

export function FeedbackContentStep({
    toggleWidgetVisibility,
    feedbackType,
    onFeedbackRestartRequested
}) {
    const feedbackTypeInfo = feedBackTypes[feedbackType];

    return (
        <>
            <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, width: "100%" }}>
                <button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft size="16" weight="bold" color="#fff" />
                </button>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
                    <span style={{ fontFamily: "Inter", color: "#fff", fontSize: 15, lineHeight: 2 }}>{feedbackTypeInfo.title}</span>
                </div>

                <CloseButton onClick={toggleWidgetVisibility} />
            </header>

            <form style={{
                marginTop: 16,
                marginBottom: 16,
                width: "100%",
                maxWidth: "30vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8
            }}
            >
                <textarea
                    className="textarea-feedback"
                    style={{
                        minWidth: 304,
                        width: "100%",
                        minHeight: 112,
                        backgroundColor: "transparent",
                        borderRadius: 15,
                        padding: 16,
                        fontFamily: "Inter",
                        fontWeight: "lighter",
                        color: "#fff",
                        resize: "none"
                    }}
                    placeholder="Conte-me!"
                />
                <footer>
                    <button
                        className="submit-feedback"
                        style={{
                            backgroundColor: "#345d48",
                            border: "1px solid #09090a",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontFamily: "Inter",
                            fontSize: 15,
                            width: "35vh",
                            height: 40,
                            borderRadius: 5
                        }}
                        type="submit"
                    >
                        Enviar
                    </button>
                </footer>
            </form>
        </>
    )
}