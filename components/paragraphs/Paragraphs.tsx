// dependencies
import classNames from 'classnames';


/* TYPES */
export interface Content {
    text: string;
}

export interface Props {
    id: string;
    className?: string;
    content: Content;
}

const Paragraphs = ( {
    id,
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { text } = content;

    /* CLASSNAMES */
    const paragraphsClasses = classNames(
        'paragraphs-wrapper',
        className
    );

    return (
        <section id={id} className={paragraphsClasses}>
            <p>{`Regular: ${text}`}</p>
            <p className='text--norm'>{`Text Normal: ${text}`}</p>
            <p className='text--sm'>{`Text Small: ${text}`}</p>
            <p className='text--xs'>{`Text Extra Small: ${text}`}</p>
            <p className='text--xxs'>{`Text Extra Extra Small: ${text}`}</p>
        </section>
    );
}

export default Paragraphs;