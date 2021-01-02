const COLORS = ['#4985EC', '#F3840E', '#2A8742', '#B647F2', '#D83136', '#F3C10E', '#52E4F0', '#EC45B4'];


export class Test {
    constructor(x, stageHeight) {
        this.stageHeight = stageHeight;

        this.x = x;
        this.y = 0;
        // this.y = -(Math.random() * stageHeight) / 2 - stageHeight;
        this.w = 10 + (Math.random() * 5 - 2.5);
        this.h = 10 + (Math.random() * 5 - 2.5);

        this.color = COLORS[Math.floor(Math.random() * 8)];
        this.rotate = Math.random() - 0.5;

        this.T = Math.random() * 40 + 20;
        this.t = Math.random() * this.T;

        this.xAmp = Math.random() * 100 + 50;
        this.ySpeed = 2 + Math.random() * 2;
    }

    draw(ctx) {
        this.t += 1;

        this.w += Math.sin(this.t / this.T) * 0.07;
        this.h += Math.cos(this.t / this.T) * 0.07;

        const x = this.x + Math.sin(this.t / this.T) * this.xAmp;
        this.y += this.ySpeed;

        ctx.fillStyle = this.color;
        
        ctx.save();
        ctx.translate(x + this.w / 2, this.y);
        ctx.rotate(0.3);

        // ctx.beginPath();
        // ctx.arc(0, 0, 8, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        
        ctx.fillRect(0, 0, this.w, this.h);
        ctx.restore();

        return this.y > this.stageHeight + 500;
    }
}
