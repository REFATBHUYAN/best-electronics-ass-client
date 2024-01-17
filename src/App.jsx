import { useEffect } from "react";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Features from "./components/Features";

function App() {
  const [audios, setAudio] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://best-electronics-server.vercel.app/musics")
      .then((response) => response.json())
      .then((data) => setAudio(data))
      .catch((error) => console.error("Error fetching tracks:", error));
    
  }, []);
  console.log(audios);

  const handleSearch = () => {
    
    fetch(`https://best-electronics-server.vercel.app/search/${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setAudio(data))
      .catch((error) => console.error("Error fetching tracks:", error));
   
    
  };

  return (
    <div className="w-full mx-auto max-w-7xl ">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-8">MelodyMusic</h1>
      <Features></Features>
      <div className="flex w-3/4 md:w-1/2 gap-4 mx-auto my-8">
        <input
          type="text"
          placeholder="Search for music..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
        />
        <button className="bg-white/5 ring-1 ring-white/10 py-2 px-6 rounded-md" onClick={handleSearch}>Search</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-28">
        {audios.map((audio) => (
          <div
            className="w-full bg-white/5  pt-6 ring-1 ring-white/10 hover:bg-zinc-900 p-4 rounded-md"
            key={audio.id}
          >
            <img className="w-full h-52 rounded" src={audio.artwork} alt="" />
            <h1 className="fond-bold text-2xl my-4">Title: {audio.title}</h1>
            <h1 className="font-semibold text-lg mb-4">
              Artist: {audio.artist}
            </h1>
            <ReactAudioPlayer
              className="w-full text-slate-600"
              src={audio.url}
              controls
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
