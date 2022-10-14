// dependencies
import classNames from 'classnames';


/* TYPES */
export interface Props {
    className?: string;
    data: string;
    alt: string;
    width: number | string;
    height: number | string;
    type?: 'image/svg+xml';
};

const SVG = ( {
    className='',
    data, // path to SVG
    alt,
    width,
    height,
    type='image/svg+xml',
}: Props ) => {
    /* CLASSNAMES */
    const svgClasses = classNames(
        'svg',
        className,
    );

    return (
        <object className={svgClasses}
            width={width} height={height}
            data={data} type={type}>
            {alt}
        </object>
    );
}

export default SVG;