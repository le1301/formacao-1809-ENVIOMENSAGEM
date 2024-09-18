input.onButtonPressed(Button.A, function () {
    radio.sendString("ENVIO DO SOM")
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
radio.setGroup(100)
