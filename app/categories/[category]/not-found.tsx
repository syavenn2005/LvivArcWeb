import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Категорію не знайдено</h2>
        <p>Вибачте, але категорію, яку ви шукаєте, не існує.</p>
        <Link href="/categories" className="back-to-home">
          Повернутися до категорій
        </Link>
      </div>
    </div>
  )
}

