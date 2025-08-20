
enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

function moveEnum(dir: Direction) {
    console.log(`Moving ${dir}`);
}

type DirectionLiteral = "UP" | "Down" | "Left" | "Right";

function moveLiteral(dir: DirectionLiteral) {
    console.log(`Moving ${dir}`);
}

moveEnum(Direction.Up);
moveLiteral("Left");