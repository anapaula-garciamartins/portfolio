import {
  GithubLogo,
  LinkedinLogo,
  MicrosoftOutlookLogo,
} from '@phosphor-icons/react/dist/ssr';

export default function FloatingMenu() {
  return (
    <div className='w-fit flex flex-col items-center justify-center gap-6 px-2 py-4 rounded-full border border-pink text-pink fixed right-4 bottom-4 bg-black'>
      <a
        target='_blank'
        rel='noopener'
        href='https://www.linkedin.com/in/ana-paulamartins'
      >
        <LinkedinLogo size={32}></LinkedinLogo>
      </a>
      <a target='_blank' rel='noopener' href='https://github.com/martins-ana'>
        <GithubLogo size={32}></GithubLogo>
      </a>
      <a target='_blank' rel='noopener' href='mailto:martinsgarciaana@outlook.com'>
        <MicrosoftOutlookLogo size={32}></MicrosoftOutlookLogo>
      </a>
    </div>
  );
}
