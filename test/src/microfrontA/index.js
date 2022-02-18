import React from "react";
import { useSharedState } from "../../../";

export const MicrofrontA = () => {
    const [sharedState1, setSharedState1] = useSharedState(
        "shared_state_name_1"
    );
    const [sharedState2, setSharedState2] = useSharedState(
        "shared_state_name_2",
        {
            id: null,
            name: "",
        }
    );

    const id = 1;

    return (
        <>
            <h1>Microfront A</h1>
            <input
                placeholder="Shared state 1"
                value={sharedState1}
                onChange={(e) => setSharedState1(e.target.value)}
            />
            <input
                placeholder="Shared state 2"
                value={sharedState2.name}
                onChange={(e) => {
                    setSharedState2({ name: e.target.value, id });
                }}
            />
        </>
    );
};
