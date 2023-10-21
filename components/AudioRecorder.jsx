import { useState, useEffect, useContext, useRef } from "react";
import { GlobalContext } from '\../context/state';

import whisperCall from "../functions/whisperCall"
const mimeType = "audio/webm";

const AudioRecorder = () => {
    const { audio, setAudio, setFormData } = useContext(GlobalContext)

    const [permission, setPermission] = useState(false);

    const mediaRecorder = useRef(null);

    const [recordingStatus, setRecordingStatus] = useState("inactive");

    const [stream, setStream] = useState(null);


    const [audioChunks, setAudioChunks] = useState([]);

    useEffect(() => {
        const getMicrophonePermission = async () => {
            if ("MediaRecorder" in window) {
                try {
                    const mediaStream = await navigator.mediaDevices.getUserMedia({
                        audio: true,
                        video: false,
                    });
                    setPermission(true);
                    setStream(mediaStream);
                } catch (err) {
                    alert(err.message);
                }
            } else {
                alert("The MediaRecorder API is not supported in your browser.");
            }
        };
        if (!permission) {
            getMicrophonePermission();
        }
    }, []);


    const startRecording = async () => {
        setRecordingStatus("recording");
        const media = new MediaRecorder(stream, { type: mimeType });

        mediaRecorder.current = media;

        mediaRecorder.current.start();

        let localAudioChunks = [];

        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localAudioChunks.push(event.data);
        };

        setAudioChunks(localAudioChunks);
    };

    const stopRecording = () => {
        setRecordingStatus("inactive");
        mediaRecorder.current.stop();

        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            const audioUrl = URL.createObjectURL(audioBlob);

            setAudio(audioUrl);

            setAudioChunks([]);

            
            const formData = new FormData();
            formData.append("file", audio);
            formData.append("model", "whisper-1");
            setFormData(formData)
            whisperCall()
        };
    };

    return (
        <div>
            <div className="audio-controls">
                {permission && recordingStatus === "inactive" ? (
                    <button className="button" onClick={startRecording} type="button">
                        Record
                    </button>
                ) : null}
                {recordingStatus === "recording" ? (
                    <button className="button" onClick={stopRecording} type="button">
                        Stop
                    </button>
                ) : null}
            </div>
            {/* {audio ? (
                <div className="audio-player">
                    <audio src={audio} controls></audio>
                    <a download href={audio}>
                        Download Recording
                    </a>
                </div>
            ) : null} */}
        </div>
    );
};

export default AudioRecorder;