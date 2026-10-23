clearScreen("black");

const cx = 50, cy = 50, r = 40;

// Head outline: check every pixel, draw it if it sits on the circle's edge
for (let y = 0; y < 100; y++) {
  for (let x = 0; x < 100; x++) {
    const d = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    if (Math.abs(d - r) < 0.7) drawPixel(x, y, "blue");
  }
}

// Eyes: 6 horizontal lines stacked = a 6x6 square each
for (let i = 0; i < 6; i++) {
  drawHorizontalLine(32, 35 + i, "green"); // left eye
  drawHorizontalLine(63, 35 + i, "green"); // right eye
}

// Nose: one vertical line
drawVerticalLine(50, 48, "red");

// Mouth: a curve that is lowest in the middle (a smile)
for (let x = 33; x <= 67; x++) {
  const y = 72 - Math.round((x - 50) ** 2 / 40);
  drawPixel(x, y, "red");
}

// Tests
checkPixel(50, 10, "blue", "top of head");
checkPixel(34, 37, "green", "left eye");
checkPixel(65, 37, "green", "right eye");
checkPixel(50, 50, "red", "nose");
checkPixel(50, 72, "red", "mouth middle");
checkPixel(50, 25, "black", "forehead empty");