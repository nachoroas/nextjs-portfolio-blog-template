export const metadata = {
  title: "Contacto",
  description: "Ponte en contacto conmigo.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Contacto</h1>
      <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="mx-auto max-w-2xl">
        <div className="mb-8 space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <h2 className="mb-2 text-xl font-semibold">Email</h2>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              your.email@example.com
            </a>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <h2 className="mb-2 text-xl font-semibold">LinkedIn</h2>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <h2 className="mb-2 text-xl font-semibold">GitHub</h2>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              github.com/yourusername
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Formulario de Contacto</h2>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Opcional: Integra un servicio como{" "}
            <a
              href="https://formspree.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 underline dark:text-gray-100"
            >
              Formspree
            </a>{" "}
            o{" "}
            <a
              href="https://getform.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 underline dark:text-gray-100"
            >
              Getform
            </a>{" "}
            para habilitar un formulario de contacto.
          </p>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-gray-900 px-6 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
