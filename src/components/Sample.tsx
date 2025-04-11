import { PropsWithChildren } from 'react';

export default function Sample(props: PropsWithChildren): React.JSX.Element {
  return <div>{props.children}</div>;
}
