import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'

export default function PostItem({ ...props }) {

  // Replace `content` with the actual content of your post
  const wordsPerMinute = 250;
  const wordCount = props.body.code.split(' ').length;
  const estimatedTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <article className="py-5 border-b border-slate-100 dark:border-slate-800">
      <div className="flex items-start">
        <Image className="rounded w-16 h-16 sm:w-[88px] sm:h-[88px] object-cover mr-6" src={props.image} width={88} height={88} alt={props.title} />
        <div>
          <div className="text-xs text-slate-500 uppercase mb-1">
            <span className="text-custom-yellow-500">—</span> <PostDate dateString={props.publishedAt} />
            <span className="ml-1 text-xs inline-flex">·</span> {estimatedTime} minute{estimatedTime !== 1 && 's'} Read
          </div>
          <h3 className="font-aspekta text-lg font-[650] mb-1">
            <Link
              className="inline-flex relative hover:text-custom-yellow-600 dark:hover:text-custom-yellow-500 duration-150 ease-out before:scale-x-0 before:origin-center before:absolute before:inset-0 before:bg-custom-yellow-200 dark:before:bg-custom-yellow-500 before:opacity-30 before:-z-10 before:translate-y-1/4 before:-rotate-2 hover:before:scale-100 before:duration-150 before:ease-in-out"
              href={`/${props.slug}`}
            >
              {props.title}
            </Link>
          </h3>
          <div className="flex">
            <div className="grow text-sm text-slate-500 dark:text-slate-400">{props.description}</div>
            <Link className="hidden lg:flex shrink-0 text-custom-yellow-500 items-center justify-center w-12 group" href={`/${props.slug}`} tabIndex={-1}>
              <svg
                className="fill-current group-hover:translate-x-2 duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
              >
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
