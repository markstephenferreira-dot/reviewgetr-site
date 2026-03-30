interface StarsProps {
  count?: number;
  size?: string;
}

export default function Stars({ count = 5, size = "text-2xl" }: StarsProps) {
  return (
    <div className={`flex justify-center gap-1 ${size}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold-light">&#9733;</span>
      ))}
    </div>
  );
}
