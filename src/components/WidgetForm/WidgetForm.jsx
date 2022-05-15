import CloseButton from "../CloseButton";
import contactImage from "../../assets/contact.svg";
import otherImage from "../../assets/other.svg";
import "./style.css"
import { useState } from "react";
import { FeedbackContentStep } from "./FeedbackContentStep/FeedbackContentStep";

export const feedBackTypes = {
    CONTACT: {
        title: "Contato",
        image: {
            source: contactImage,
            alt: 'Ícone de contato',
        },
        style: {
            backgroundColor: "#FFEB80",
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: otherImage,
            alt: 'Ícone de outros',
        },
        style: {
            backgroundColor: "#A5F0AF",
        }
    },
}

export function WidgetForm({ toggleWidgetVisibility }) {
    const [feedbackType, setFeedbackType] = useState(null)

    function handleRestartFeedback() {
        setFeedbackType(null)
    }

    return (
        <div style={{
            position: "relative",
            padding: 16,
            borderRadius: 16,
            marginBottom: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#18181B",
            width: "40vh",
            gap: 16
        }}>
            {!feedbackType ? (<>
                <header style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <div style={{ width: 16, height: 16 }} />
                    <span style={{ fontFamily: "Inter", color: "#fff", fontSize: 15, lineHeight: 2 }}>Deixe seu feedback</span>
                    <CloseButton onClick={toggleWidgetVisibility} />
                </header>
                <div style={{ display: "flex", paddingBottom: 32, paddingTop: 20, gap: 12 }}>
                    {Object.entries(feedBackTypes).map(([key, value]) => {
                        console.log(key, value);
                        return (
                            <button
                                key={key}
                                className="button-feedback"
                                style={{
                                    backgroundColor: "#27272A",
                                    border: "none",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    minWidth: 80,
                                    minHeight: 80,
                                    borderRadius: 15,
                                    gap: 6
                                }}
                                onClick={() => setFeedbackType(key)}
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span style={{ fontFamily: "Inter", fontSize: 12, color: "#fff" }}>{value.title}</span>
                            </button>
                        )
                    })}
                </div>
            </>
            ) : (
                <FeedbackContentStep
                    feedbackType={feedbackType}
                    toggleWidgetVisibility={toggleWidgetVisibility}
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )
            }
        </div>
    )
}