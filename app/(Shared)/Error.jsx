"use client"

export default function Error({ error, reset }) {
    return (
        <div>
            Error loading results: {error.message}
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}