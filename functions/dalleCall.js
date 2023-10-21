export default async function apiCall(prompt) {
    try {
        const response = await fetch('/api/dalle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt })
    });
    const data = await response.json()
    return data.image
    } catch(error) {
        console.log(error.stack)
    }
    
}