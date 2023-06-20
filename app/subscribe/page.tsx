import Image from 'next/image'
import WidgetSponsor from '@/components/widget-sponsor'
import WidgetBook from '@/components/widget-book'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import Avatar05 from '@/public/images/avatar-05.jpg'
import Testimonial01 from '@/public/images/testimonial-01.jpg'
import Testimonial02 from '@/public/images/testimonial-02.jpg'

export const metadata = {
  title: 'About - DevSpace',
  description: 'Page description',
}

export default function Subscribe() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <div className="space-y-10">
            <section>
              {/* Page title */}
              <h1 className="h1 font-aspekta mb-5">Never miss an update ✨</h1>
              {/* Page content */}
              <div className="text-slate-500 dark:text-slate-400 space-y-8">
                <p className="text-lg">
                  This newsletter is written by Huzaifa Mustafa, who previously worked at several tech companies. Here is what to expect
                  by subscribing:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-custom-yellow-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Stay Up-to-Date: Never miss a beat with the latest posts and crucial updates.</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-custom-yellow-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Exclusive Content: Unlock access to in-depth guides and personal insights, exclusive to subscribers.</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-custom-yellow-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Practical Tips and Code Snippets: Boost your skills with useful tips and coding shortcuts delivered straight to your inbox.</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-3 h-3 fill-current text-custom-yellow-500 mr-3 mt-1.5 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Community Connection: Join a vibrant community of learners and tech enthusiasts for engaging discussions and networking.</span>
                  </li>
                </ul>
                <div>
                  {/* Subscribe form */}
                  <form id="sib-form" method="POST"
                        action="https://b0f10eae.sibforms.com/serve/MUIFAN1uyP7tJt1oFXVpK3GjVcLETSWUFdMRAAzcNa6fnlk_Bn6U5oxXLDyXQhARRP2l3B1q7ev5bZA0NWazTJFN_g3JiTZoyIXUJtaOFqK1_dnzz5dsXuQUO3-mVzz78I6olkkhPmZfjD94V4rWOylEMtgCXlJt-iusn4VYKuBgpb5RXNg5ItWVSQY8NZWzpLqOvIF8Tcs6Vghl">

                    <div className="flex flex-col md:flex-row max-w-xs mx-auto md:max-w-md md:mx-0">
                      <button className="btn text-black bg-custom-yellow-500 hover:bg-custom-yellow-600">
                        Subscribe
                      </button>
                    </div>
                    {/* Success message */}
                    {/* <p class="text-xs text-slate-500 mt-3 italic">Thanks for subscribing!</p> */}
                  </form>
                  <div className="flex items-center mt-5">
                    <div className="inline-flex -space-x-3 -ml-0.5">
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar01}
                        width={24}
                        height={24}
                        alt="Avatar 01"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar02}
                        width={24}
                        height={24}
                        alt="Avatar 02"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar03}
                        width={24}
                        height={24}
                        alt="Avatar 03"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar04}
                        width={24}
                        height={24}
                        alt="Avatar 04"
                      />
                      <Image
                        className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                        src={Avatar05}
                        width={24}
                        height={24}
                        alt="Avatar 05"
                      />
                    </div>
                    <div className="text-sm text-slate-500 ml-3">Subscribe and join several others.</div>
                  </div>

                </div>
              </div>
            </section>

            <section>
              {/* Cards */}
              <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
                <a
                  className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                  href="#0"
                >
                  <div className="flex flex-col h-full">
                    <div className="grow">
                      <Image className="rounded-full mb-2" src={Testimonial01} width={40} height={40} alt="Testimonial 01" />
                      <div className="text-lg font-aspekta font-[650] mb-1">“ The Best Newsletter “</div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        Subscribing to this newsletter has been one of the best decisions I've made this year. The blend of personal insights, technical deep-dives, and practical tips is truly unique. I appreciate the variety and quality of content, it feels like a personal mentor guiding me through the world of technology. Each edition leaves me more enlightened and excited about the future of the tech industry
                      </p>
                    </div>
                    <div className="text-xs font-aspekta font-[650] text-custom-yellow-500">— Alexa Williams, Software Developer</div>
                  </div>
                </a>
                <a
                  className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                  href="#0"
                >
                  <div className="flex flex-col h-full">
                    <div className="grow">
                      <Image className="rounded-full mb-2" src={Testimonial02} width={40} height={40} alt="Testimonial 02" />
                      <div className="text-lg font-aspekta font-[650] mb-1">“ Incredible Value “</div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        The depth and diversity of the content are what keep me subscribed to this newsletter. From the latest trends in Shopware to exclusive code snippets and the engaging community discussions, there's always something to look forward to in each issue. It's more than just a newsletter, it's a treasure trove of resources for any tech enthusiast.
                      </p>
                    </div>
                    <div className="text-xs font-aspekta font-[650] text-custom-yellow-500">— Daniel Smith, E-commerce Consultant</div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">

          <WidgetSponsor />
          {/*<WidgetBook />*/}

        </div>
      </aside>

    </div>
  )
}
