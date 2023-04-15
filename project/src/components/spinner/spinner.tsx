import { memo } from 'react';

function Spinner(): JSX.Element {
  return (
    <div className="loader" style = {{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}></div>
  );
}

export default memo(Spinner);
