function Controls({ toggle, isPlaying }) {
  const buttonCss = isPlaying
    ? "bg-red-500 hover:text-red-500 hover:border-red-500 "
    : "bg-blue-500 hover:text-blue-500 hover:border-blue-500 ";

  return (
    <div>
      <button
        className={
          buttonCss +
          "hover:bg-white text-white border border-transparent font-bold py-2 px-4 rounded-full transition-colors"
        }
        onClick={() => {
          toggle(isPlaying);
        }}
      >
        {isPlaying ? "Stop" : "Play"}
      </button>
    </div>
  );
}

export default Controls;
