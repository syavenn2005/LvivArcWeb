import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getMonumentById, getAllMonumentIds } from '@/data/monuments'

export async function generateStaticParams() {
  const ids = getAllMonumentIds()
  return ids.map((id) => ({
    id: id,
  }))
}

export default function MonumentPage({ params }: { params: { id: string } }) {
  const monument = getMonumentById(params.id)

  if (!monument) {
    notFound()
  }

  return (
    <div className="monument-page">
      <div className="monument-header">
        <Link href="/" className="back-button">
          ← Назад до галереї
        </Link>
        <h1 className="monument-title">{monument.name}</h1>
      </div>

      <div className="monument-content">
        <div className="monument-image-wrapper">
          <Image
            src={monument.image}
            alt={monument.name}
            width={1200}
            height={800}
            className="monument-image"
            priority
            unoptimized
          />
        </div>

        <div className="monument-info">
          <div className="monument-description">
            <h2>Про пам&apos;ятку</h2>
            <p>{monument.description}</p>
          </div>

          <div className="monument-details">
            <div className="detail-item">
              <span className="detail-label">Назва:</span>
              <span className="detail-value">{monument.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Короткий опис:</span>
              <span className="detail-value">{monument.shortDescription}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="monument-footer">
        <Link href="/" className="back-to-gallery">
          Повернутися до всіх пам&apos;яток
        </Link>
      </div>
    </div>
  )
}

