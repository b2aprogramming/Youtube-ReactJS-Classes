import useCounter from "../../shared/learning/hooks/useCounter";
import FormValidation from "./FormValidation";
import FormValidationReusable from "./FormValidationReusable";

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
                {/* <FormValidation/> */}
                <FormValidationReusable/>
            </div>
        </div>
    );
}

export default LearningPage;