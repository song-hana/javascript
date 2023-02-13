interface Profile {
    userId: number
    userName: string
    nickName: string
}

function printUserName(profile: Profile) {
    console.log(profile.userId)
}

const profile: Profile = {
    userId: 1,
    userName: 'cain',
    nickName: 'hero'
}

printUserName(profile)
console.log(typeof profile)

//
interface Relationship {
    from: Profile
    to: Profile
}

const relationship: Relationship = {
    from: {
        userId: 1,
        userName: 'cain',
        nickName: 'hero'
    },
    to: {
        userId: 2,
        userName: 'abel',
        nickName: 'warrior'
    }
}

// 
interface Account extends Profile {
    email: string
    password: string
}

const account: Account = {
    userId: 1,
    userName: 'cain',
    nickName: 'hero',
    email: 'cain@gmail.com',
    password: 'cainpw'
}

//
interface User {
    userId: number
    userName: string
    photoUrl?: string
}

let user: User = {
    userId: 1,
    userName: 'abel',
    photoUrl: 'face.jpg'
}

console.log(user) // { userId: 1, userName: 'able', photoUrl: 'face.jpg' }

user = {
    userId: 2,
    userName: 'abel'
}

console.log(user) // { userId: 2, userName: 'abel' }

// 
interface Shape {
    getArea(): number
    getPerimeter(): number
}

class Circle implements Shape {
    constructor(private radius: number) {}

    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private Width: number, private height: number) {}

    getArea(): number {
        return this.Width * this.height
    }

    getPerimeter(): number {
        return 2 * (this.Width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4, 6)

console.log(circle.getArea(), rectangle.getPerimeter())