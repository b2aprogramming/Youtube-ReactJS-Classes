import useCounter from "../../shared/learning/hooks/useCounter";

function LearningPage() {
    const { counter, increement, decreement } = useCounter({
        defaultValue: 10,
        increementSize: 5,
        decreementSize: 10
    });
    return (
        <div>
            <h1>Learning page</h1>
            <div>Coutner: {counter}</div>
            <button onClick={increement}>Counter </button>
            <button onClick={decreement}>De Counter</button>
        </div>
    );
}

export default LearningPage;