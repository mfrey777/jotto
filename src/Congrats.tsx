import React from "react";


export interface CongratsProps {
    success: boolean;
}

const Congrats: React.FC<CongratsProps> = (props: CongratsProps): JSX.Element => {
    if (props.success) {
        return (
        <div data-test="component-congrats">
            <span data-test="congrats-message">Congratulationw! You guessed the work!</span>
        </div>
        );
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }
}

export default Congrats;