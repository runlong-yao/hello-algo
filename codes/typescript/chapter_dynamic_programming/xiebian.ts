// Greyhound → Greyhound
// Greyhound → Animal
// Animal → Animal
// Animal → Greyhound


class Animal {
    alive: boolean
}

class Dog extends Animal {
    type: string
}

class Greyhound extends Dog {
    color: string
}

type g1 = (v: Greyhound) => Greyhound
type g2 = (v: Greyhound) => Animal
type g3 = (v: Animal) => Animal
type g4 = (v: Animal) => Greyhound


