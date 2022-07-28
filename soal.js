function test() {
    var a = 135
    var b = 547;

    console.log('a awal: ', a)
    console.log('b awal: ', b)

    //buat nuker nilai variable
    //mski nilai variable diganti ttp jalan dengan baik
    //tanpa perlu variable baru

    a -= b
    b += a
    a = b - a

    console.log('a final:', a)
    console.log('b final: ', b)
}

test()
