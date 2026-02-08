interface CalloutProps {
  type?: "info" | "warning" | "error" | "success";
  children: React.ReactNode;
}

export default function Callout({ type = "info", children }: CalloutProps) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200",
    error:
      "bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200",
    success:
      "bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200",
  };

  return (
    <div
      className={`my-4 rounded-lg border p-4 ${styles[type]}`}
      role="alert"
    >
      {children}
    </div>
  );
}
