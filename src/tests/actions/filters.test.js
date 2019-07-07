import moment from 'moment';
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';

describe('filters', () => {
    test('should set up text filter action object with provided text', () => {
        const action = setTextFilter('coffee');
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text: 'coffee'
        });
    });

    test('should set up text filter action object with default data', () => {
        const action = setTextFilter();
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text: ''
        });
    });

    test('should set up sort by amount filter object', () => {
        expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
    });

    test('should set up sort by date filter object', () => {
        expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
    });

    test('should set up set start date filter object', () => {
        expect(setStartDate(moment(0))).toEqual({
            type: 'SET_START_DATE',
            startDate: moment(0)
        });
    });

    test('should set up set end date filter object', () => {
        expect(setEndDate(moment(0))).toEqual({
            type: 'SET_END_DATE',
            endDate: moment(0)
        });
    });
});
