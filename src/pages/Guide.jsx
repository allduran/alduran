import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import guides from '../guides/guides.json'

export default function Guide() {
  const { slug } = useParams()
  const [content, setContent] = useState('')
  const meta = guides.find(g => g.slug === slug)

  useEffect(() => {
    import(`../guides/${slug}.md?raw`)
      .then(m => setContent(m.default))
      .catch(() => setContent('# Guía no encontrada'))
  }, [slug])

  return (
    <div className="container">
      <article className="post">
        <Link className="back" to="/guides">← volver a guías</Link>
        {meta && (
          <div className="meta">
            <span>{meta.tag}</span>{meta.readTime} · {meta.date}
          </div>
        )}
        <div className="content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}