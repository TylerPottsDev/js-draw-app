class Draw {

	constructor (canvas) {
		this.canvas = canvas
		this.ctx = canvas.getContext('2d')
		this.isDrawing = false
		this.options = {
			width: null,
			height: null,
			color: '#000000',
			strokethickness: 20
		}
		this.mouse = {
			x: 0,
			y: 0
		}
	}

	setup () {
		this.canvas.width = this.options.width != null ? this.options.width : window.innerWidth
		this.canvas.height = this.options.height != null ? this.options.width : window.innerHeight

		this.canvas.addEventListener('mousedown', () => this.isDrawing = true)
		this.canvas.addEventListener('mousemove', this._draw.bind(this))
		this.canvas.addEventListener('mouseup', () => this.isDrawing = false)
	}

	SetWidth (width) {
		this.options.width = width
	}

	SetHeight (height) {
		this.options.height = height
	}

	_draw (evt) {
		const rect = this.canvas.getBoundingClientRect()
		this.mouse = {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		}

		if (!this.isDrawing) return

		console.log("Drawing: ", this.mouse);
	}

}