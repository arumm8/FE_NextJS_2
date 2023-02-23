import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000);
    },[]);
    return (
      <div>
        <h1 className="title-not-found">Halaman tidak ditemukan</h1>
      </div>
    );
  }