import CanvasStage from "./components/CanvasStage"
import Toolbar from "./components/Toolbar"
import { useRef, useState } from 'react';
import { mockPalette } from "./components/Mockpalette";

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [cards, setCards] = useState(mockPalette);
  const stageRef = useRef();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImageSrc(URL.createObjectURL(file));
  };

  const handleExport = () => {
    const uri = stageRef.current.toDataURL({ pixelRatio: 2 });
    const a = document.createElement("a");
    a.download = "pantone.png";
    a.href = uri;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className = "h-screen flex flex-col">
      <Toolbar onUpload={handleUpload} onExport={handleExport}/>
      {imageSrc && (
        <CanvasStage 
        ref = {stageRef}
        imageSrc = {imageSrc}
        cards = {cards}
        setCards = {setCards}
        />
      )}
    </div>  
  );
}

export default App
