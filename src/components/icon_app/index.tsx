export const IconApp = ({
  icon,
  onClick,
  className,
}: {
  icon: JSX.Element;
  onClick: () => void;
  className?: string;
}): JSX.Element => {
    return (
        <div className={`${className} p-2 cursor-pointer`} onClick={onClick}>
            {icon}
        </div>
    )
};
