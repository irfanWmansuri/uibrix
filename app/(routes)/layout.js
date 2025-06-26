import { MainHeader } from '@/_components/molecules/header/MainHeader';
import { MainFooter } from '@/_components/molecules/footer/MainFooter';

export default function MainLayout ({ children }) {
  return (
    <>
        <MainHeader />
        {children}
        <MainFooter />
    </>
  )
}
