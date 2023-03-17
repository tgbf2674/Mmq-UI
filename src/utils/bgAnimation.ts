import throttle from './throttle';

export default function () {
  let canvas = document.querySelector('#canvas') as HTMLCanvasElement;
  let ctx = canvas.getContext('2d');
  let starlist: any[] = [];

  function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  init();
  window.onresize = init;

  canvas.addEventListener('mousemove', throttle(function (e: MouseEvent) {
    if (e.offsetX) {
      starlist.push(new (Star as any)(e.offsetX, e.offsetY));
    }
  }, 30));

  function random(min: number, max: number) {
    return Math.floor((max - min) * Math.random() + min);
  }

  class Star {
    x: number;
    y: number;
    vx: number;
    vy: number;
    a: number;
    color: string;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 3;
      this.vy = (Math.random() - 0.5) * 3;
      this.color = 'rgb(' + random(0, 256) + ',' + random(0, 256) + ',' + random(0, 256) + ')';
      this.a = 1;
      this.draw();
    }

    draw() {
      if (ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = this.a;
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        ctx.fill();
        this.updata();
      }
    }

    updata() {
      this.x += this.vx;
      this.y += this.vy;
      this.a *= 0.98;
    }
  }


  function render() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);

    starlist.forEach((item, i) => {
      item.draw();
      if (item.a < 0.05) {
        starlist.splice(i, 1);
      }
    });

    requestAnimationFrame(render);
  }

  render();
}
