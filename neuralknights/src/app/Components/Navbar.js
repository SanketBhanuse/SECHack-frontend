// "use client";
// import React, { useState } from "react";
// import icon from "../Assets/logo.svg";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// const Navbar = () => {
//     const [isClick, setIsClick] = useState(false);
//     const router = useRouter();
//     const pathname = usePathname(); // Get current route

//     const toggleNavbar = () => {
//         setIsClick(!isClick);
//     };

//     const navLinks = [
//         { name: "Home", href: "/" },
//         { name: "Surveillance", href: "/survellance" },
//         { name: "About", href: "/about" }
//     ];

//     return (
//         <>
//             <div className="bg-[#1e3d58] px-2 py-1 flex justify-between items-center sticky top-0 z-50">
//                 <div className="Logo flex items-center cursor-pointer" onClick={() => router.push("/")}>
//                     <Image src={icon} alt="Logo" className="w-[50px] h-[50px]" />
//                     <div className="text-[#E8EEF1] text-[28px]">Neuralknights</div>
//                 </div>
//                 <div className="hidden md:flex text-[18px] gap-2 text-[#E8EEF1]">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.href}
//                             href={link.href}
//                             className={`inline-block py-1 px-3 rounded-sm hover:bg-[#E8EEF1] hover:text-[#1e3d58] ${pathname === link.href ? "bg-[#E8EEF1] text-[#1e3d58]" : ""
//                                 }`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </div>
//                 <div className="md:hidden block">
//                     <button onClick={toggleNavbar}>{isClick ? "Close" : "Open"}</button>
//                 </div>
//             </div>

//             {isClick && (
//                 <div className="block bg-[#1e3d58] px-2">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.href}
//                             href={link.href}
//                             className={`block p-2 hover:text-[#43B0F1] hover:bg-[#E8EEF1] ${pathname === link.href ? "bg-[#E8EEF1] text-[#1e3d58]" : ""
//                                 }`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;

"use client";
import React, { useState } from "react";
import icon from "../Assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const router = useRouter();
    const pathname = usePathname(); // Get current route

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Surveillance", href: "/survellance" },
        { name: "About", href: "/about" }
    ];

    return (
        <>
            <div className="bg-[#1e3d58] px-2 py-1 flex justify-between items-center sticky top-0 z-50">
                <div className="Logo flex items-center cursor-pointer" onClick={() => router.push("/")}>
                    <Image src={icon} alt="Logo" className="w-[50px] h-[50px]" />
                    <div className="text-[#E8EEF1] text-[28px]">Neuralknights</div>
                </div>
                <div className="hidden md:flex text-[18px] gap-2 text-[#E8EEF1]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`inline-block py-1 px-3 rounded-sm hover:text-[#43B0F1] relative ${pathname === link.href ? "text-[#43B0F1] after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[2px] after:bg-[#43B0F1]" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden block text-[#E8EEF1]">
                    <button onClick={toggleNavbar}>{isClick ? "Close" : "Open"}</button>
                </div>
            </div>

            {isClick && (
                <div className="block bg-[#1e3d58] p-2 text-[#E8EEF1]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block p-2 hover:text-[#43B0F1] relative ${pathname === link.href ? "text-[#43B0F1] after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[2px] after:bg-[#43B0F1]" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default Navbar;
