// dependencies
import { ReactNode } from 'react';
import classNames from 'classnames';


/* TYPES */
export interface Props {
    children: ReactNode;
    id: string;
    className?: string;
}

const Tooltip = ( {
    children,
    id,
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const tooltipClasses = classNames(
        'tooltip',
        className,
    );

    return (
        <div id={id} className={tooltipClasses}>
            {children}
        </div>
    )
}

export default Tooltip;