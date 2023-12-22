const Scrollableanime4 = () => {
  return (
    <div className="flex flex-row">
      <div className="relative flex flex-col lg:w-1/2 lg:py-24 gap-20 lg:gap-0">
        <div className=" relative  flex w-full flex-col lg:flex-row lg:justify-start items-center sm:items-start lg:py-40 text-lg md:text-2xl sm:text-left gap-12 lg:gap-0 lg:pl-11">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col  md:mb-10 lg:flex-col items-center sm:items-start md:items-center lg:items-start md:gap-16 lg:gap-7 lg:mb-16">
              <div className="flex flex-col md:flex-row lg:flex-col items-center sm:items-start md:items-center lg:items-start md:gap-16">
                <div className="flex items-center justify-center sm:justify-start sm:-mx-0.5">
                  <div className="-mr-5 -ml-5 sm:-mr-11 sm:ml-0">
                    <span className="relative max-w-none transition duration-500">
                      <img
                        src="https://replay.software/sleeve/images/IconArrayWindowDark.png" width="86"height="86"
                        className="w-86 h-86 mt-0"/>
                    </span>
                  </div>
                  <div className="mr-5 ml-5 sm:mr-11 sm:ml-0">
                    <span className="relative max-w-none transition duration-500">
                      <img
                        src="https://replay.software/sleeve/images/IconArrayHotkeysDark.png" width="86" height="86"className="top-0 md:top-[-3px] lg:top-0 w-86 h-86"
                        style={{ marginTop: "calc(12px)" }}/>
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold">Settings</h3>
            </div>
            <div className="flex flex-col lg:flex-col gap-6 lg:gap-10">
              <p className="lg:max-w-[26ch]">
                Decide if Sleeve stays out of the way, behind windows, or in
                front of them — or only when you need to see it.
              </p>
              <p className="lg:max-w-[30ch]">
                Show it in the Dock, choose from custom icons, or keep it on the
                Desktop only.
              </p>
              <p className="lg:max-w-[28ch]">
                Set your custom keyboard shortcuts and integrate with the apps
                you use.
              </p>
            </div>
          </div>
          <div className="relative lg:absolute lg:left-full w-full inset-y-0 lg:py-0 flex flex-col justify-center items-center">
            <div className="relative flex flex-col gap-7 items-center justify-center z-20 transform-gpu">
              <div className="flex flex-col -space-y-6">
                <div className="relative -left-6 z-30">
                  <div className="relative flex transform-gpu">
                    <span className="absolute inset-0 shadow-big dark:shadow-big-dark rounded-xl"></span>
                    <span className="relative max-w-none transition duration-500">
                      <img
                        src="https://replay.software/sleeve/images/Settings1Dark.jpg"
                        width="330" height="179"
                        className="w-330 h-179 rounded-xl" />
                    </span>
                  </div>
                </div>
                <div className="relative z-20">
                  <div className="relative flex transform-gpu">
                    <span className="absolute inset-0 shadow-big dark:shadow-big-dark rounded-xl"></span>
                    <span className="relative max-w-none transition duration-500">
                      <img
                        src="https://replay.software/sleeve/images/Settings2Dark.jpg"
                        width="330"  height="337"
                        className="w-330 h-337 rounded-xl"/>
                    </span>
                  </div>
                </div>
                <div className="relative left-6 z-10">
                  <div className="relative flex transform-gpu">
                    <span className="absolute inset-0 shadow-big dark:shadow-big-dark rounded-xl"></span>
                    <span className="relative max-w-none transition duration-500">
                      <img
                        src="https://replay.software/sleeve/images/Settings3Dark.jpg"
                        width="330"height="224"
                        className="w-330 h-224 rounded-xl"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Scrollableanime4;
