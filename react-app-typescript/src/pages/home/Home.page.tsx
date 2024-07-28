import TestForm from "../../shared/components/testForm";

function HomePage() {
    return (
        <div>
            <h1>My TS App</h1>
        <div>
         {/* <img src="./assets/images/users.png" alt="Home Icon" /> */}
         {/* <img src={Logo} alt="Home Icon" /> */}
         {/* <Logo /> */}

         <TestForm/>
        </div>
        </div>
    );
}

export default HomePage;