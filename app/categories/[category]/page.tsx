import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAllCategories, categoryNames, getMonumentsByCategory, type Category } from '@/data/monuments'

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: category,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category as Category
  
  if (!getAllCategories().includes(category)) {
    notFound()
  }

  const monuments = getMonumentsByCategory(category)

  return (
    <div className="category-detail-page">
      <div className="category-detail-header">
        <Link href="/categories" className="back-button">
          ← Назад до категорій
        </Link>
        <div className="category-header-content">
          <div className="category-icon-large">
            {category === 'churches' && '⛪'}
            {category === 'defensive' && '🏰'}
            {category === 'civil' && '🏛️'}
          </div>
          <h1 className="category-detail-title">{categoryNames[category]}</h1>
          <p className="category-detail-count">{monuments.length} пам&apos;яток</p>
        </div>
      </div>

      <div className="category-gallery">
        {monuments.map((monument) => (
          <Link
            key={monument.id}
            href={`/monuments/${monument.id}`}
            className="category-card"
          >
            <Image
              src={monument.image}
              alt={monument.name}
              width={400}
              height={250}
              className="card-image"
              unoptimized
            />
            <div className="card-content">
              <h2 className="card-title">{monument.name}</h2>
              <p className="card-description">{monument.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

