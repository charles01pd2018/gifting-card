// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';


/* TYPES */
export interface Props {
    className?: string;
    onClick: () => void;
    ariaLabel: string;
}

const XCloseButton = ( {
    className='',
    onClick,
    ariaLabel,
}: Props ) => {
    /* CLASSNAMES */
    const xCloseButtonClasses = classNames(
        'x-close-button',
        className,
    );
    
    return (
        <button className={xCloseButtonClasses} 
            aria-label={ariaLabel}
            onClick={onClick}>

        </button>
    )
}

export default XCloseButton;