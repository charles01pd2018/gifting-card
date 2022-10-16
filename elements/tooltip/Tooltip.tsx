// dependencies
import { ReactNode, useEffect, forwardRef, useState,
    useCallback, RefObject, useRef } from 'react';
import classNames from 'classnames';


/* TYPES */
export type TooltipPositions = 'top' | 'bottom' | 'right' | 'left';

export interface Props {
    children: ReactNode;
    id: string;
    className?: string;
    position?: TooltipPositions
    includeArrow?: boolean;
}

interface Styles {
    top?: string;
    left?: string;
}

/* FUNCTIONS */
interface GetStylesInput {
    ref:  RefObject<HTMLElement>;
    tooltipRef: RefObject<HTMLDivElement>;
    position: TooltipPositions;
}
const getStyles = ( input: GetStylesInput ) => {
    const { ref, tooltipRef, position } = input;
    const tooltipRect = tooltipRef.current?.getBoundingClientRect();
    const refRect = ref.current?.getBoundingClientRect();

    if ( tooltipRect && refRect ) {
        const docWidth = document.documentElement.clientWidth;
        const docHeight = document.documentElement.clientHeight;

        if ( position === 'top' ) {
            // // cannot fit on top, show below
            // if ( refRect.y - tooltipRect.height >= 0 ) {

            // }

            const x = refRect.x + ( refRect.width - tooltipRect.width );
    
            return {
                tooltipStyles: {
                    left: x < 0 ? `${refRect.x}px` : `${x}px`,
                    bottom: `${refRect.y - tooltipRect.height}px`,
                },
                pointerStyles: {},
            }
        }
        // else if ( position === 'bottom' ) {
        //     // cannot fit on bottom, show above
        //     if ( 
        //         refRect.y + refRect.height + tooltipRect.height <=
        //             window.scrollY + docHeight
        //     ) {

        //     }
    
        // }
        // else if ( position === 'right' ) {
        //     // cannot fit to the right, show left
        //     if ( 
        //         refRect.x + refRect.width + tooltipRect.width <= 
        //             window.scrollX + docWidth 
        //     ) {

        //     }
        // }
        // else if ( position === 'left' ) {
        //     // cannot fit to the left, show right
        //     if ( refRect.x - tooltipRect.width >= 0 ) {

        //     }
        // }
    }


    return {
        tooltipStyles: {},
        pointerStyles: {},
    };
}

const Tooltip = forwardRef<HTMLElement, Props>( ( {
    children,
    id,
    className='',
    position='top',
    includeArrow=true,
}, ref ) => {
    /* HOOKS */
    const tooltipRef = useRef<HTMLDivElement>( null );
    const [ isActive, setIsActive ] = useState<boolean>( true );
    const [ tooltipStyles, setTooltipStyles ] = useState<Styles>( {} );
    const [ pointerStyles, setPointerStyles ] = useState<Styles>( {} );

    /* FUNCTIONS */
    const handlePointerOver = useCallback( () => {
        setIsActive( true );
    }, [ isActive ] );

    const handlePointeLeave = useCallback( () => {
        setIsActive( false );
    }, [ isActive ] );

    /* CLASSNAMES */
    const tooltipWrapperClasses = classNames(
        'tooltip-wrapper',
        isActive ? 'active' : 'not-active',
        position,
        includeArrow ? 'has-arrow' : '',
        className,
    );
    
    const tooltipClasses = classNames(
        'tooltip',
        position,
    );

    useEffect( () => {
        if (
            typeof ref !== 'function' &&
            ref?.current
        ) {
            ref.current?.addEventListener( 'pointerover', handlePointerOver );
            ref.current?.addEventListener( 'pointerleave', handlePointeLeave );

            const { tooltipStyles, pointerStyles } = getStyles( {
                ref,
                tooltipRef,
                position,
            } );

            setTooltipStyles( tooltipStyles );
            setPointerStyles( pointerStyles );

            return () => {
                ref.current?.removeEventListener( 'pointerover', handlePointerOver );
                ref.current?.removeEventListener( 'pointerleave', handlePointeLeave );
            }
        }
    }, [] );

    return (
        <div id={id} ref={tooltipRef} className={tooltipWrapperClasses} 
            role='tooltip' style={tooltipStyles}>
            <span className={tooltipClasses} style={pointerStyles}>
                {children}
            </span>
        </div>
    )
} );

export default Tooltip;