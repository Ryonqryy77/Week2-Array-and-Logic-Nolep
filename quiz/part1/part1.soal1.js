/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

function dataHandling(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('Nomor ID: ' + arr[i][0]);
    console.log('Nama Lengkap: ' + arr[i][1]);
    console.log('TTL : ' + arr[i][2] + ' ' + arr[i][3]);
    console.log('Hobi: ' + arr[i][3]);
    console.log(" ")
  }
  
}

dataHandling(input);
