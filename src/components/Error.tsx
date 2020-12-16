import React from "react";

export interface ErrorProps {
    error: string | null;
}

const Error: React.FC<ErrorProps> = (props: ErrorProps): JSX.Element => {
    if (props.error) {
        return (
        <div data-test="component-error" className="alert alert-danger">
            <span data-test="error-message">{ props.error }</span>
        </div>
        );
    } else {
        return (
            <div data-test="component-error" />
        );
    }
}

export default Error;