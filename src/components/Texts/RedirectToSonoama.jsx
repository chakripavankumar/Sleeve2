import { ArrowRightCircle } from 'lucide-react';
const RedirectToSonoama = () => {
  return (
    <div className="m-auto">
     <p className="pt-6">
        <a className="flex items-center max-w-[540px] lg:max-w-full text-gray-700 dark:text-white/80 bg-gray-50 dark:bg-transparent hover:bg-white dark:hover:bg-white/5 shadow-outline  px-3 py-3 gap-3 rounded-2xl transition"
          href="/updates/sleeve-2-2-for-sonoma">
          <img src="https://replay.software/sleeve/images/Sonoma.png"
            width="40" height="40" alt="macOS Sonoma Icon"
            className="m-3 ml-2.5 mr-1.5">
          </img>
          <span className="hidden sm:inline-block">
              Now updated with <b className="font-medium">support for macOS Sonoma</b> See whats new in Sleeve 2.2
      </span>
          <ArrowRightCircle />
      </a>
      </p>  
    </div>
  )
}
export default RedirectToSonoama;
