import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Пам&apos;ятку не знайдено</h2>
        <p>Вибачте, але пам&apos;ятка, яку ви шукаєте, не існує.</p>
        <Link href="/" className="back-to-home">
          Повернутися на головну
        </Link>
      </div>
    </div>
  )
}

