'use client';
import {useLayoutEffect,useRef} from 'react';
import type {TextareaHTMLAttributes} from 'react';
export default function GrowingTextarea(props:TextareaHTMLAttributes<HTMLTextAreaElement>){const ref=useRef<HTMLTextAreaElement>(null);useLayoutEffect(()=>{const el=ref.current;if(!el)return;const resize=()=>{el.style.height='auto';el.style.height=Math.max(160,el.scrollHeight)+2+'px'};resize();const observer=new ResizeObserver(entries=>{const width=entries[0]?.contentRect.width;if(width!==lastWidth){lastWidth=width;resize()}});let lastWidth=el.clientWidth;observer.observe(el);return()=>observer.disconnect()},[props.value]);return <textarea {...props} ref={ref} className="growing-textarea"/>}
