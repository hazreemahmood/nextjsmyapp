"use client";

import Image from "next/image";
import { useState } from "react";

const mask = (text: string) => {
  
  let maskedid = "";
  let myemailId = text;
  let index = myemailId.lastIndexOf("@");
  let prefix = myemailId.substring(0, index);
  let postfix = myemailId.substring(index);
  let mask = prefix.split('').map(function (o: any, i: any) {
    if (i == 0 || i == (index - 1)) {
      return o;
    } else {
      return '*';
    }
  }).join('');

  maskedid = mask + postfix;
  // setShow(maskedid);
  return maskedid;
};

export default function DataMasking(props: any) {
  const [show, setShow] = useState(false);

  return (
    <tr key={props.data_key}>
      <td>{props.data_key + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-circle h-12 w-12">
              <Image
                src={props.avatar}
                alt="Avatar Tailwind CSS Component"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="font-bold text-white pl-4">
            {props.first_name} {props.last_name}
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-row items-center gap-3">
          <div className="text-sm">
            {show ? props.email : mask(props.email)}
          </div>
          <button
            className="opacity-50"
            onClick={() => setShow(() => !show)}
          >
            {show ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>}
          </button>
        </div>
      </td>
    </tr>
  );
}
