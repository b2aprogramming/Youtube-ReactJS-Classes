import useCounter from "../../shared/learning/hooks/useCounter";
import FormValidation from "./FormValidation";

function LearningPage() {
    const { counter, increement, decreement } = useCounter({
        defaultValue: 10,
        increementSize: 5,
        decreementSize: 10
    });
    return (
        <div className="content">
            <h1>Learning page</h1>
            <div>Coutner: {counter}</div>
            <button onClick={increement}>Counter </button>
            <button onClick={decreement}>De Counter</button>

            <div>
                <FormValidation/>
            </div>
        </div>
    );
}

export default LearningPage;