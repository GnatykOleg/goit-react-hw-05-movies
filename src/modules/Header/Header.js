import HeaderMenu from 'modules/Header/HeaderMenu/HeaderMenu';
import s from './Header.module.css';
import Container from '../Container/Container';

export default function Header() {
  return (
    <header className={s.header}>
      <nav>
        <Container>
          <HeaderMenu />
        </Container>
      </nav>
    </header>
  );
}
