class Apple {
    constructor(weight) {
        this.weight = weight;
    }

    decrease() {
        this.weight--;
    }

    isEmpty() {
        return this.weight <= 0 ? true : false;
    }

    getWeight() {
        return this.weight;
    }


}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        (this.gender == "Male") ? true : false;
    }

    setGender() {
        this.gender = gender;
    }

    checkApple(apple) {
        return !apple.isEmpty();
    }

    eat(apple) {
        if (this.checkApple(apple)) {
            this.weight++;
            apple.decrease(1);
        } else {
            alert("Da an het tao roi.")
        }
    }

    say(str) {
        alert(this.name + " say : " + str);
    }

    getWeight() {
        return this.weight;
    }

}


