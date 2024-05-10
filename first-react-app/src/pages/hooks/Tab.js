import { useTransition, startTransition } from "react";

function Tab({children,btnClick}){
    const [isPending, setTransition] = useTransition()
    const onBtnClick = () => {
       // console.log('hii');
       setTransition(() => {
           btnClick();
       });
    }
    if(isPending) {
        return <span>children</span>
    }
    return (
        <button onClick={onBtnClick}>
            {children}
        </button>
    )
}

export default Tab;