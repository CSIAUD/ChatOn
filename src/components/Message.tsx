export const Message = ({msg, user}) => {
    let divClasses = "px-3 py-2 text-left rounded bg-blue-200 relative";
    if (msg.authorId === user) divClasses += " self-end";

    const authorClasses = "absolute left-2 h-5 -top-6 text-gray-500 text-xs"
    const dateClasses = "absolute right-2 h-5 -bottom-5 text-gray-500 text-xxs"
    return (
        <div className={divClasses}>
            {msg.body}
            {msg.authorId !== user ? <span className={authorClasses}>{msg.author.name}</span> : ""}
            <span className={dateClasses}>{msg.createdAt.split(' ')[0]}</span>
        </div>
    );
  };
  