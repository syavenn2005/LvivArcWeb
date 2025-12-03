'use client'

import Image from 'next/image'
import Link from 'next/link'
import { monuments } from '@/data/monuments'
import { useState } from 'react'
import { getAllCategories, categoryNames, type Category } from '@/data/monuments'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
  const categories = getAllCategories()

  const filteredMonuments = selectedCategory === 'all'
    ? monuments
    : monuments.filter(monument => monument.category === selectedCategory)

  return (
    <div className="container">
      <header className="header">
        <h1>🏛️ Архітектура Львова</h1>
        <p>Відкрийте красу історичних пам'яток міста Лева</p>
        <Link href="/categories" className="categories-link">
          Переглянути за категоріями →
        </Link>
      </header>

      <div className="filter-tabs">
        <button
          className={`filter-tab ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          Всі пам'ятки
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {categoryNames[category]}
          </button>
        ))}
      </div>

      <div className="gallery">
        {filteredMonuments.map((monument) => (
          <Link
            key={monument.id}
            href={`/monuments/${monument.id}`}
            className="card"
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
              <div className="card-category-badge">
                {monument.category === 'churches' && '⛪'}
                {monument.category === 'defensive' && '🏰'}
                {monument.category === 'civil' && '🏛️'}
                <span>{categoryNames[monument.category]}</span>
              </div>
              <h2 className="card-title">{monument.name}</h2>
              <p className="card-description">{monument.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredMonuments.length === 0 && (
        <div className="no-results">
          <p>Пам'яток у цій категорії не знайдено</p>
        </div>
      )}
    </div>
  )
}

