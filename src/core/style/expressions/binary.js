import { float } from '../functions';
import { implicitCast } from './utils';
import Expression from './expression';

/**
 * 
 * Multiply two numbers.
 * 
 * @param {carto.style.expressions.float|number} x - First number or float expression to be multiplied
 * @param {carto.style.expressions.float|number} y - Second number or float expression to be multiplied
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Simple multiplication.</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  width: s.floatMul(5, 5);  // 25
 * });
 * 
 * @memberof carto.style.expressions
 * @name floatMul
 * @function
 * @api
 */
export const FloatMul = genBinaryOp((x, y) => x * y, (x, y) => `(${x} * ${y})`);

/**
 * 
 * Divide two numbers.
 * 
 * @param {carto.style.expressions.float|number} numerator - Numerator of the division
 * @param {carto.style.expressions.float|number} denumerator - Denumerator of the division
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Number division.</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  width: s.floatDiv(10, 2);  // 5
 * });
 * 
 * @memberof carto.style.expressions
 * @name floatDiv
 * @function
 * @api
 */
export const FloatDiv = genBinaryOp((x, y) => x / y, (x, y) => `(${x} / ${y})`);

/**
 * 
 * Add two numbers.
 * 
 * @param {carto.style.expressions.float|number} x - First number to be added
 * @param {carto.style.expressions.float|number} y - Second number to be added
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Number addition.</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  width: s.floatSum(10, 2);  // 12
 * });
 * 
 * @memberof carto.style.expressions
 * @name floatAdd
 * @function
 * @api
 */
export const FloatAdd = genBinaryOp((x, y) => x + y, (x, y) => `(${x} + ${y})`);

/**
 * 
 * Substract two numbers.
 * 
 * @param {carto.style.expressions.float|number} minuend - The minuend of the substraction
 * @param {carto.style.expressions.float|number} subtrahend - The substraend of the substraction
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Number substraction.</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  width: s.floatSub(10, 2);  // 8
 * });
 * 
 * @memberof carto.style.expressions
 * @name floatSub
 * @function
 * @api
 */
export const FloatSub = genBinaryOp((x, y) => x - y, (x, y) => `(${x} - ${y})`);

/**
 * 
 * Modulus of two numbers.
 * 
 * @param {carto.style.expressions.float|number} x - The number to compute the modulus
 * @param {carto.style.expressions.float|number} mod - The modulus value
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Number modulus.</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  width: s.mod(10, 6);  // 4
 * });
 * 
 * @memberof carto.style.expressions
 * @name floatMod
 * @function
 * @api
 */
export const FloatMod = genBinaryOp((x, y) => x % y, (x, y) => `mod(${x}, ${y})`);

/**
 * 
 * Compute the the base to the exponent power.
 * 
 * @param {carto.style.expressions.float|number} base - Base of the computation
 * @param {carto.style.expressions.float|number} exponent - Exponent of the computation
 * @return {carto.style.expressions.float} x ^ y
 * 
 * @example <caption>Power of two numbers.</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  width: s.floatPow(2, 3);  // 8
 * });
 * 
 * @memberof carto.style.expressions
 * @name floatPow
 * @function
 * @api
 */
export const FloatPow = genBinaryOp((x, y) => Math.pow(x, y), (x, y) => `pow(${x}, ${y})`);

/**
 * 
 * Compare if a number x is greater than a specified value y.
 * 
 * This returns a float expression where 0 means `false` and 1 means `true`.
 * 
 * @param {carto.style.expressions.float|number} x - Number to be compared
 * @param {carto.style.expressions.float|number} y - Value to compare against
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Compare two numbers to show only elements with price > 30</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  filter: s.gt(s.property('price'), 30);
 * });
 * 
 * @memberof carto.style.expressions
 * @name gt
 * @function
 * @api
 */
export const GreaterThan = genBinaryOp((x, y) => x > y ? 1 : 0, (x, y) => `(${x}>${y}? 1.:0.)`);

/**
 * 
 * Compare if a number x is greater than or equal to a specified value y.
 * 
 * This returns a float expression where 0 means `false` and 1 means `true`.
 * 
 * @param {carto.style.expressions.float|number} x - Number to be compared
 * @param {carto.style.expressions.float|number} y - Value to compare against
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Compare two numbers to show only elements with price >= 30</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  filter: s.gte(s.property('price'), 30);
 * });
 * 
 * @memberof carto.style.expressions
 * @name gte
 * @function
 * @api
 */
export const GreaterThanOrEqualTo = genBinaryOp((x, y) => x >= y ? 1 : 0, (x, y) => `(${x}>=${y}? 1.:0.)`);

/**
 * 
 * Compare if a number x is lower than a specified value y.
 * 
 * This returns a float expression where 0 means `false` and 1 means `true`.
 * 
 * @param {carto.style.expressions.float|number} x - Number to be compared
 * @param {carto.style.expressions.float|number} y - Value to compare against
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Compare two numbers to show only elements with price < 30</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  filter: s.lt(s.property('price'), 30);
 * });
 * 
 * @memberof carto.style.expressions
 * @name lt
 * @function
 * @api
 */
export const LessThan = genBinaryOp((x, y) => x < y ? 1 : 0, (x, y) => `(${x}<${y}? 1.:0.)`);

/**
 * 
 * Compare if a number x is lower than or equal to specified value y.
 * 
 * This returns a float expression where 0 means `false` and 1 means `true`.
 * 
 * @param {carto.style.expressions.float|number} x - Number to be compared
 * @param {carto.style.expressions.float|number} y - Value to compare against
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Compare two numbers to show only elements with price <= 30</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  filter: s.lte(s.property('price'), 30);
 * });
 * 
 * @memberof carto.style.expressions
 * @name lte
 * @function
 * @api
 */
export const LessThanOrEqualTo = genBinaryOp((x, y) => x <= y ? 1 : 0, (x, y) => `(${x}<=${y}? 1.:0.)`);

/**
 * 
 * Compare if a number x is equal to a value y.
 * 
 * This returns a float expression where 0 means `false` and 1 means `true`.
 * 
 * @param {carto.style.expressions.float|number} x - Number to be compared
 * @param {carto.style.expressions.float|number} y - Value to compare against
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Compare two numbers to show only elements with price === 30</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  filter: s.eq(s.property('price'), 30);
 * });
 * 
 * @memberof carto.style.expressions
 * @name eq
 * @function
 * @api
 */
export const Equals = genBinaryOp((x, y) => x == y ? 1 : 0, (x, y) => `(${x}==${y}? 1.:0.)`);

/**
 * 
 * Compare if a number x is different to a value y.
 * 
 * This returns a float expression where 0 means `false` and 1 means `true`.
 * 
 * @param {carto.style.expressions.float|number} x - Number to be compared
 * @param {carto.style.expressions.float|number} y - Value to compare against
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Compare two numbers to show only elements with price !== 30</caption>
 * const s = carto.style.expressions;
 * const style = new carto.Style({
 *  filter: s.neq(s.property('price'), 30);
 * });
 * 
 * @memberof carto.style.expressions
 * @name neq
 * @function
 * @api
 */
export const NotEquals = genBinaryOp((x, y) => x != y ? 1 : 0, (x, y) => `(${x}!=${y}? 1.:0.)`);


/**
 * 
 * Perform a binary OR between two numbers.
 * If the numbers are different from 0 or 1 this performs a [fuzzy or operation](https://en.wikipedia.org/wiki/Fuzzy_logic#Fuzzification)
 * 
 * This returns a float expression where 0 means `false` and 1 means `true`.
 * 
 * @param {carto.style.expressions.float|number} x - Number to be compared
 * @param {carto.style.expressions.float|number} y - Value to compare against
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Show only elements with price < 30 or price > 1000</caption>
 * const s = carto.style.expressions;
 * const $price = s.property('price');
 * const style = new carto.Style({
 *  filter: s.or(
 *      s.lt($price, 30)
 *      s.gt($price, 1000)
 * });
 * 
 * @memberof carto.style.expressions
 * @name or
 * @function
 * @api
 */
export const  Or = genBinaryOp((x, y) => Math.min(x + y, 1), (x, y) => `min(${x} + ${y}, 1.)`);

/**
 * 
 * Perform a binary AND between two numbers.
 * If the numbers are different from 0 or 1 this performs a [fuzzy or operation](https://en.wikipedia.org/wiki/Fuzzy_logic#Fuzzification)
 * 
 * This returns a float expression where 0 means `false` and 1 means `true`.
 * 
 * @param {carto.style.expressions.float|number} x - Number to be compared
 * @param {carto.style.expressions.float|number} y - Value to compare against
 * @return {carto.style.expressions.float}
 * 
 * @example <caption>Show only elements with price < 30 AND category === 'fruit'</caption>
 * const s = carto.style.expressions;
 * const $price = s.property('price');
 * const $category = s.property('category');
 * 
 * const style = new carto.Style({
 *  filter: s.and(
 *      s.lt($price, 30)
 *      s.eq($category, 'fruit')
 * });
 * 
 * @memberof carto.style.expressions
 * @name and
 * @function
 * @api
 */
export const And = genBinaryOp((x, y) => Math.min(x * y, 1), (x, y) => `min(${x} * ${y}, 1.)`);

function genBinaryOp(jsFn, glsl) {
    return class BinaryOperation extends Expression {
        /**
         * @jsapi
         * @name BinaryOperation
         * @hideconstructor
         * @augments Expression
         * @constructor
         * @param {*} a
         * @param {*} b
         */
        constructor(a, b) {
            if (Number.isFinite(a) && Number.isFinite(b)) {
                return float(jsFn(a, b));
            }
            a = implicitCast(a);
            b = implicitCast(b);
            if (typeof a === 'string') {
                [a, b] = [b, a];
            }
            if (typeof b === 'string') {
                super({ a: a, auxFloat: float(0) });
                this.b = b;
            } else {
                super({ a: a, b: b });
            }

        }
        _compile(meta) {
            super._compile(meta);
            const [a, b] = [this.a, this.b];
            this.inlineMaker = inline => glsl(inline.a, inline.b);
            // TODO this logic is operation dependant
            if (typeof b === 'string' && a.type == 'category' && a.name) {
                const id = meta.categoryIDs[b];
                this.auxFloat.expr = id;
                this.type = 'float';
                this.inlineMaker = inline => glsl(inline.a, inline.auxFloat);
            } else if (a.type == 'float' && b.type == 'float') {
                this.type = 'float';
            } else if (a.type == 'color' && b.type == 'color') {
                this.type = 'color';
            } else if (a.type == 'color' && b.type == 'float') {
                this.type = 'color';
            } else if (a.type == 'category' && b.type == 'category') {
                this.type = 'float';
            } else {
                throw new Error(`Binary operation cannot be performed between types '${a.type}' and '${b.type}'`);
            }
        }
    };
}
