import { validateStaticType, validateStaticTypeErrors, validateDynamicTypeErrors } from '../utils';
import { opacity, rgba, mul, variable, rgb } from '../../../../../../src/core/viz/functions';

describe('src/core/viz/expressions/opacity', () => {
    describe('error control', () => {
        validateStaticTypeErrors('opacity', []);
        validateStaticTypeErrors('opacity', ['number']);
        validateDynamicTypeErrors('opacity', ['number', 'number']);
        validateDynamicTypeErrors('opacity', ['color', 'category']);
    });

    describe('type', () => {
        validateStaticType('opacity', ['color', 'number'], 'color');
    });

    describe('.value', () => {
        it('should override the alpha channel', () => {
            expect(opacity(rgba(255, 255, 255, 0.5), 0.7).value).toEqual({ r: 255, g: 255, b: 255, a: 0.7 });
        });
    });

    describe('.eval', () => {
        it('should override the alpha channel', () => {
            expect(opacity(rgba(255, 255, 255, 0.5), 0.7).eval()).toEqual({ r: 255, g: 255, b: 255, a: 0.7 });
        });
    });

    describe('regression', () => {
        it('should work with binary operations and variables', () => {
            expect(() =>
                opacity(mul(variable('wadus'), rgb(0, 0, 0)), 0.5)
            ).not.toThrow();
        });
    });
});
