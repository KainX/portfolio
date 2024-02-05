export const Card = ({children}) => {
    return(
        <article className="container border rounded border-gray-600 mt-16 px-4 py-16">
            {children}
        </article>
    );
}