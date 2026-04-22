export function TrustBar() {
  const items = [
    { icon: "★★★★", text: "9.7/10 on Checkatrade (29 reviews)" },
    { icon: null, text: "Ltd Company" },
    { icon: null, text: "£10M Insured" },
    { icon: null, text: "2-Year Guarantee" },
    { icon: null, text: "20+ Years Experience" },
    { icon: null, text: "VAT Reg. 268304985" },
  ];

  return (
    <div className="bg-surface-container-low py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-label font-bold text-primary/70">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 whitespace-nowrap">
              {i > 0 && <span className="hidden sm:inline text-secondary">|</span>}
              {item.icon && <span className="text-secondary">{item.icon}</span>}
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
