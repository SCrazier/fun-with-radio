x = [0, 1, 2, 3, 4]
y = [0, 1, 2, 3, 4]

def on_forever():
    for j in range(5):
        for i in range(5):
            basic.pause(100)
            led.plot(x[i], y[j])
            basic.pause(100)
        for k in range(5):
            basic.pause(100)
            led.unplot(x[k], y[j])
            basic.pause(100)
basic.forever(on_forever)
