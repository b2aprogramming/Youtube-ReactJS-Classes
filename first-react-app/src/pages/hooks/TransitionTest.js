import { useState } from "react";
import Tab from "./Tab";
import Tab1 from "./Tab1";
import Tab2Post from "./Tab2Post";
import Tab3 from "./Tab3";

function TransitionTest(){
    const [tabType, setTabType] = useState('');
    const tab1Click = () => {
        setTabType('tab1');
        console.log('@@ tab3');
    };
    const onPostData = () => {
        setTabType('tab2');
        console.log('@@ tab2');
    };
    const tab3Click = () => {
        setTabType('tab3');
        console.log('@@ tab3');
    };
    return (
        <div>
            <div>
                <Tab btnClick={tab1Click}>Tab 1</Tab>
                <Tab btnClick={onPostData}>Tab 2 Post Data</Tab>
                <Tab btnClick={tab3Click}>Tab 3</Tab>
            </div>
            <div>
                {tabType === 'tab1' && <Tab1 />}
                {tabType === 'tab2' && <Tab2Post />}
                {tabType === 'tab3' && <Tab3 />}
            </div>
        </div>
    );
}

export default TransitionTest;