import React from "react";
import { useSharedState } from "../../../";

export const MicrofrontB = () => {
    const [sharedState1] = useSharedState("shared_state_name_1");
    const [sharedState2] = useSharedState("shared_state_name_2", {
        id: null,
        name: "",
    });

    return (
        <>
            <h1>Microfront B</h1>
            <p>Shared state 1: {sharedState1}</p>
            <p>
                Shared state 2: #{sharedState2.id} - {sharedState2?.name}
            </p>
        </>
    );
};
