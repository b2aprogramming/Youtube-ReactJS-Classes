export interface PageTitleProps {
    children?: JSX.Element;
    title: string;
}
function PageTitle({children, title}: PageTitleProps):JSX.Element {
    return (
        <div className="page-title-block">
            <h1 className="page-title">{title}</h1>
            {children}
        </div>
    );
}

export default PageTitle;