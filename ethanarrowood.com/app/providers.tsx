'use client';

import { PropsWithChildren } from 'react';
import { Provider as ReactWrapBalancerProvider } from 'react-wrap-balancer';

export default function Providers({ children }: PropsWithChildren): JSX.Element {
    return (
        <ReactWrapBalancerProvider>
            {children}
        </ReactWrapBalancerProvider>
    )
}