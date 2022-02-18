import React from "react";
import { useGlobalState } from "../../../lib/useGlobalState";

export const MicrofrontA = () => {
    const [message, setMessage] = useGlobalState("message");

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
