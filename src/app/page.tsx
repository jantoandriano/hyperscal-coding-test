import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";

export default function Page() {
    const cookie = cookies().get('auth');
    if (!cookie) {
        redirect('auth/login');
    }
    return (
        <>
            <Navbar />
            <Hero />
        </>
    );

}