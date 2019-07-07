import filtersReducer from '../../reducers/filters';
import moment from 'moment';

describe('filter reducer', () => {
    test('should set up default filter values', () => {
        const state = filtersReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });

    test('should set text of the filter', () => {
        const text = 'filter text 123';
        const action = {
            type: 'SET_TEXT_FILTER',
            text
        };
        const state = filtersReducer(undefined, action);
        expect(state.text).toEqual(text);
    });

    test('should set sortBy to amount', () => {
        const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
        expect(state).toEqual({
            text: '',
            sortBy: 'amount',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });

    test('should set sortBy to date', () => {
        const currentState = {
            text: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        };
        const action = { type: 'SORT_BY_DATE' };
        const state = filtersReducer(currentState, action);
        expect(state.sortBy).toBe('date');
    });

    test('should set start date', () => {
        const stDate = moment(0).add(4, 'days').valueOf();
        const state = filtersReducer(undefined, {
            type: 'SET_START_DATE',
            startDate: stDate
        });

        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: stDate,
            endDate: moment().endOf('month')
        });
    });

    test('should set end date', () => {
        const endDate = moment(0).add(4, 'days').valueOf();
        const state = filtersReducer(undefined, {
            type: 'SET_END_DATE',
            endDate
        });

        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate
        });
    });
});
