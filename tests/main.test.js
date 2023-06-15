const toggleResponsive = require('../src/main.js')

test('menu responsive toggled', function() {
    changed = false
    const x = document.getElementById("myTopnav")
    const oldClassName = x.className
    toggleResponsive()
    const newClassName = x.className

    if (oldClassName !== newClassName) {
        changed = true
    }
    expect(changed).toBe(true)
})