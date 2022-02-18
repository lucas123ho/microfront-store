## Microfront-store
A utility package to share states between multiples micro-frontends

---

### Example
Host
```js
export const Host = () => {
    return (
        <>
            <h1>Host</h1>
            <MicrofrontendA />
            <MicrofrontendB />
        </>
    )
}
```

Microfrontend A
```jsx
import React from "react"
import { useSharedState } from "microfront-store"

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
```

Microfrontend B

```jsx
import React from "react"
import { useSharedState } from "microfront-store"

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
```