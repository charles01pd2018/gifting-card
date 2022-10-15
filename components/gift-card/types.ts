import type { Props as GiftCardProps,
    Props as EditableGiftCardProps } from './GiftCard';

export type GiftCardTypes = 'chipotle';

export interface GiftCardContent {
    gifter: string;
    giftee: string;
    msg?: string;
}

export type {
    GiftCardProps,
    EditableGiftCardProps,
}