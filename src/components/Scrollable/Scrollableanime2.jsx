const Scrollableanime2 = () => {
  return (
    <div className="flex flex-row mt-[-00px] ">
      <div className="relative flex flex-col lg:w-1/2 lg:py-24 gap-20 lg:gap-0">
        <div className=" relative  flex w-full flex-col lg:flex-row lg:justify-start items-center sm:items-start lg:py-40 text-lg md:text-2xl sm:text-left gap-12 lg:gap-0 lg:pl-11">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col  md:mb-10 lg:flex-col items-center sm:items-start md:items-center lg:items-start gap-4 md:gap-16 lg:gap-7 mb-6  lg:mb-16">
              <div className="flex items-center justify-center sm:justify-start sm:mx-0.5">
                <div className="-mr-5 -ml-5 sm:-mr-11 sm:ml-0">
                  <span className="relative max-w-none transition duration-500">
                    <img
                      src="https://replay.software/sleeve/images/IconArrayTrackDark.png"
                      alt="icon1 pg-1"
                      width="86"height="86"
                      className="w-86 h-86 mt-0" />
                  </span>
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold">Typography</h3>
            </div>
            <div className="flex flex-col lg:flex-col gap-6 lg:gap-10">
              <p className="lg:max-w-[28ch]">
                Pick the track info you want to display, and then exactly how to
                display it.
              </p>
              <p className="lg:max-w-[28ch]">
                Choose the fonts, weights, sizes, and transparency to use for
                each line, along with customizing color and shadow.
              </p>
            </div>
          </div>
         <div className="relative lg:absolute lg:left-full w-full inset-y-0 lg:py-0 flex flex-col justify-center items-center">
            <div className="relative flex flex-col gap-7 items-center justify-center z-20 transform-gpu">
              <div className="relative flex transform-gpu">
                <span className="absolute inset-0 shadow-big dark:shadow-big-dark rounded-xl"></span>
                <span className="relative max-w-none transition duration-500">
                  <img
                    src="https://replay.software/sleeve/images/Typography1Dark.jpg"
                    alt="Imageinterface1"
                    width="330" height="234"
                    className="w-330 h-234 rounded-xl"/>
                </span>
              </div>
              <div className="relative flex transform-gpu">
                <span className="absolute inset-0 shadow-big dark:shadow-big-dark rounded-xl"></span>
                <span className="relative max-w-none transition duration-500">
                  <img
                    src="https://replay.software/sleeve/images/Typography2Dark.jpg"
                    alt="Imageinterface2"
                    width="330"height="305"
                    className="w-330 h-305 rounded-xl"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Scrollableanime2;
