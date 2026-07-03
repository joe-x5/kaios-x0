class App
{
	constructor()
	{
		
		this.KEY_LEFT = 'ArrowLeft';
		this.KEY_RIGHT = 'ArrowRight';
        this.KEY_DOWN = 'ArrowDown';
		this.KEY_ENTER = 'Enter';
		this.mainFrame = document.getElementById('curerrent_frame');
		this.result = new Result();
		this.notify = document.getElementById('notify');
	}
	
	run()
	{
		this.result.createCanvas();
		this.camera = new Camera(this);
		this.camera.run();
		this.control();

        document.getElementsByClassName('frame_hp_1')[0].focus();
	}
	
	control()
	{
		var self = this;
		document.addEventListener('keydown', function(e) {self.keys(e)});
	}
	
	moveLeft()
	{
        this.nav(-1);
	}
	
	moveRight()
	{
        this.nav(1);
	}

    nav(move)
    {
        var items = document.querySelectorAll('.frame');
        var currentIndex = document.activeElement.tabIndex;

        var next = currentIndex + move;
        var targetElement = items[next];

        if (typeof targetElement === 'undefined') {
            return;
        }

        targetElement.focus();
        
        var className = targetElement.classList[1];
		this.mainFrame.className = className;
    }
	
	shoot()
	{
		this.camera.shoot();
	}
	
	keys(e)
	{
		switch (e.key) {
        	case this.KEY_LEFT:
        		this.moveLeft();
        		break;
        	case this.KEY_RIGHT:
        		this.moveRight();
        		break;
        	case this.KEY_ENTER:
        		this.shoot();
        		break;
            case this.KEY_DOWN:
                e.preventDefault();
                break;
        }
	}
	
	showAd()
    {
    	getKaiAd({
    		publisher: config.kaiAd.publisher,
    		app: config.kaiAd.app,
    		slot: config.kaiAd.slot,
    		onerror: err => console.error('Custom catch:', err),
    		onready: ad => {
				ad.call('display');
    		}
    	})
    }
}
