import { useEffect, useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Input,
  TableContainer,
  Button,
} from '@chakra-ui/react'

function LogPage() {
  useEffect(() => {
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex flex-row px-24 py-4 border-b-[2px] border-b-gray-100 w-full items-center">
        <div className="rounded-full p-2 bg-gray-100 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
          </svg>
        </div>

        <h2 className="font-roboto-flex text-3xl text-gray-800 mr-24">Absento</h2>

        <button className="mr-6"><p className="font-roboto-flex">User</p></button>
        <button><p className="font-roboto-flex">Log Absensi</p></button>
      </div>

      <div className="flex flex-col w-full px-24 pt-12">
        <h2 className="font-roboto-flex text-6xl font-medium mb-12">Log Absensi</h2>

        <div className="flex flex-row items-center justify-between mb-2">
        <div></div>
          <div className="flex flex-row">
            <Input placeholder='Pencarian' className="mr-1" />
            <Button colorScheme='messenger' variant="outline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="border-[1px] border-gray-300 rounded-lg p-2">
          <TableContainer>
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th width="3%">No</Th>
                  <Th>Nama User</Th>
                  <Th>Tanggal Absen</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Kaka</Td>
                  <Td>26 Desember 2023 21:58</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default LogPage;