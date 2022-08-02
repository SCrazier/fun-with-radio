let x = [
0,
1,
2,
3,
4
]
let y = [
0,
1,
2,
3,
4
]
basic.forever(function () {
    for (let j = 0; j <= 4; j++) {
        for (let i = 0; i <= 4; i++) {
            basic.pause(100)
            led.plot(x[i], y[j])
            basic.pause(100)
        }
        for (let i = 0; i <= 4; i++) {
            led.unplot(x[i], y[j])
        }
    }
})
