// dependencies
import { useState, useEffect } from 'react';

/**
 * Delays unmounting of component.
 * Useful for animating components off the screen
 */
const useDelayUnmount = (
    isActive: boolean,
    delayTime: number,
) => {
    const [ shouldRender, setShouldRender ] = useState( false );

    useEffect( () => {
        let timeoutId: any;

        if ( isActive && !shouldRender )
            setShouldRender( true );

        else if( !isActive && shouldRender )
            timeoutId = setTimeout(
                () => setShouldRender( false ), 
                delayTime
            );

        return () => {
            clearTimeout( timeoutId );
        }
    }, [ isActive, delayTime, shouldRender ] );

    return shouldRender;
}

export default useDelayUnmount;