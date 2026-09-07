import AccountEntry from '@/components/account-entry';
import {Suspense} from 'react';
export const metadata={title:'Log in — DevShelf'};
export default function Login(){return <Suspense><AccountEntry mode="login"/></Suspense>;}
