import Image from 'next/image'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import Avatar05 from '@/public/images/avatar-05.jpg'

export default function WidgetNewsletter() {
    return (
        <div
            className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
            <div className="text-center mb-1">
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
            </div>
            <div className="text-center mb-8">
                <div className="font-aspekta font-[650] mb-1">Never miss an update!</div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Subscribe and join several others.</p>
            </div>
            <form id="sib-form" method="POST"
                  action="https://b0f10eae.sibforms.com/serve/MUIFAN1uyP7tJt1oFXVpK3GjVcLETSWUFdMRAAzcNa6fnlk_Bn6U5oxXLDyXQhARRP2l3B1q7ev5bZA0NWazTJFN_g3JiTZoyIXUJtaOFqK1_dnzz5dsXuQUO3-mVzz78I6olkkhPmZfjD94V4rWOylEMtgCXlJt-iusn4VYKuBgpb5RXNg5ItWVSQY8NZWzpLqOvIF8Tcs6Vghl">
                <button className="btn-sm w-full bg-custom-yellow-500 hover:bg-custom-yellow-600 text-black"
                        type="submit">
                    Subscribe
                </button>
            </form>
        </div>
    )
}
