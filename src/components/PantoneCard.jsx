import { Group, Rect, Text } from 'react-konva';

function PantoneCard({ card, onDrag }) {
    return (
        <Group  
            x = {card.x}
            y = {card.y}
            draggable
            onDragEnd={(e) => {
                onDrag(card.id, e.target.x(), e.target.y());
            }}
        >
            <Rect 
                width = {180}
                height = {220}
                fill = {card.color}
            />
            <Rect 
                x = {5}
                y = {5}
                width = {160}
                height = {200}
                fill = "white"
                // cornerRadius = {14}
                // shadowBlur = {12}
                // shadowOpacity = {0.25}
            />
            <Rect 
                x = {10}
                y = {10}
                width = {140}
                height = {120}
                fill = {card.color}
                // cornerRadius = {8}
            />
            <Text x = {10} y = {140} text = "PANTONE" fontSize = {10}/>
            <Text
                x = {10}
                y = {155}
                text = {card.code}
                fontSize = {12}
                // fontStyle = {bold}
            />
            <Text x = {10} y = {172} text = {card.name} fontSize = {12}/>
        </Group>
    );
}

export default PantoneCard;
