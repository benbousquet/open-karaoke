function ProgressBar({ curTime, totalTime, skipTo }) {
  return (
    <div>
      <div
        className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
        onClick={(e) => {
          const timeTo = (e.clientX / e.target.clientWidth) * totalTime;
          skipTo(timeTo);
        }}
      >
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${(curTime / totalTime) * 100}%` }}
        ></div>
      </div>

      <p>
        {Math.floor(curTime)} / {Math.floor(totalTime)}
      </p>
    </div>
  );
}

export default ProgressBar;
