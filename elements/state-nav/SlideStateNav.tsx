// dependencies
import classNames from 'classnames';
import { useEffect, useState, useRef, useMemo } from 'react';


/* TYPES */
interface Item {
    type: string;
    text: string;
    isActive?: boolean;
}

export interface Props {
    id?: string;
    className?: string;
    items: Item[];
    onClick: ( sectionType: string ) => void;
    activeIndex: number;
    activeColor?: string
}

interface CalcPrevItemWidthsInput {
    activeIndex: number;
    initialNum?: number;
    itemWidths?: number[];
}

/* UTILS FUNCTIONS */
const calcPrevItemWidths = ( input: CalcPrevItemWidthsInput ) => {
    /* VARS */
    const { activeIndex, initialNum=0, itemWidths } = input;

    let width = 0;

    if ( !itemWidths )
        return width;
    
    if ( initialNum > activeIndex )
        for ( let i=activeIndex; i < initialNum; i++ ) {
            width -= itemWidths[i];
        }
    else
        for ( let i=initialNum; i < itemWidths.length; i++ ) {
            if ( i === activeIndex )
                break;
            
            width += itemWidths[i];
        }

    return width;
}

const SlideStateNav = ( {
    id,
    className='',
    items,
    onClick,
    activeIndex,
    activeColor='blue',
}: Props ) => {
    /* HOOKS */
    const [ itemWidths, setItemWidths ] = useState<number[]>();
    const [ activeItemWidth, setActiveItemWidth ] = useState<number>();
    const ref = useRef<HTMLUListElement>( null );
    const initialActiveIndex = useRef<number>( activeIndex );

    /* CLASSNAMES */
    const slideStateNavClasses = classNames(
        'slide-state-nav',
        activeColor,
        className,
    );

    useEffect( () => {
        const activeItem = document
            .getElementsByClassName( 'active-slide-state-nav-item' )[0];

        setActiveItemWidth( activeItem.clientWidth );
    }, [ items ] );

    useEffect( () => {
        const items = document
            .getElementsByClassName( 'slide-state-nav-item' );

        setItemWidths( 
            [ ...items ].map( ( { clientWidth } ) => clientWidth ) );
    }, [] );

    const initialLeft = useMemo( () => calcPrevItemWidths( {
       activeIndex: initialActiveIndex.current,
       itemWidths,
    } ), [ itemWidths ] );

    const prevItemWidths = useMemo( () => calcPrevItemWidths( {
        activeIndex,
        initialNum: initialActiveIndex.current,
        itemWidths,
    } ), [ activeIndex ] );

    return (
        <ul id={id} ref={ref} className={slideStateNavClasses}>
            <span className='background-slider'
                aria-hidden={true} style={{
                    left: `${initialLeft}px`,
                    transform: `translateX(${prevItemWidths}px)`,
                    width: `${activeItemWidth}px`,
                }} />
            {
                items.map( ( { type, isActive, text } ) => {
                    /* CLASSNAMES */
                    const itemClasses = classNames(
                        'slide-state-nav-item',
                        isActive ? 'active-slide-state-nav-item' : 
                            'not-active-slide-state-nav-item',
                    );

                    return (
                        <li key={type} className={itemClasses}>
                        <button onClick={() => onClick( type )} 
                            aria-pressed={!!isActive}>
                            {text}
                        </button>
                        </li>
                    )
                } )
            }
        </ul>
    )
}

export default SlideStateNav;