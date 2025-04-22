let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(arr) {
  arr[1] = 'Roman Alamsyah Elsharawy'
  console.log(arr);
  let tgl = arr[3].split('/');
  let day = tgl[0];
  let month = tgl[1];
  let year = tgl[2];
  
  switch (month) {
    case '01':
      console.log('Januari');
      break;
    case '02':
      console.log('Februari');
      break;
    case '03':
      console.log('Maret');
      break;
    case '04':
      console.log('April');
      break;
    case '05':
      console.log('Mei');
      break;
    case '06':
      console.log('Juni');
      break;
    case '07':
      console.log('Juli');
      break;
    case '08':
      console.log('Agustus');
      break;
    case '09':
      console.log('September');
      break;
    case '10':
      console.log('Oktober');
      break;
    case '11':
      console.log('November');
      break;
    default:
      console.log('Desember');
  }
  
  console.log(tgl);
  console.log(day + '-' + month + '-' + year);
  let limArr = arr[1].slice(0, 15);
  console.log(limArr)

}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
