import { Key, Note } from "@/utils/types";
import { useState } from "react";
import { Layer, Rect, Stage, Text } from "react-konva"

const lines = [
    { id: 1, key: Key["c"] },
    { id: 2, key: Key["cs"] },
    { id: 3, key: Key["d"] },
    { id: 4, key: Key["ds"] },
    { id: 5, key: Key["e"] },
    { id: 6, key: Key["f"] },
    { id: 7, key: Key["fs"] },
    { id: 8, key: Key["g"] },
    { id: 9, key: Key["gs"] },
    { id: 10, key: Key["a"] },
    { id: 11, key: Key["as"] },
    { id: 12, key: Key["b"] },
];
const staffWidth = 13001
export default function StaffCanvas() {
    const [layerX, setLayerX] = useState<number>(0);
    const [notes, setNotes] = useState<Note[]>([
        { id: 1, key: Key["a"], start: 1, duration: 1000 },
        { id: 2, key: Key["b"], start: 1001, duration: 1000 },
        { id: 3, key: Key["c"], start: 2001, duration: 3000 },
        { id: 4, key: Key["c"], start: 10001, duration: 3000 },
    ]);
    const StaffLine = ({ id, staffKey }: { id: number, staffKey: Key }) => {
        return <Rect
            x={0}
            y={20 * id}
            id={"staff-" + id}
            width={staffWidth}
            height={20}
            fill={'white'}
            stroke={'black'}
            onClick={() => { console.log(staffKey, id) }}
        />
    }
    const NoteNode = ({ note }: { note: Note }) => {
        const line = lines.findIndex((line) => {
            return note.key === line.key;
        })
        console.log(line)
        const id = lines[line].id;
        return <Rect x={note.start} y={20 * id} width={note.duration} height={20} fill={'blue'} stroke={'black'} draggable={true} onClick={() => console.log(note)} />
    }
    const Scrollbar = () => {
        const sbWidth = 50;
        return <Rect
            width={sbWidth}
            height={10}
            x={0}
            y={20 * (lines.length + 1)}
            fill={'gray'}
            draggable={true}
            dragBoundFunc={(pos) => {
                return { x: Math.max(Math.min(pos.x, 1000 - sbWidth), 0), y: 20 * (lines.length + 1) }
            }}
            onDragMove={(e) => {
                console.log(e)
                const delta = (staffWidth - e.target.x()) / staffWidth
                console.log(delta)
                // setLayerX((staffWidth - layerX) * delta)
            }}
        />
    }

    return (
        <Stage width={1000} height={400}>
            <Layer x={layerX}>
                {lines.map(({ id, key }, idx) => {
                    return (<StaffLine key={idx} id={id} staffKey={key} />)
                })}
                {notes.map((note) => {
                    return (<NoteNode note={note} />)
                })}
                <Scrollbar />
            </Layer>
        </Stage>
    )
}