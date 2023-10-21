import { useContext } from "react";
import { GlobalContext } from '../../context/state';
// import FormData from 'form-data';

export default async function handler(req, res) {
    const { formData } = useContext(GlobalContext)
    console.log(`formData ${formData}`)
    console.log("Sending to whisper");

    try {
        // let audio = req.body.audio;
        // const formData = new FormData();
        // formData.append("file", audio);
        // formData.append("model", "whisper-1");

        if (formData) {
            const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    "Content-Type": "multipart/form-data",
                },
                body: formData
            });
            console.log(`response2 ${JSON.stringify(response)}`)
            const data = await response.json();
            console.log(`data2 ${JSON.stringify(data)}`)
            const transcription = data.text;
            res.status(200).json({ transcription: transcription });
        }
    } catch (error) {
        console.log(error.stack);
        res.status(500).json({ message: error.message });
    }
}