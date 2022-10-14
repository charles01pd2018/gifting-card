// dependencies
import classNames from 'classnames';


/* TYPES */
export interface Props {
    className?: string;
    // styling
    direction?: 'left' | 'right' | 'up' | 'down';
    transition?: 'flip' | null;
  }
  
  /**
   * Chevron Icon
   */
  const Chevron = ( {
    className='',
    transition='flip',
    direction='up',
  }: Props ) => {
    /* CLASSNAMES */
    const chevronClasses = classNames(
      'chevron',
      `${transition}`,
      `${direction}`,
      className,
    );
  
    return (
      <span className={chevronClasses} aria-hidden={true} />
    );
  };
  
  export default Chevron;