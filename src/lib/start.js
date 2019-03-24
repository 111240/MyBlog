class start {
	constructor() {
		this.startc1 = document.getElementById('c1');
		this.startctx1 = this.startc1.getContext('2d');
		this.startc2 = document.getElementById('c2');
		this.startctx2 = this.startc2.getContext('2d');
		this.starttwopi = Math.PI * 2;
		this.startparts = [];
		this.sizeBase;
		this.startcw;
		this.startopt;
		this.starthue;
		this.startcount;
		this.saturation;
		this.lightness;
		this.alpha;
		this.ch;
	}
	init = () => {
		this.resize();
		this.create();
		this.loop();
	}
	rand = (min, max) =>{
		return Math.random() * (max - min) + min;
	}
	hsla = (h, s, l, a) =>{
		return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
	}
	create = () => {
		this.sizeBase = this.startcw + this.ch;
		this.startcount = Math.floor(this.sizeBase * 0.3),
			this.starthue = this.rand(0, 360),
			this.startopt = {
				radiusMin: 1,
				radiusMax: this.sizeBase * 0.04,
				blurMin: 10,
				blurMax: this.sizeBase * 0.04,
				hueMin: this.starthue,
				hueMax: this.starthue + 100,
				saturationMin: 10,
				saturationMax: 70,
				lightnessMin: 20,
				lightnessMax: 50,
				alphaMin: 0.1,
				alphaMax: 0.5
			};
		this.startctx1.clearRect(0, 0, this.startcw, this.ch);
		this.startctx1.globalCompositeOperation = 'lighter';
		while (this.startcount--) {
			var radius = this.rand(this.startopt.radiusMin, this.startopt.radiusMax), blur = this.rand(this.startopt.blurMin, this.startopt.blurMax), x = this.rand(0, this.startcw), y = this.rand(0, this.ch);
			this.starthue = this.rand(this.startopt.hueMin, this.startopt.hueMax);
			this.saturation = this.rand(this.startopt.saturationMin, this.startopt.saturationMax);
			this.lightness = this.rand(this.startopt.lightnessMin, this.startopt.lightnessMax);
			this.alpha = this.rand(this.startopt.alphaMin, this.startopt.alphaMax);
			this.startctx1.shadowColor = this.hsla(this.starthue, this.saturation, this.lightness, this.alpha);
			this.startctx1.shadowBlur = blur;
			this.startctx1.beginPath();
			this.startctx1.arc(x, y, radius, 0, this.starttwopi);
			this.startctx1.closePath();
			this.startctx1.fill();
		}
		this.startparts.length = 0;
		for (var i = 0; i < Math.floor((this.startcw + this.ch) * 0.03); i++) {
			this.startparts.push({
				radius: this.rand(1, this.sizeBase * 0.03),
				x: this.rand(0, this.startcw),
				y: this.rand(0, this.ch),
				angle: this.rand(0, this.starttwopi),
				vel: this.rand(0.1, 0.5),
				tick: this.rand(0, 10000)
			});
		}
	}
	loop = () => {
		requestAnimationFrame(this.loop);
		this.startctx2.clearRect(0, 0, this.startcw, this.ch);
		this.startctx2.globalCompositeOperation = 'source-over';
		this.startctx2.shadowBlur = 0;
		this.startctx2.drawImage(this.startc1, 0, 0);
		this.startctx2.globalCompositeOperation = 'lighter';
		var i = this.startparts.length;
		this.startctx2.shadowBlur = 15;
		this.startctx2.shadowColor = '#fff';
		while (i--) {
			var part = this.startparts[i];
			part.x += Math.cos(part.angle) * part.vel;
			part.y += Math.sin(part.angle) * part.vel;
			part.angle += this.rand(-0.05, 0.05);
			this.startctx2.beginPath();
			this.startctx2.arc(part.x, part.y, part.radius, 0, this.starttwopi);
			this.startctx2.fillStyle = this.hsla(0, 0, 100, 0.075 + Math.cos(part.tick * 0.02) * 0.05);
			this.startctx2.fill();
			if (part.x - part.radius > this.startcw) {
				part.x = -part.radius;
			}
			if (part.x + part.radius < 0) {
				part.x = this.startcw + part.radius;
			}
			if (part.y - part.radius > this.ch) {
				part.y = -part.radius;
			}
			if (part.y + part.radius < 0) {
				part.y = this.ch + part.radius;
			}
			part.tick++;
		}
	}
	resize = () =>{
		this.startcw = this.startc1.width = this.startc2.width = window.innerWidth,
		this.ch = this.startc1.height = this.startc2.height = window.innerHeight - 1;
		this.create();
	}
}



// function click() {
// 	create()
// }

// window.addEventListener( 'resize', resize );
// window.addEventListener( 'click', click );

export default start;