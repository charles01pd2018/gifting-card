// dependencies
import type { ReactNode } from 'react';
import classNames from 'classnames';


/* TYPES */
export interface Props {
    children: ReactNode;
    id: string;
    className?: string;
}

const Container = ( {
    children,
    id,
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const containerClasses = classNames(
        'container-wrapper',
        'container',
        className
    );

    return (
        <section id={id} className={containerClasses} >
            {children}
        </section>
    )
}

export default Container;