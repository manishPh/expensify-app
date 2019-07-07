import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

describe('expenses reducer', () => {
    test('should set default state', () => {
        const state = expensesReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual([]);
    });

    test('should remove expense by id', () => {
        const action = {
            type: 'REMOVE_EXPENSE',
            id: expenses[1].id
        };

        const state = expensesReducer(expenses, action);
        expect(state).toEqual([expenses[0], expenses[2]]);
    });

    test('should not remove expense if id is not foud', () => {
        const action = {
            type: 'REMOVE_EXPENSE',
            id: '5'
        };

        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });

    test('should add expense', () => {
        const expense = {
            id: '4',
            description: 'Gas',
            note: '',
            amount: 3000,
            createdAt: moment(0).add(100, 'days').valueOf()
        };
        const action = { type: 'ADD_EXPENSE', expense };

        const state = expensesReducer(expenses, action);
        expect(state).toEqual([...expenses, expense]);
    });

    test('should edit an expense', () => {
        const note = 'note for gum';
        const amount = 200;
        const updates = { note, amount };
        const action = { type: 'EDIT_EXPENSE', id: expenses[0].id, updates };

        const state = expensesReducer(expenses, action);
        expect(state[0].note).toBe(note);
        expect(state[0].amount).toBe(amount);
    });

    test('should not edit expense if expense not found', () => {
        const note = 'note for gum';
        const amount = 200;
        const updates = { note, amount };
        const action = { type: 'EDIT_EXPENSE', id: '7', updates };

        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });
});
