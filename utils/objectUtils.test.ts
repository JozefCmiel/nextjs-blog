/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import { searchObject } from './objectUtils';


describe('objectUtils', () => {

    it('search object', () => {
        const obj = {
            a: {
                b: 'c'
            }
        };
        const search = 'c';
        expect(searchObject(obj, search)).toBeTruthy();
    }),
    it('search object couldnt find', () => {
        const obj = {
            a: {
                b: 'd'
            }
        };
        const search = 'c';
        expect(searchObject(obj, search)).toBeFalsy();
    });

    it('search object recursive', () => {
        const obj = {
            a: {
                b: {
                    c: {
                        d: 'e'
                    }
                }
            }
        };
        const search = 'e';
        expect(searchObject(obj, search)).toBeTruthy();
    });

});
