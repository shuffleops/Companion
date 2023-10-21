import FormData from 'form-data';

export default async function whisperCall() {
    try {
        const response = await fetch('/api/whisper', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(`response1 ${JSON.stringify(response)}`)
        const data = await response.json()
        console.log(`data1 ${data}`)
        return data.transcription
    } catch (error) {
        console.log(error.stack)
    }

}