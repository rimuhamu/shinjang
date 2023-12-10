export default function OrdersPage() {
  return (
    <div>
      <div className='flex flex-col items-start gap-5 self-stretch py-4 px-2'>
        <div className=' text-rose-700 text-3xl font-extrabold '>Orders</div>
        <div className=' text-gray-500 text-xl font-semibold '>
          +62 857 1994 2090
        </div>
      </div>

      <div className="order_list flex flex-col justify-center items-center gap-2.5 self-stretch p-2 rounded-md border border-gray-200 bg-neutral-50 text-gray-500 font-['Inter'] font-medium leading-6">
        Empty
      </div>
    </div>
  );
}
