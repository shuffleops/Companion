'use client';

import GlobalContext from "../context/state"

export default function Providers({ children }) {
    return (
        <GlobalContext>
                {children}
        </GlobalContext>
    );
}