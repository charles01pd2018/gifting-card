// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';


/* TYPES */
export interface Props {
    className?: string;
    href: string;
}

const CopyLinkButton = ( {
    className='',
    href,
}: Props ) => {
    /* CLASSNAMES */
    const copyLinkButtonClasses = classNames(
        'copy-link-button',
        className,
    );
    
    return (
        <button className={copyLinkButtonClasses}>

        </button>
    )
}

export default CopyLinkButton;