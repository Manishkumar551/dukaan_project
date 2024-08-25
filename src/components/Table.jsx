import React from "react";
import TableTop from "./TableTop";
import { orderData } from "./data";

const Table = () => {
  return (
    <div>
      <TableTop />

      <div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-sm  font-medium rounded uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                ORDER ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                {" "}
                TRANSACTION ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                REFUND DATE
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                ORDER AMOUNT
              </th>
            </tr>
          </thead>

          {orderData.map((order) => {
            return (
              <tbody>
                <tr className="bg-white border-b">
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-700 whitespace-nowrap"
                  >
                    #{order.id}
                  </td>


                  <td class="px-6 py-4 flex items-center gap-2 ">
                    {order.status === "Successful" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    )}
                    {order.status === "Processing" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-500" />
                    )}
                    {order.status === "Failed" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    )}

                    {order.status}
                  </td>


                  <td class="px-6 py-4">{order.transactionID}</td>
                  <td class="px-6 py-4 ">{order.refundDate}</td>

                  <td class="px-6 py-4 text-left ">{order.amount}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
