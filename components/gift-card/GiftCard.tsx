// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';
// types
import { GiftCardContent, GiftCardTypes } from 'components/types';


/* TYPES */
export interface Props {
    id: string;
    className?: string;
    content: GiftCardContent;
    type?: GiftCardTypes;
    customType?: string;
}

const GiftCard = ( {
    id,
    className='',
    content,
    type='chipotle',
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