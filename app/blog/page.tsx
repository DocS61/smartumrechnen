import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { blogArticles } from '@/lib/blog-data'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog – SmartUmrechnen',
  description: 'Wissenswertes rund um Maßeinheiten, Umrechnungen und internationale Standards. Tipps, Erklärungen und Hintergrundwissen.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog – SmartUmrechnen',
    description: 'Wissenswertes rund um Maßeinheiten, Umrechnungen und internationale Standards.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function BlogPage() {
  const sortedArticles = [...blogArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <div className="max-w-[1000px] mx-auto px-4 py-12">
          <div className="mb-10">
            <h1 className="font-display text-3xl font-bold tracking-tight mb-4 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-[700px]">
              Wissenswertes rund um Maßeinheiten, Umrechnungen und internationale Standards – verständlich erklärt und praxisnah aufbereitet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                </div>
                <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lesen <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
