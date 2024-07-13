"use client";

import DataMasking from "@/components/others/DataMasking";
import Pagination from "@/components/others/Pagination";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default function List() {
  const [pages, setPage] = useState<number>(1);
  const [resource, setResource] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);
  const [backup, setBackup] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${pages}`)
      .then((res) => res.json())
      .then((res) => {
        setResource(res);
        setBackup(res);
        setLoading(false);
      });
  }, [pages]);

  const handleFilter = (e: any) => {
    e.preventDefault();

    const { data } = resource as any;

    const filtered = data.filter((user: User) => {
      const firstChar = user.first_name.charAt(0).toLowerCase();
      const lastChar = user.last_name.charAt(0).toLowerCase();
      const filter = e.target.value.toLowerCase();

      return [firstChar, lastChar].includes(filter);
    });

    if (!filtered.length) {
      setResource(backup);
    } else {
      setResource({ ...data, data: filtered });
    }
  };

  return (
    <div className="mx-auto min-w-[76rem]  max-w-[76rem] mt-10 bg-gray-800 p-10 rounded-lg">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
            User List
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <input
          type="text"
          placeholder="First Letter of First Name or Last Name"
          className="input input-bordered w-full max-w-md"
          onChange={handleFilter}
        />
        <table className="table">
          <thead className="text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {isLoading ? (
              <></>
            ) : (
              resource.data.map((person: any, key: any) => (
                <DataMasking key={key} data_key={key} {...person} />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && <Pagination setPaginate={setPage} resource={resource} />}
    </div>
  );
}
