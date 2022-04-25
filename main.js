
const canvas = new Draw(document.querySelector('canvas'))
canvas.SetWidth(400)
canvas.SetHeight(400)
canvas.setup()
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
// const ctx = canvas.getContext('2d')
// let isDrawing = false
// const options = {
// 	color: '#000000',
// 	strokethickness: 20
// }

// const startDrawing = () => {
// 	isDrawing = true
// }

// const stopDrawing = () => {
// 	isDrawing = false
// 	ctx.beginPath();
// }

// const draw = (evt) => {
// 	const mouse = {
// 		x: evt.clientX,
// 		y: evt.clientY
// 	}

// 	if (isDrawing) {
// 		console.log("Drawing");
		
// 		ctx.strokeStyle = options.color
// 		ctx.lineWidth = options.strokethickness
// 		ctx.lineCap = "round"
// 		ctx.lineTo(mouse.x, mouse.y)
// 		ctx.stroke()
// 		ctx.beginPath()
// 		ctx.moveTo(mouse.x, mouse.y)

// 	}
// }

// document.addEventListener('mousedown', startDrawing)
// document.addEventListener('mouseup', stopDrawing)
// document.addEventListener('mousemove', draw)