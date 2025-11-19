export default function Logo() {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="w-50 h-50 mb-4"
    >
      <defs>
        <linearGradient id="mGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d="M64 384V128H160L256 256L352 128H448V384H352V256L256 384L160 256V384H64Z"
        fill="url(#mGradient)"
      />
    </svg>
  );
}
