import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  alt: string;
};

export default function TechToolsCard({ title, alt, src }: Props) {
  return (
    <div className='flex flex-col items-center text-sm'>
      <span>{title}</span>
      <Image width={100} height={100} src={src} alt={alt} />
    </div>
  );
}
