// dependencies
import classNames from 'classnames';

/* TYPES */
export type GiftCardTypes = 'chipotle' | string;

export interface Content {
    gifter: string;
    giftee: string;
    msg?: string;
}

export interface Props {
    id: string;
    className?: string;
    content: Content;
    type?: GiftCardTypes;
    customType?: string;
}

const GiftCard = ( {
    id,
    className='',
    content,
    type,
    customType,
}: Props ) => {
    /* CONTENT */
    const { gifter,
        giftee,
        msg } = content;

    /* CLASSNAMES */
    const giftCardClasses = classNames(
        'gift-card',
        className,
    );

    return (
        <section id={id} className={giftCardClasses}>
            Gift Card
        </section>
    )
}

export default GiftCard;