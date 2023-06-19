import { allPosts } from 'contentlayer/generated'
import Hero from '@/components/hero'
import PostItem from './post-item'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'
import Footer from "@/components/ui/footer";
// import WidgetBook from '@/components/widget-book'

export const metadata = {
  title: 'Huzaifa\'s Kaleidoscope',
  description: 'Welcome to \'Huzaifa\'s Kaleidoscope\', an intimate exploration of ideas, experiences, and reflections. Just as a kaleidoscope reveals a constantly changing pattern of shapes and colors, here you\'ll find a vibrant mix of topics – from personal anecdotes to deep dives into technology, culture, and beyond. Each post offers a fresh perspective, representing the ever-evolving landscape of Huzaifa\'s mind. Join us on this journey through a world as diverse, engaging, and unpredictable as a kaleidoscope\'s view.',
}

export default async function Home() {

  // Sort posts by date
  allPosts.sort((a, b) => {
    return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
  })

  return (
    <>
      <Hero />
      { /* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">

        { /* Middle area */}
        <div className="grow">
          <div className="max-w-[700px]">
            <div className="space-y-10">

              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>

                {/* Articles list */}
                <div>
                  {allPosts.map((post, postIndex) => (
                      <PostItem key={postIndex} {...post} />
                  ))}
                </div>


              </section>


              {/*<Talks />*/}
              {/*<Projects />*/}

            </div>
          </div>
        </div>

        { /* Right sidebar */}
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="space-y-6">

            <WidgetNewsletter />
            <WidgetSponsor />
            {/*<WidgetBook />*/}

          </div>
        </aside>

      </div>
    </>
  )
}
