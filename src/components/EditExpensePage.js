import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    const handleRemoveExpense = () => {
        props.dispatch(removeExpense({id: props.match.params.id}));
        props.history.push('/');
    }
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('Editing Expense');
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={handleRemoveExpense}>Remove Expense</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(EditExpensePage);
