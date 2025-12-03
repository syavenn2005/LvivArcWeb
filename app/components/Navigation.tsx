import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          🏛️ Архітектура Львова
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">
            Головна
          </Link>
          <Link href="/categories" className="nav-link">
            Категорії
          </Link>
        </div>
      </div>
    </nav>
  )
}

