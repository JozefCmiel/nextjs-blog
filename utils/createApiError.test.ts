/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import { createApiError } from './createApiError';


describe('createApiError', () => {
    it('should return ApiErrorType', () => {
        const error = {
            message: 'test',
            code: 500,
        };
        const result = createApiError(error);
        expect(result).toEqual({
            message: 'test',
            status: 500,
        });
    });

    it('should return ApiErrorType with default values', () => {
        const error = {};
        const result = createApiError(error);
        expect(result).toEqual({
            message: 'Unknown error',
            status: 500,
        });
    });
});
