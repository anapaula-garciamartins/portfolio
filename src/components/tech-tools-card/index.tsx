import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  alt: string;
};

export default function TechToolsCard({ title, alt, src }: Props) {
  return (
    <div className='flex flex-col items-center'>
      <span className='text-sm md:text-base'>{title}</span>
      <Image width={125} height={125} src={src} alt={alt} />
    </div>
  );
}
