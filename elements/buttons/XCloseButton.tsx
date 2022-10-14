// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';


/* TYPES */
export interface Props {
    className?: string;
    href: string;
}

const XCloseButton = ( {
    className='',
    href,
}: Props ) => {
    /* CLASSNAMES */
    const xCloseButtonClasses = classNames(
        'x-close-button',
        className,
    );
    
    return (
        <button className={xCloseButtonClasses}>

        </button>
    )
}

export default XCloseButton;