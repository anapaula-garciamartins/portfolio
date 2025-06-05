import {
  GithubLogo,
  LinkedinLogo,
  MicrosoftOutlookLogo,
} from '@phosphor-icons/react/dist/ssr';
import { twMerge } from 'tailwind-merge';

export default function FloatingMenu({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        'w-fit flex flex-col items-center justify-center gap-6 px-2 py-4 rounded-full border border-pink text-pink fixed right-4 bottom-4 bg-black',
        className
      )}
    >
      <a
        target='_blank'
        rel='noopener'
        href='https://www.linkedin.com/in/anapaula-garciamartins'
      >
        <LinkedinLogo size={32}></LinkedinLogo>
      </a>
      <a target='_blank' rel='noopener' href='https://github.com/anapaula-garciamartins'>
        <GithubLogo size={32}></GithubLogo>
      </a>
      <a target='_blank' rel='noopener' href='mailto:martinsgarciaana@outlook.com'>
        <MicrosoftOutlookLogo size={32}></MicrosoftOutlookLogo>
      </a>
    </div>
  );
}
