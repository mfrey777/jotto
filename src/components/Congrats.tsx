import React from "react";

export interface CongratsProps {
    success: boolean;
}

const Congrats: React.FC<CongratsProps> = (props: CongratsProps): JSX.Element => {
    if (props.success) {
        return (
        <div data-test="component-congrats" className="alert alert-success">
            <span data-test="congrats-message">Congratulations! You guessed the word!</span>
        </div>
        );
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }
}

export default Congrats;