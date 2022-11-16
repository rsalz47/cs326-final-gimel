class VerifyString {
    /**
     * @param {string} str
     * @returns {boolean}
     */
    validate(str) {
        return Boolean(str) && typeof str === "string";
    }
}

class VerifyNumber {
    constructor() {
        this.hasMax = false;
        this.hasMin = false;
    }

    /**
     * @param {number} n
     * @returns {boolean}
     */
    validate(n) {
        return (
            n === Number(n)
            && typeof n === "number"
            && (!this.hasMax || n <= this.valMax)
            && (!this.hasMin || n >= this.valMin)
        );
    }
}

class VerifyObject {
    constructor(schema) {
        this.schema = schema;
        this.strictMode = false;
    }

    strict() {
        this.strictMode = true;
        return this;
    }

    /**
     * @param {Object<string, any>} obj
     * @returns {boolean}
     */
    validate(obj) {
        /**
         *
         * @param {Object} obj1
         * @param {Object} obj2
         * @returns
         */
        const sameKey = (obj1, obj2) => {
            const k1 = Object.keys(obj1);
            const k2 = Object.keys(obj2);
            return (
                k1.every(x => k2.includes(x))
                && k2.every(x => k1.includes(x))
            );
        };

        const validateRecur = Object.entries(this.schema).every(
            ([key, checker]) => key in obj && checker.validate(obj[key])
        );
        return (
            typeof obj === "object"
            && validateRecur
            && (!this.strictMode || sameKey(obj, this.schema))
        );
    }
}

export default {
    object: schema => new VerifyObject(schema),
    number: () => new VerifyNumber(),
    string: () => new VerifyString(),
};
