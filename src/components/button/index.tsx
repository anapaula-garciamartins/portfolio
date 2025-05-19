type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className='flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-medium rounded-full cursor-pointer hover:bg-pink transition-colors'>
      {children}
    </button>
  );
}
