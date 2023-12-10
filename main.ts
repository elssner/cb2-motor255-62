radio.onReceivedNumber(function (receivedNumber) {
    Calli2bot.fahreJoystick(receivedNumber, true, false, 20)
})
let Calli2bot: calli2bot.Calli2bot = null
Calli2bot = calli2bot.beimStart(calli2bot.calli2bot_eADDR(calli2bot.eADDR.CB2_x22))
radio.setFrequencyBand(1)
radio.setGroup(222)
basic.showNumber(222)
