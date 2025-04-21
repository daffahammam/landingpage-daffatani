export function Button({ children, className, onClick }) {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-2 rounded-full font-semibold ${className}`}
      >
        {children}
      </button>
    );
  }
  