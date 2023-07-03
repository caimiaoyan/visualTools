import { ReactElement } from 'react';

interface Props {
  children: ReactElement
}

export default function Header({ children }: Props): ReactElement {
  return (
    <header className="h-12 px-6 shadow sticky flex-shrink-0 flex justify-between items-center">
      <div className='logo'>世强web页面制作系统</div>
      <div className="inline-flex justify-center items-center">
        {children}
      </div>
    </header>
  );
}
