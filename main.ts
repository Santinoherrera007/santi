basic.forever(function () {
    let low = 0
    let high = 0
    if (input.lightLevel() <= 100) {
        pins.digitalWritePin(DigitalPin.P1, high)
        basic.pause(0.5)
        pins.digitalWritePin(DigitalPin.P1, low)
        basic.pause(0.5)
    } else {
        pins.digitalWritePin(DigitalPin.P1, low)
        basic.pause(0.5)
        pins.digitalWritePin(DigitalPin.P1, high)
        basic.pause(0.5)
    }
})
