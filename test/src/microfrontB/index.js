import React from "react";
import { useSharedState } from "../../../lib/useSharedState";

export const MicrofrontB = () => {
    const [message] = useSharedState("message");

    return (
        <>
            <span>[Microfront B]</span>
            <h3>Message: {message}</h3>
        </>
    );
};
