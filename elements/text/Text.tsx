// dependencies
import { JSXElementConstructor } from 'react';
import classNames from 'classnames';


/* TYPES */
export interface Content {
    text: string;
}

export interface Props {
    className?: string;
    Component: string | JSXElementConstructor<any>;
    content: Content;
}

const Text = ( {
    className='',
    Component,
    content,
}: Props ) => {
    /* CONTENT */
    const { text } = content;

    /* CLASSNAMES */
    const textClasses = classNames(
        'text-wrapper',
        className,
    );

    return (
        <Component className={textClasses}>
            {text}
        </Component>
    )
}

export default Text;