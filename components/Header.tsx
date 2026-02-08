import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Portfolio
          </Link>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/proyectos"
                className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/docencia"
                className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Docencia
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
