// dependencies
import classNames from 'classnames';


/* TYPES */
export interface Props {
    className?: string;
}

/* CONSTANTS */
const CIRCLES = [
    {
        size: 'sm',
    },
    {
        size: 'md',
    },
    {
        size: 'lg',
    },
    {
        size: 'sm',
    },
    {
        size: 'sm',
    },
]

const MovingDotsBackground = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const movingDotsBackroundClasses = classNames(
        'moving-dots-background',
        className,
    );

    return (
        <div className={movingDotsBackroundClasses} 
            aria-hidden={true}>
            {
                CIRCLES.map( ( { size }, index ) => {
                    const circleClasses = classNames(
                        'circle',
                        size,
                    );

                    return (
                        <span key={index} 
                            className={circleClasses} />
                    )
                } )
            }
        </div>
    )
}

export default MovingDotsBackground;