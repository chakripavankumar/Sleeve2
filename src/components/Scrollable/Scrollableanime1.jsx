import Sticky from "react-sticky-el";

const Scrollableanime1 = () => {
  return (
    <div className="flex flex-row mt-[-00px]">
      <div className="relative flex flex-col lg:w-1/2 lg:py-24 gap-20 lg:gap-0">
        <div className=" relative  flex w-full flex-col lg:flex-row lg:justify-start items-center sm:items-start lg:py-40 text-lg md:text-2xl sm:text-left gap-12 lg:gap-0 lg:pl-11">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col  md:mb-10 lg:flex-col items-center sm:items-start md:items-center lg:items-start gap-4 md:gap-16 lg:gap-7 mb-6  lg:mb-16">
              <div className="flex items-center justify-center sm:justify-start sm:mx-0.5">
                <div className="mr-5 ml-5 sm:-mr-11 sm:ml-0">
                  <span className="relative max-w-none transition duration-500">
                    <img
                      src="https://replay.software/sleeve/images/IconArrayArtworkDark.png"
                      alt="icon1 pg-1"
                      width="86" height="86"
                      className="w-86 h-86 mt-0"/>
                  </span>
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold">Artwork</h3>
            </div>
            <div className="flex flex-col lg:flex-col gap-6 lg:gap-10">
              <p className="lg:max-w-[28ch]">
                Scale artwork all the way up or all the way down. Round the
                corners or leave them square.{" "}
              </p>
              <p className="lg:max-w-[28ch]">
                Choose shadow and lighting effects to bring your album artwork
                to life.
              </p>
              <p>Or hide it completely.</p>
            </div>
          </div>

          <div className="relative lg:absolute lg:left-full w-full inset-y-0 py-16 lg:py-0 flex flex-col justify-center items-center">
            <Sticky className='h-[1000px] w-[500px]'>
                <div className="color-bg w-[100px] h-[100px] "></div>
              <img
                className="absolute top-10 h-[600px] rounded-2xl" src="https://replay.software/sleeve/images/SonomaWallpaperBannerDark@2x.jpg" width="500"alt="Imageinterface1" />
            </Sticky>

            <div className="relative flex flex-col gap-7 items-center justify-center z-20 transform-gpu -mt-[800px]">
              <div className="relative flex transform-gpu">
                <span className="absolute inset-0 shadow-big dark:shadow-big-dark rounded-xl"></span>
                <span className="relative max-w-none transition duration-500">
                  <img
                    src="https://replay.software/sleeve/images/Artwork1Dark.jpg"
                    alt="Imageinterface1"
                    width="330"height="126"
                    className="w-330 h-126 rounded-xl"/>
                </span>
              </div>
              <div className="relative flex transform-gpu">
                <span className="absolute inset-0 shadow-big dark:shadow-big-dark rounded-xl"></span>
                <span className="relative max-w-none transition duration-500">
                  <img
                    src="https://replay.software/sleeve/images/Artwork2Dark.jpg"
                    alt="Image interface2"
                    width="330"height="102"
                    className="w-330 h-102 rounded-xl"/>
                </span>
              </div>
              <div className="relative flex transform-gpu">
                <span className="absolute inset-0 shadow-big dark:shadow-big-dark rounded-xl"></span>
                <span className="relative max-w-none transition duration-500">
                  <img
                    src="https://replay.software/sleeve/images/Artwork3Dark.jpg"
                    alt="Imageinterface3"
                    width="330"height="102"
                    className="w-330 h-102 rounded-xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Scrollableanime1;
