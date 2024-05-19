import "./style.css";

const app = document.getElementById("app") as HTMLDivElement;

const canvas = document.createElement("canvas");
canvas.id = "canvas";

app.appendChild(canvas);

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

if (!ctx) {
  throw new Error('Failed to get 2d context from canvas');
}

console.log(ctx);

const loadImg = (img: HTMLImageElement): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));
  });
};

const image = new Image();
image.src = '/vite.svg';
loadImg(image).then(() => {
  ctx.drawImage(image, 15, 15);
});
