import css from "./LoadMoreButton.module.css";

export const LoadMoreButton = ({ text, onClick, disabled, isLoading }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={isLoading ? css.visuallyHidden : css.buttonLoadMore}
      disabled={disabled}
    >
      {disabled ? "No more images" : text}
    </button>
  );
};
