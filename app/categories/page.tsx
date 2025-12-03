'use client'

import Link from 'next/link'
import { getAllCategories, categoryNames, getMonumentsByCategory } from '@/data/monuments'
import Image from 'next/image'

export default function CategoriesPage() {
  const categories = getAllCategories()

  return (
    <div className="categories-page">
      <div className="categories-header">
        <Link href="/" className="back-button">
          ← Назад до головної
        </Link>
        <h1 className="categories-title">Архітектура міста Львова</h1>
        <p className="categories-subtitle">Оберіть категорію для перегляду пам'яток</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => {
          const monuments = getMonumentsByCategory(category)
          return (
            <Link
              key={category}
              href={`/categories/${category}`}
              className="category-card"
            >
              <div className="category-card-content">
                <div className="category-icon">
                  {category === 'churches' && '⛪'}
                  {category === 'defensive' && '🏰'}
                  {category === 'civil' && '🏛️'}
                </div>
                <h2 className="category-name">{categoryNames[category]}</h2>
                <p className="category-count">{monuments.length} пам'яток</p>
                <div className="category-preview">
                  {monuments.slice(0, 3).map((monument) => (
                    <div key={monument.id} className="preview-image-wrapper">
                      <Image
                        src={monument.image}
                        alt={monument.name}
                        width={100}
                        height={70}
                        className="preview-image"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

