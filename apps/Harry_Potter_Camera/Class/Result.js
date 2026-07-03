class Result
{
	constructor()
	{
		this.width = 240;
		this.height = 320;
		this.context = null;
		this.canvas = null;
	}
	
	createCanvas()
	{
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.context = this.canvas.getContext('2d');
		var tt = document.getElementById('result').appendChild(this.canvas);
	}
}