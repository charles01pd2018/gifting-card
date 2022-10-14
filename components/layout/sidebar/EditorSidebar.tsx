// dependencies
import classNames from 'classnames';


/* TYPES */
export interface Content {

}

export interface Props {
    id: string;
    className?: string;
}

const EditorSidebar = ( {
    id,
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const editorSidebarClasses = classNames(
        'editor-sidebar',
        className,
    );

    return (
        <aside id={id} className={editorSidebarClasses}>

        </aside>
    )
}

export default EditorSidebar;