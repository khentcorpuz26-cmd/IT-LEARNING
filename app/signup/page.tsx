import AccountEntry from '@/components/account-entry';
import {Suspense} from 'react';
export const metadata={title:'Sign up — DevShelf'};
export default function Signup(){return <Suspense><AccountEntry mode="signup"/></Suspense>;}
