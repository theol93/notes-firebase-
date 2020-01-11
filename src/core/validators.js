export class Validators {
    static requied(value = " ") {
        return value && value.trim()
    }

    static minLength(length) {
        return value => {
            return value.length >= length
        }
    }
}