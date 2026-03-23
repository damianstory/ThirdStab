import Image from 'next/image';

interface FundingAttributionProps {
  attribution: {
    imageSrc: string;
    altText: string;
  };
}

export default function FundingAttribution({ attribution }: FundingAttributionProps) {
  return (
    <section className="py-8 md:py-10 px-4 md:px-12 bg-white border-t border-gray-100">
      <div className="container mx-auto max-w-6xl flex justify-center">
        <Image
          src={attribution.imageSrc}
          alt={attribution.altText}
          width={400}
          height={80}
          className="max-w-[280px] md:max-w-[400px] h-auto"
        />
      </div>
    </section>
  );
}
