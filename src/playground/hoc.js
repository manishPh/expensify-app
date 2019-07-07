import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({ info }) => (
    <div>
        <h1>INFO:</h1>
        <p>Info is: {info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>ADMIN warning: Confidential Information</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in!</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info='some details' isAdmin={true} />, document.getElementById('app'));
ReactDOM.render(<AuthInfo info='AUTH: some details' isAuthenticated={false} />, document.getElementById('app'));
