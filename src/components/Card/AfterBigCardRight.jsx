

const AfterBigCardRight = () => {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-[rgba(150,255,238,0.1)] to-[rgba(24,192,233,0.1)] shadow-outline dark:shadow-outline-bright overflow-hidden">
      <img
        src="https://replay.software/sleeve/images/ThemeFile.png"
        alt="main r-1"
        width="210"
        height="275"
        className="absolute left-auto -right-6 lg:left-96 lg:right-auto -bottom-20 lg:-bottom-10 opacity-50 rotate-[-5deg]"
      />
      <div className="flex flex-col lg:flex-row gap-4 py-9 px-11 h-full">
        <div className="flex flex-col gap-4 text-lg my-auto">
          <b className="font-semibold text-2xl">Shareable</b>
          <p className="lg:w-[26ch]">
            Export your themes and share them with friends using the handy new Sleeve Theme file format.
          </p>
          <p className="lg:w-[26ch]">Install themes from anywhere with a double-click or a drag and drop.</p>
        </div>
        <span className="relative my-auto -ml-4 lg:left-2 lg:ml-0 pt-2">
          <img
            src="https://replay.software/sleeve/images/ThemeExportDark.png"
            alt="share img"
            width="154"
            height="154"
            className="z-10 max-w-none rotate-[3deg]"
          />
        </span>
      </div>
    </div>
  );
};

export default AfterBigCardRight;
