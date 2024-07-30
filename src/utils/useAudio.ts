import { useRef } from "react";

export default function useAudio() {
    const audioRef = useRef(null);

    function loadAudio(audioFile: Blob | MediaSource) {
        const url = URL.createObjectURL(audioFile)
        audioRef.current = new Audio(url);
    }

    function play() {
        audioRef.current.play();
    }

    function pause() {
        audioRef.current.pause();
    }

    function skipTo() {
        console.log("TODO")
    }

    return [loadAudio, play, pause, skipTo]
}