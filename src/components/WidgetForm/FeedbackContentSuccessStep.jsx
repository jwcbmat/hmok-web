import CloseButton from "../CloseButton";
import { feedBackTypes } from "./WidgetForm";

export function FeedbackContentSuccessStep({ toggleWidgetVisibility, feedbackType }) {
    const feedbackTypeInfo = feedBackTypes[feedbackType];

    return (
        <>
            <header style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
                <span>{feedbackTypeInfo.title}</span>
            </header>

            <CloseButton onClick={toggleWidgetVisibility} />

            <div style={{ display: "flex", paddingBottom: 32, paddingTop: 32, gap: 12 }}>

            </div>
        </>
    )
}