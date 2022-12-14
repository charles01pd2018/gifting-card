// dependencies
import { ReactNode } from 'react';
// elements
import { MovingDotsBackground } from 'elements';


/* TYPES */
export interface Props {
    children: ReactNode;
}

const DisplayLayout = ( {
    children
}: Props ) => {

    return (
        <>
            <main className='display-layout container'>
                {children}
            </main>
            <MovingDotsBackground />
        </>
    );
}

export default DisplayLayout;