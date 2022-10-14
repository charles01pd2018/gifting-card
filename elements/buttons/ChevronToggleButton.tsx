// dependencies
import classNames from 'classnames';
// elements
import { Chevron } from 'elements';


/* TYPES */
export interface Props {
    className?: string;
}

const ChevronToggleButton = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const chevronToggleButtonClasses = classNames(
        'chevron-toggle-button',
        className,
    );

    return (
        <button className={chevronToggleButtonClasses}>

        </button>
    )
}

export default ChevronToggleButton;