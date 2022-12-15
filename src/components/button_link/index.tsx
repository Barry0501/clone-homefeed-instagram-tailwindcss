export const ButtonLink = ({
  textBtn,
  onClick,
}: {
  textBtn: string;
  onClick: () => void;
}): JSX.Element => {
  return (
    <button className="text-primary-button text-xs font-bold" onClick={onClick}>
      {textBtn}
    </button>
  );
};
