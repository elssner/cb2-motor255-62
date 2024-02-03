input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.LongClick), function () {
    radio.setGroup(223)
    basic.showString("A")
})
input.onButtonEvent(Button.AB, input.buttonEventValue(ButtonEvent.LongClick), function () {
    radio.setGroup(222)
    basic.showString("C")
})
radio.onReceivedNumber(function (receivedNumber) {
    Calli2bot.fahreJoystick(receivedNumber, true, true, 20)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.LongClick), function () {
    radio.setGroup(224)
    basic.showString("B")
})
function GitHub () {
    calli2bot.comment("elssner/cb2-motor255-62")
    calli2bot.comment("makecode.calliope.cc")
    calli2bot.comment("Hardware: v2")
    calli2bot.comment("Erweiterungen laden:")
    calli2bot.comment("radio")
    calli2bot.comment("calliope-net/calli2bot")
}
let Calli2bot: calli2bot.Calli2bot = null
Calli2bot = calli2bot.beimStart(calli2bot.calli2bot_eADDR(calli2bot.eADDR.CB2_x22))
radio.setFrequencyBand(1)
radio.setGroup(222)
basic.showString("C")
