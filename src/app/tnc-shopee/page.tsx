import Link from 'next/link';

export default function TncShopeePage() {
  return (
    <div className='mt-10 mx-auto flex flex-col items-center justify-center w-1/2 gap-10 leading-relaxed'>
      <h4 className='text-2xl text-black font-extrabold tracking-normal text-'>
        Terms and Conditions Shopee Checkout
      </h4>
      <ol className='list-decimal'>
        <li>
          Shopee shinjang di set pre-order selama 30 hari, dikarenakan takut
          adanya pembatalan otomatis yang dapat menurunkan performa toko.
        </li>
        <li>
          Fee packing untuk photocard adalah 5k untuk 1-3 pc, lebih dari itu,
          akan dikenakan biaya berbeda. Toploader yang digunakan merupakan
          toploader basic, jika ingin mengganti ke toploader tebal, boleh chat
          ke shopee shinjang ya untuk detailnya.
        </li>
        <li>
          CHECK OUT hanya dibuka setiap{' '}
          <span className='font-bold'>TANGGAL KEMBAR dan tanggal 25</span>.
          Selebihnya, jika ada yang mau check out duluan, boleh diskusi dulu
          dengan admin (Vi).
        </li>
        <li>
          <span className='font-bold'>MOHON GANTI PENGIRIMAN KE J&T.</span> Jika
          tidak diganti, maka harus checkout ulang.{' '}
          <span className='font-bold text-red-600'>
            SPX TIDAK AKAN DIPROSES.
          </span>
        </li>
        <li>
          <span className='font-bold text-red-600'>PASTIKAN</span> untuk
          mencantumkan{' '}
          <span className='font-bold text-red-600'>
            display name line + batch PO + Jumlah total seluruh barang pada
            NOTES
          </span>
          . Jika tidak mencantumkan notes, maka pengiriman paketmu akan diproses
          belakangan.
        </li>
        <li>
          Shinjang hanya menerima kendala atau keluhan paket yang disertai
          dengan <span className='font-bold text-red-600'>VIDEO UNBOXING</span>.
          Jika tidak ada, maka kami tidak akan menerima keluhan apapun
        </li>
        <li>
          Untuk batch mana saja yang bisa di check out pada event, dimohon untuk
          sering check jajanannya ya. Jika paketmu belum ada pada batch yang
          sedang <span className='font-bold'>OTW INA</span>,{' '}
          <span className='font-bold text-red-600'>
            kami sangat tidak menyarankan untuk Check Out duluan
          </span>
          , dikarenakan pengiriman dari CH maupun JP bisa memakan waktu satu
          bulan hingga lebih.
        </li>
        <li>
          Berikut adalah Link untuk CHECK OUT SHOPEE →{' '}
          <Link
            href='https://shope.ee/4AZfcghrGA'
            className='font-bold text-red-600 hover:text-red-400 transition'
            rel='noopener noreferrer'
            target='_blank'>
            CO SHOPEE
          </Link>
          . Untuk nominal tambahan gratis ongkir, klik disini →{' '}
          <Link
            href='https://shope.ee/7Uq7b8j1Fg'
            className='font-bold text-red-600 hover:text-red-400 transition'
            rel='noopener noreferrer'
            target='_blank'>
            Nominal Tambahan
          </Link>
          .
        </li>
        <li>
          Untuk REFUND, mohon untuk isi form ini 📎
          <Link
            href='https://bit.ly/formrefundshinjang'
            className='font-bold text-red-600 hover:text-red-400 transition'
            rel='noopener noreferrer'
            target='_blank'>
            FORM REFUND
          </Link>
          . Refund akan dilakukan secara berkala.
        </li>
      </ol>
      <p className='font-bold'> Thank you udah jajan di Shinjang!</p>
    </div>
  );
}
