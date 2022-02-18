import React from "react";
import { useSharedState } from "../../../";

export const MicrofrontA = () => {
    const [message, setMessage] = useSharedState("message");

    return (
        <>
            <span>[Microfront A]</span>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Input a value"
            />
        </>
    );
};
