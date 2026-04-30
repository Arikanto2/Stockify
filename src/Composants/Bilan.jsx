import React, { useMemo } from "react";

const sampleProducts = [
  { id: "P001", name: "Stylo Bleu", price: 1.5, qty: 120 },
  { id: "P002", name: "Cahier 96p", price: 2.3, qty: 75 },
  { id: "P003", name: "Gomme", price: 0.5, qty: 250 },
];

const formatCurrency = (v) =>
  v.toLocaleString(undefined, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  });

const Donut = ({
  values = [],
  strokeClasses = [],
  size = 120,
  stroke = 18,
}) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = values.reduce((a, b) => a + b, 0) || 1;

  // Compute segments without mutating variables
  const segments = values.map((v, i) => {
    const prevSum = values.slice(0, i).reduce((a, b) => a + b, 0);
    const portion = v / total;
    const dash = portion * circumference;
    const dashArray = `${dash} ${circumference}`;
    const dashOffset = -(prevSum / total) * circumference;
    return {
      dashArray,
      dashOffset,
      strokeClass: strokeClasses[i] || "",
    };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="block"
    >
      <g transform={`translate(${size / 2}, ${size / 2}) rotate(-90)`}>
        {segments.map((seg, i) => (
          <circle
            key={i}
            r={radius}
            cx="0"
            cy="0"
            fill="transparent"
            stroke="currentColor"
            className={seg.strokeClass}
            strokeWidth={stroke}
            strokeDasharray={seg.dashArray}
            strokeDashoffset={seg.dashOffset}
            style={{
              transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms",
            }}
          />
        ))}
        {/* inner circle to create donut hole */}
        <circle r={radius - stroke - 4} fill="white" />
      </g>
    </svg>
  );
};

const Bilan = () => {
  const stats = useMemo(() => {
    const perProductAmounts = sampleProducts.map((p) => p.price * p.qty);
    const minAmount = Math.min(...perProductAmounts);
    const maxAmount = Math.max(...perProductAmounts);
    const totalAmount = perProductAmounts.reduce((a, b) => a + b, 0);
    return { minAmount, maxAmount, totalAmount };
  }, []);

  const values = [stats.minAmount, stats.maxAmount, stats.totalAmount];
  // use daisyUI/Tailwind semantic classes so colors follow the current theme
  const strokeClasses = ["text-primary", "text-success", "text-warning"];
  const legendBg = ["bg-primary", "bg-success", "bg-warning"];

  return (
    <div className="my-20">
      <p className="text-4xl font-serif mb-8 text-center mx-auto">
        Bilan des produits
      </p>

      <div className=" p-6   max-w-4xl mx-auto flex items-center justify-center gap-10">
        <div className="flex items-center gap-6">
          <div className="relative">
            <Donut
              values={values}
              strokeClasses={strokeClasses}
              size={250}
              stroke={28}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-sm text-gray-500">Total</span>
              <span className="text-lg md:text-xl font-bold">
                {formatCurrency(stats.totalAmount)}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className={`w-4 h-4 rounded-sm ${legendBg[0]}`} />
              <div>
                <div className="text-sm text-gray-500">Montant minimal</div>
                <div className="text-sm font-semibold">
                  {formatCurrency(stats.minAmount)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className={`w-4 h-4 rounded-sm ${legendBg[1]}`} />
              <div>
                <div className="text-sm text-gray-500">Montant maximal</div>
                <div className="text-sm font-semibold">
                  {formatCurrency(stats.maxAmount)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className={`w-4 h-4 rounded-sm ${legendBg[2]}`} />
              <div>
                <div className="text-sm text-gray-500">Montant total</div>
                <div className="text-sm font-semibold">
                  {formatCurrency(stats.totalAmount)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* removed duplicate legend on the far right - legends are shown next to the donut */}
      </div>
    </div>
  );
};

export default Bilan;
