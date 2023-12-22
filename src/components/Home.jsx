const Home = () => {
  return (
    <div className="flex flex-col gap-8"> 
      {/* main heading */}
      <h1 className="text-6xl md:text-8xl  font-bold tracking-tight bg-gradient-to-b from-black to-[#444] bg-clip-text text-transparent dark:from-white dark:to-[#ccc] z-20 ">
        Sleeve
        <span className="font-light m-3">2</span>
      </h1>  
      {/* mid paragraph  */}
      <p className="text-2xl text-white sm:text-5xl font-bold">
        The ultimate music accessory for your Mac.
      </p>
      <div className="m-auto">
        <p className="sm:ml-8 text-lg sm:text-2xl w-[750px] dark:text-white/80">
          Sleeve sits on the desktop, displaying and controlling the music you’re currently playing in
          
          <span className="ml-1 whitespace-nowrap">
            <span className="relative top-[2px] mr-1 sm:mr-0 sm:top-[4px] inline-flex w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]">
              <img
                src="https://replay.software/sleeve/images/AppMusicDark.png"
                alt="Image of an app icon"
                width="24"height="24"/>
            </span>
            Apple Music
          </span>
          ,
          <span className="ml-1 whitespace-nowrap">
            <span className="relative top-[2px] mr-1 sm:mr-0 sm:top-[4px] inline-flex w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]">
              <img
                src="https://replay.software/sleeve/images/AppSpotifyDark.png"
                alt="2 icon"
                width="24"height="24"/>
            </span>
            Spotify
          </span>
          , and
          <span className="ml-1 whitespace-nowrap">
            <span className="relative top-[2px] mr-1 sm:mr-0 sm:top-[4px] inline-flex w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]">
              <img
                src="https://replay.software/sleeve/images/AppDopplerDark.png"
                alt="icon2"
                width="24"
                height="24"
              />
            </span>
            Doppler.
          </span>
        </p>
      </div>
    </div>
  );
};
export default Home;
