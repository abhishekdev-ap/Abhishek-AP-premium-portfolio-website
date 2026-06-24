import { useEffect, useRef, useState } from "react";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

export function useHyperText(
    text,
    duration = 800,
    delay = 0,
    theme = "dark"
) {
    const [displayText, setDisplayText] = useState("");
    const iterations = useRef(0);
    const isFirstRender = useRef(true);

    useEffect(() => {
        let interval;
        let timeout;

        // Start empty 
        setDisplayText("");
        iterations.current = 0;

        const startAnimation = () => {
            interval = setInterval(() => {
                if (iterations.current < text.length) {
                    setDisplayText((current) =>
                        current.split("").map((l, i) => {
                            if (l === " ") return " ";
                            if (i <= iterations.current) {
                                return text[i];
                            }
                            return alphabets[Math.floor(Math.random() * alphabets.length)];
                        }).join("")
                    );
                    iterations.current += 0.1;
                } else {
                    setDisplayText(text);
                    clearInterval(interval);
                }
            }, duration / (text.length * 10));
        };

        // Pad the initial string with random characters so it has length right away
        setDisplayText(
            text.split("").map((char) => char === " " ? " " : alphabets[Math.floor(Math.random() * alphabets.length)]).join("")
        );

        timeout = setTimeout(startAnimation, delay);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [text, duration, delay, theme]);

    return displayText;
}
