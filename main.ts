input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("bye")
    basic.showIcon(IconNames.StickFigure)
    basic.showArrow(ArrowNames.North)
})
basic.forever(function () {
	
})
