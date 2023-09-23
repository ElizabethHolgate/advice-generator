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
    <section className="bg-gray-blue-900 rounded-[13px] p-5 relative flex flex-col gap-5 items-center max-w-[540px] font-manrope">
        <h1 className="text-neon-green-300 tracking-widest text-xs" >ADVICE #{id}</h1>
  
        <p className="text-2xl text-cyan-100 text-extrabold text-center" >“{advice}”</p>

        <Image src={dividerDesktop} alt="divider" />
        
        <button onClick={getAdvice} className="transition-all ease-in-out flex justify-center mx-auto translate-y-10 bg-neon-green-300 p-4 rounded-full hover:shadow-custom-shadow ">
            <Image src={dice} alt="dice" />
        </button>
    </section>
    )
  }