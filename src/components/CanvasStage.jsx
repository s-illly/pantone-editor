import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import PantoneCard from './PantoneCard';
import { useEffect, useState } from 'react';
import React from 'react';

const CanvasStage = React.forwardRef(({ imageSrc, cards, setCards }, ref) => {
    const [image, setImage] = useState(null);

    useEffect( () => {
        const img = new window.Image();
        img.src = imageSrc;
        img.onload = () => setImage(img);
    }, [imageSrc]);

    const handleDrag = (id, x, y) => {
        setCards(cards.map( c => 
            c.id === id ? { ...c, x, y } : c 
        ));
    };
    return (
        <Stage ref={ref} width = {800} height = {600}> 
            <Layer>
                {image && <KonvaImage image={image} />}
                {cards.map(card => (
                    <PantoneCard    
                        key = {card.id}
                        card = {card}
                        onDrag = {handleDrag}
                    />
                ))}
            </Layer>
        </Stage>
    );
});

export default CanvasStage;
