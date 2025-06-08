import Image from 'next/image';

type Props = {
  tech: {
    title: string;
    src: string;
    alt: string;
  };
};

export default function TechToolsCard({ tech }: Props) {
  return (
    <div className='flex flex-col items-center'>
      <span className='text-sm md:text-base'>{tech.title}</span>
      <Image width={125} height={125} src={tech.src} alt={tech.alt} />
    </div>
  );
}
