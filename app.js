import { Paper } from './paper.js';

const NUM_PAPER = 500;

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.initPaper();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    initPaper() {
        this.papers = [];
        for (let i = 0; i < NUM_PAPER; i++) {
            this.papers.push(new Paper(Math.random() * (this.stageWidth * 1.2) - this.stageWidth * 0.1, this.stageHeight));
        }
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ctx.fillStyle = '#777';
        this.ctx.fillText("wwoong22", this.stageWidth - 70, this.stageHeight - 20);

        let outPaperCount = 0;
        for (let i = 0; i < this.papers.length; i++) {
            const outOfCanvas = this.papers[i].draw(this.ctx);
            if (outOfCanvas) {
                outPaperCount += 1;
            }
        }

        if (outPaperCount >= NUM_PAPER) {
            this.initPaper();
        }
    }
}

window.onload = () => {
    new App();
};
