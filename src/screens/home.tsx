import useAudio from '@/utils/useAudio';
import { useRef, useState } from "react";

export default function Home() {
  const filePicker = useRef(null)
  const audioRef = useRef(null);
  const [songFile, setSongFile] = useState();
  const [loadAudio, play, pause, skipTo] = useAudio();


  function onFileSelect(_e: any) {
    setSongFile(filePicker.current.files[0])
  }

  return (
    <div className="overflow-auto flex flex-col items-center">
      <h1 className="text-center text-3xl">Home</h1>
      <div className="border p-4 flex flex-col items-center w-fit space-y-2">
        <h3 className="text-2xl">Select a song file</h3>
        <input className="file-input file-input-bordered w-full max-w-xs" type="file" onChange={onFileSelect} ref={filePicker}></input>
        <button className="btn" onClick={() => {
          loadAudio(songFile);
          play();
        }}>Next</button>
        <audio ref={audioRef} controls />
      </div>
    </div>
  );
}
