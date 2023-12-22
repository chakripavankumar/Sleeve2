import TrailImage  from "../../images/Trail2.png"
const Customize = () => {
  return (
      <div className="flex flex-col items-center gap-8 mb-16 mt-20">
          <small className="inline-flex gap-2 font-semibold text-[#783AF5] dark:text-[#9C6AFF] uppercase tracking-wider">
              Customization
          </small>
          <h2 className="text-3xl md:text-5xl font-bold mt-10">
              Countless ways to customize.
          </h2>
          <p className="text-lg md:text-2xl max-w-4xl">
              Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.
          </p>
       <div className="h-auto w-auto mt-10">
          <img
              src={TrailImage}
              alt="img"
              className="bg-black mt-12">
          </img>
          </div>
          </div>
  )
}
export default Customize
