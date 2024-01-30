export default function TncPage() {
  return (
    <div className='mt-10 mx-auto flex flex-col items-center justify-center w-1/2 gap-5 '>
      <h4 className='text-2xl text-black font-extrabold tracking-normal text-'>
        Terms and Conditions Shinjang
      </h4>
      <ol className='list-decimal'>
        <li>Coret = membeli.</li>
        <li>Dilarang CANCEL setelah setor ke seller.</li>
        <li>CANCEL harus cari opslot atau pengganti.</li>
        <li>
          Batas payment 1x6 jam setelah up notes, jika ada kendala pembayaran
          bisa menghubungi admin (Vi).
        </li>
        <li>Telat payment denda 2,000/hari.</li>
        <li>Menimbun barang max 2 bulan (4x event).</li>
        <li>
          Admin tidak bertanggung jawab atas kondisi atas kerusakan apapun saat
          pengiriman, terutama jajanan dari luar.
        </li>
        <li>
          Mohon diperhatikan dengan teliti video condi yang diberikan seller,
          keterangan deskripsi, terutama seller yang tidak memberikan video
          condi. Hal ini bukan menjadi tanggung jawab admin jika kalian sudah
          coret, up notes, dan transfer.
        </li>
        <li>
          Admin tekankan kembali, jika kalian sudah coret jajanan yang didrop
          oleh admin, artinya sudah fix membeli kecuali kalian req untuk setor
          berdua atau lebih (tentunya hal ini akan admin tanyakan terlebih
          dahulu).{' '}
          <span className='font-bold'>
            Tidak boleh cancel saat sudah direspon oleh admin (by react emoji
            atau chat). Cancel = cari opslot sendiri.
          </span>
        </li>
        <li>
          <span className='font-bold'>TIDAK ADA SISTEM CICIL atau KEEP.</span>{' '}
          Admin juga butuh uang full untuk transfer ke seller dan transfer ke
          sellernya pun tidak bisa dicicil.{' '}
        </li>
        <li>
          Barang jajanan yang di drop admin belum termasuk EMS/CARGO, TAX &
          Packing.
        </li>
        <li>Paket hilang karena ekspedisi bukan tanggung jawab admin.</li>
        <li>Jika terdapat scammer akan di refund sebanyak 50%.</li>
        <li>Dilarang opslot (oper slot) dari GO lain.</li>
        <li>
          Untuk personal order, admin tidak tanggung jawab jika terjadi scam.
        </li>
      </ol>
    </div>
  );
}
