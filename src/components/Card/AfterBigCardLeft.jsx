const AfterBigCardLeft = () => {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-[rgba(121,220,233,0.1)] to-[rgba(53,121,245,0.1)] shadow-outline dark:shadow-outline-bright overflow-hidden">
      <img
        src="https://replay.software/sleeve/images/ThemeIcon.png"
        alt="brush icon"
        width="221"
        height="221"
        className="absolute left-auto -right-6 lg:left-96 lg:right-auto bottom-5 opacity-50 rotate-[-5deg]"
      />
      <div className="flex flex-col lg:flex-row gap-4 py-9 px-11 h-full">
        <div className="flex my-auto flex-col gap-4 text-lg">
          <b className="font-semibold text-2xl">Change it up</b>
          <p className="lg:w-[20ch]">
            Switch between themes with just a click.
          </p>
          <p className="lg:w-[24ch]">
            Modify the built-in themes or create your own using Sleeve’s
            extensive preferences.
          </p>
        </div>
        <div className="relative flex lg:flex-col gap-y-2  my-auto ml-3 pt-12 lg:pt-0">
          <img
            src="https://replay.software/sleeve/images/ThemeUIActiveDark.png"
            alt="Sleeve's theme r-1 "
            width="236"
            height="120"
            className="relative z-10 max-w-none rotate-[3deg]"
          />
          <img
            src="https://replay.software/sleeve/images/ThemeUIDark.png"
            alt=" theme selection r-2"
            width="236"
            height="120"
            className="max-w-none rotate-[3deg]"
          />
        </div>
      </div>
    </div>
  );
};

export default AfterBigCardLeft;
