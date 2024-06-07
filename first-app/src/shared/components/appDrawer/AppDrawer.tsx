import Sidebar from "../sidebar/Sidebar";

export interface AppDrawerProps {
    children: JSX.Element
}

function AppDrawer({children}: AppDrawerProps): JSX.Element {
    return (
        <main className="main">
            <Sidebar/>
            <section className="app-content">
                {children}
            </section>
        </main>
    )
}


export default AppDrawer;