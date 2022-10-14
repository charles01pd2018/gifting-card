// dependencies
import classNames from 'classnames';


/* TYPES */
export interface Props {
    className?: string;
    type?: 'light',
}

const MovingDotsBackground = ( {
    className='',
    type,
}: Props ) => {
    /* CLASSNAMES */
    const movingDotsBackroundClasses = classNames(
        'moving-dots-background',
        type,
        className,
    );

    return (
        <div className={movingDotsBackroundClasses} 
            aria-hidden={true} />
    )
}

export default MovingDotsBackground;