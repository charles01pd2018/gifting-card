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
    bottom?: string;
    right?: string;
}

/* CONSTANTS */
const TOOLTIP_PADDING = 10;

/* FUNCTIONS */
interface GetTooltipStylesInput {
    ref:  RefObject<HTMLElement>;
    tooltipRef: RefObject<HTMLDivElement>;
    position: TooltipPositions;
}
const getTooltipStyles = ( input: GetTooltipStylesInput ) => {
    const { ref, tooltipRef, position } = input;
    const tooltipRect = tooltipRef.current?.getBoundingClientRect();
    const refRect = ref.current?.getBoundingClientRect();

    if ( tooltipRect && refRect ) {
        if ( position === 'top' ) {
            return {
                left: '50%',
                bottom: `${refRect.height - tooltipRect.height + TOOLTIP_PADDING}px`
            }
        }
        else if ( position === 'bottom' ) {
            return {
                left: `50%`,
                top: `${refRect.height + tooltipRect.height - TOOLTIP_PADDING}px`
            }
        }
        else if ( position === 'left' ) {
            return {
                top: '50%',
                right: `${refRect.width - TOOLTIP_PADDING}px`,
            }
        }
        else if ( position === 'right' ) {
            return {
                top: '50%',
                left: `${refRect.width + TOOLTIP_PADDING}px`,
            }
        }
    }


    return {};
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
        className,
    );
    
    const pointerClasses = classNames(
        'pointer',
        position,
    );

    useEffect( () => {
        if (
            typeof ref !== 'function' &&
            ref?.current
        ) {
            ref.current?.addEventListener( 'pointerover', handlePointerOver );
            ref.current?.addEventListener( 'pointerleave', handlePointeLeave );

            setTooltipStyles( getTooltipStyles( {
                ref,
                tooltipRef,
                position,
            } ) );

            return () => {
                ref.current?.removeEventListener( 'pointerover', handlePointerOver );
                ref.current?.removeEventListener( 'pointerleave', handlePointeLeave );
            }
        }
    }, [] );

    return (
        <div id={id} ref={tooltipRef} className={tooltipWrapperClasses} 
            role='tooltip' style={tooltipStyles}>
            <span className='tooltip'>
                {children}
                {
                    includeArrow ? (
                        <span className={pointerClasses}
                            aria-hidden={true} />
                    ) : ''
                }
            </span>
        </div>
    )
} );

export default Tooltip;