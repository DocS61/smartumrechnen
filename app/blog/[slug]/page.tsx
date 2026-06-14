import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { blogArticles, getArticleBySlug } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, Clock, ArrowLeft, BookOpen } from 'lucide-react'

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Artikel nicht gefunden' }

  return {
    title: `${article.title} – SmartUmrechnen Blog`,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      locale: 'de_DE',
      publishedTime: article.date,
    },
  }
}

function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: JSX.Element[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="font-semibold text-xl mt-8 mb-4">{line.slice(3)}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="font-semibold text-lg mt-6 mb-3">{line.slice(4)}</h3>)
    } else if (line.startsWith('- **')) {
      // Collect list items
      const listItems: JSX.Element[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        const text = lines[i].slice(2)
        listItems.push(
          <li key={i} className="ml-2" dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        )
        i++
      }
      elements.push(<ul key={`ul-${i}`} className="list-disc list-inside space-y-1.5 mb-4 text-foreground/90">{listItems}</ul>)
      continue
    } else if (line.startsWith('| ')) {
      // Collect table rows
      const tableRows: string[] = []
      while (i < lines.length && lines[i].startsWith('| ')) {
        tableRows.push(lines[i])
        i++
      }
      elements.push(renderTable(tableRows, i))
      continue
    } else if (line.startsWith('1. ') || line.startsWith('2. ')) {
      const listItems: JSX.Element[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        const text = lines[i].replace(/^\d+\.\s/, '')
        listItems.push(
          <li key={i} className="ml-2" dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        )
        i++
      }
      elements.push(<ol key={`ol-${i}`} className="list-decimal list-inside space-y-1.5 mb-4 text-foreground/90">{listItems}</ol>)
      continue
    } else if (line.trim() === '') {
      // Skip empty lines
    } else {
      elements.push(
        <p key={i} className="mb-4 leading-relaxed text-foreground/90" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      )
    }
    i++
  }

  return elements
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/"(.+?)"/g, '&bdquo;$1&ldquo;')
}

function renderTable(rows: string[], key: number) {
  const parseRow = (row: string) => row.split('|').filter(cell => cell.trim() !== '').map(cell => cell.trim())
  const headerCells = parseRow(rows[0])
  const dataRows = rows.slice(2).map(parseRow)

  return (
    <div key={`table-${key}`} className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            {headerCells.map((cell, j) => (
              <th key={j} className="text-left py-2 px-3 font-semibold bg-muted/50" dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((cells, j) => (
            <tr key={j} className="border-b border-border/50">
              {cells.map((cell, k) => (
                <td key={k} className="py-2 px-3" dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const relatedArticles = blogArticles
    .filter(a => a.slug !== article.slug)
    .slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <article className="max-w-[800px] mx-auto px-4 py-12">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Zurück zum Blog
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                {article.category}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readingTime}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(article.date).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight mb-3">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {article.description}
            </p>
          </header>

          <div className="prose-sm">
            {renderMarkdown(article.content)}
          </div>
        </article>

        {/* Verwandte Artikel */}
        <section className="max-w-[800px] mx-auto px-4 pb-12">
          <h2 className="font-semibold text-xl mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Weitere Artikel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="p-4 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all"
              >
                <span className="text-xs font-medium text-primary">{a.category}</span>
                <h3 className="font-semibold text-sm mt-1 mb-2 line-clamp-2">{a.title}</h3>
                <span className="text-xs text-muted-foreground">{a.readingTime}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* JSON-LD Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: article.title,
              description: article.description,
              datePublished: article.date,
              author: {
                '@type': 'Person',
                name: 'Dr. Hartmut Sauer',
              },
              publisher: {
                '@type': 'Organization',
                name: 'SmartUmrechnen',
                url: 'https://smartumrechnen.de',
              },
            }),
          }}
        />
      </main>
      <SiteFooter />
    </>
  )
}
