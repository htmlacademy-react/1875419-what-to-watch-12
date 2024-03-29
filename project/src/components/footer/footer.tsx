import { memo } from 'react';
import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer" data-testid="footer">
      <Logo/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default memo(Footer);
