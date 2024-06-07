export interface IconProps {
    name: string;
    className?: string;
}

function Icon({name, className}: IconProps){
    return (
        <span className={`icon-${name || 'home'} ${className || ''}`}></span>
    );
}

export default Icon;