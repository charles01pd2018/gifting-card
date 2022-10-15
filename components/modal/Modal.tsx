// dependencies
import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
// hooks
import { useClickOutsideRef, useFocusTrap, useDelayUnmount } from 'hooks';
// elements
import { XCloseButton } from 'elements';


/* TYPES */
export interface Props {
    // customization
    children: ReactNode;
    id: string;
    className?: string;
    mountTime?: number;
    // states
    isActive: boolean;
    closeModal: () => void;
    // accessibility
    ariaLabelledBy?: string;
    ariaDescribedBy: string;
    // styling
    showBackdrop?: boolean;
}

/**
 * Modal wrapper component.
 */
const Modal = ( {
    children,
    id,
    className='',
    mountTime=220,
    isActive,
    closeModal,
    ariaLabelledBy,
    ariaDescribedBy,
    showBackdrop=true,
}: Props ) => {
    /* HOOKS */
    const [ ref ] = useClickOutsideRef<HTMLDivElement>( closeModal );
    const [ isSubmitting, setIsSubmitting ] = useState<boolean>( false );
    const shouldRender = useDelayUnmount( isActive, mountTime );

    /* CLASSNAMES */
    const modalWrapperClasses = classNames(
        'modal-wrapper',
        `${isActive ? 'active' : 'not-active'}`,
    );

    const modalClasses = classNames(
        'modal',
        `${isSubmitting ? 'loading' : ''}`,
        className,
    );

    // attach focus trap to modal
    useFocusTrap( ref, isActive );

    return (
        <>
        {
        isActive || shouldRender ? createPortal(
            <section id={id} className={modalWrapperClasses}>
                <div ref={ref} className={modalClasses} role='dialog' aria-modal='true'
                    aria-labelledby={ariaLabelledBy} aria-describedby={ariaDescribedBy}>
                    <XCloseButton onClick={closeModal} ariaLabel='close modal' />
                    {children}
                </div>
                {
                    showBackdrop ? (
                        <span className='backdrop' aria-hidden={true} />
                    ) : ''
                }
            </section>, document.body,
        ) : ''
        }
        </>
    )
}

export default Modal;