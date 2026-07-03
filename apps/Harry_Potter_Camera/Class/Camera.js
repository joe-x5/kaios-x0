class Camera
{
	constructor(app)
	{
		this.display = document.getElementsByTagName('video')[0];
		this.cameraName = navigator.mozCameras.getListOfCameras()[0];
		
		this.options = {
			mode: 'picture',
			previewSize: {
				width: 240,
				height: 320
			},
		};
		
		this.defaultFrame = document.getElementsByClassName('frame')[0];
		this.curerrentFrame = document.getElementById('curerrent_frame');
		this.app = app;
	}
	
	prepare(camera)
	{
		this.cameraControl = camera.camera;
		this.size = this.cameraControl.capabilities.previewSizes[0];

		this.display.mozSrcObject = this.cameraControl;
		this.display.play();
	}
	
	run()
	{
		var self = this;
		navigator.mozCameras.getCamera(this.cameraName, this.options).then(function(camera) {
			self.prepare(camera);
		});
		this.autoFrame();
	}
	
	autoFrame()
	{
		var className = this.defaultFrame.classList[1];
		this.curerrentFrame.className = className;
	}
	
	shoot()
	{
		var self = this;
		
		this.cameraControl.takePicture().then(function(e) {
			var imageUrl = window.URL.createObjectURL(e);
			
			var img = new Image;
			img.src = imageUrl;
			
			img.onload = function() {
				self.app.result.context.drawImage(img, 0, 0, 240, 320);
				
				img = new Image;
				img.src = '../Image/frame/' + self.app.mainFrame.className + '.png';
				
				img.onload = function() {
					self.app.result.context.drawImage(img, 0, 0, 240, 320);
					
					var blob = self.app.result.canvas.toBlob(function(blob) {
						var storage = navigator.getDeviceStorage('pictures');
						var res = storage.addNamed(blob, (new Date()).getTime() + '.png');
						res.onsuccess = function () {
								self.app.notify.classList.remove('hide');
								window.navigator.vibrate([200, 200]);
								self.cameraControl.resumePreview();
								console.log('resume');
								setTimeout(function() {
									self.app.notify.classList.add('hide');
								}, 2000);
								self.app.showAd();
							}
						
					}, "image/png", 0.95);
				}
			}
		});
	}
}
