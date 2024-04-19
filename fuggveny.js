function fizzBuzz(szam){
    if (szam % 5 == 0)
    return "fizz"
    if (szam % 3 == 0)
    return "buzz"
    if (szam % 5 == 0 && szam % 3 ==0)
    return "fizzbuzz"
    if (szam % 5 != 0 && szam % 3 != 0)
    return szam

}