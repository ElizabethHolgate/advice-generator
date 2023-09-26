'use client'

import Image from "next/image";
import dividerDesktop from '../public/images/pattern-divider-desktop.svg';
import dividerMobile from '../public/images/pattern-divider-desktop.svg';
import dice from '../public/images/icon-dice.svg';
import { useState, useEffect } from "react";

export function Advice() {
    
    const [id, setId] = useState([]);
    const [advice, setAdvice] = useState([]);

    function getAdvice() {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                setId(`${data.slip.id}`);
                setAdvice(`${data.slip.advice}`);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getAdvice();
    })
  
    return (
    <section className="bg-gray-blue-900 rounded-[13px] max-w-[340px] sm:max-w-[540px] font-manrope font-extrabold px-12 pb-16 pt-12 mx-4 grid  justify-items-center gap-6 relative max-sm:px-8">
        <h1 className="text-neon-green-300 text-[11px] tracking-[4px]" >ADVICE #{id}</h1>
  
        <p className="text-2xl text-cyan-100 text-extrabold text-center" >“{advice}”</p>

        <Image src={dividerDesktop} alt="divider" className="max-[640px]:hidden block" />
        <Image src={dividerMobile} alt="divider" className="sm:hidden" />
        
        <button onClick={getAdvice} className="bg-neon-green-300 p-5 rounded-full grid place-content-center hover:cursor-pointer hover:shadow-custom-shadow absolute -bottom-8 transition-shadow duration-500">
            <Image src={dice} alt="dice" />
        </button>
    </section>
    )
  }