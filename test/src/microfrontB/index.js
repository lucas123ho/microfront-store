import React from "react";
import { useGlobalState } from "../../../lib/useGlobalState";

export const MicrofrontB = () => {
    const [message] = useGlobalState("message");

    return (
        <>
            <span>[Microfront B]</span>
            <h3>Message: {message}</h3>
        </>
    );
};
