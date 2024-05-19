import "./style.css";

const app = document.getElementById("app") as HTMLDivElement;
const loading = document.getElementById("loading") as HTMLDivElement;

const canvas = document.createElement("canvas");
canvas.id = "canvas";

app.appendChild(canvas);

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

if (!ctx) {
  throw new Error("Failed to get 2d context from canvas");
}

console.log(ctx);

const loadImg = (img: HTMLImageElement): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image"));
  });
};

let aspectRatio = 0;
let imgHeight = 0;
let imgWidth = 0;

const setting = (img: HTMLImageElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  aspectRatio = img.width / img.height;
  imgHeight = canvas.height;
  imgWidth = imgHeight * aspectRatio;
};

const image = new Image();
image.src = "/vite.svg";
loadImg(image).then(async (img) => {
  loading.remove();
  setting(img);
  ctx.drawImage(image, 0, 0, imgWidth, imgHeight);
});
