import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { WidgetForm } from '../WidgetForm/WidgetForm';
import "./style.css";

export function Widget() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen);
    }

    return (
        <div style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
        }}>
            {isWidgetOpen && <WidgetForm toggleWidgetVisibility={toggleWidgetVisibility} />}
            <button
                onClick={toggleWidgetVisibility}
                className="widget-button"
            >
                <ChatTeardropDots
                    size="24"
                    style={{
                        height: 48
                    }}
                    color="#fff"
                />
            </button>
        </div >
    );
}