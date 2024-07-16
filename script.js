// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA71CFaeejghGJuSCHdd01PzMRUQIHqdQc",
  authDomain: "sistem-antrian-af26c.firebaseapp.com",
  databaseURL: "https://sistem-antrian-af26c-default-rtdb.firebaseio.com",
  projectId: "sistem-antrian-af26c",
  storageBucket: "sistem-antrian-af26c.appspot.com",
  messagingSenderId: "824768288823",
  appId: "1:824768288823:web:cc8cd515c3a5848f8387b2",
  measurementId: "G-WCMRE7H9YF"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var dataRef1 = database.ref('nomor_antrian1');
var dataRef2 = database.ref('nomor_antrian2');
var dataRef3 = database.ref('nomor_antrian3');

dataRef1.on('value', function(snapshot) {
  var data1 = snapshot.val();
  document.getElementById('antrian1').innerHTML = data1;
  checkAndSetAntrianDatang();
});

dataRef2.on('value', function(snapshot) {
  var data2 = snapshot.val();
  document.getElementById('antrian2').innerHTML = data2;
  checkAndSetAntrianDatang2();
});

dataRef3.on('value', function(snapshot) {
  var data3 = snapshot.val();
  document.getElementById('antrian3').innerHTML = data3;
  checkAndSetAntrianDatang3();
});

function checkAndSetAntrianDatang() {
  var data1 = parseFloat(document.getElementById('antrian1').innerHTML);
  antrianDatangRef.set(data1 + 5);
}

function checkAndSetAntrianDatang2() {
  var data2 = parseFloat(document.getElementById('antrian2').innerHTML);
  antrianDatang2Ref.set(data2 + 5);
}

function checkAndSetAntrianDatang3() {
  var data3 = parseFloat(document.getElementById('antrian3').innerHTML);
  antrianDatang3Ref.set(data3 + 5);
}

var antrianDatangRef = database.ref('antrian-datang1');
var antrianDatang2Ref = database.ref('antrian-datang2');
var antrianDatang3Ref = database.ref('antrian-datang3');

antrianDatangRef.on('value', function(snapshot) {
  var antrianDatangData = snapshot.val();
  var divElement = document.getElementById('antrian-datang1');
  var antrianDatang = antrianDatangData; 
  var newContent = "Nomor Antrian " + '"' + antrianDatang + '"' + " Dimohon Untuk Menuju ke Kursi Antrian";
  divElement.innerHTML = newContent;
});

antrianDatang2Ref.on('value', function(snapshot) {
  var antrianDatang2Data = snapshot.val();
  var divElement = document.getElementById('antrian-datang2');
  var antrianDatang2 = antrianDatang2Data; 
  var newContent = "Nomor Antrian " + '"' + antrianDatang2 + '"' + " Dimohon Untuk Menuju ke Kursi Antrian";
  divElement.innerHTML = newContent;
});

antrianDatang3Ref.on('value', function(snapshot) {
  var antrianDatang3Data = snapshot.val();
  var divElement = document.getElementById('antrian-datang3');
  var antrianDatang3 = antrianDatang3Data; 
  var newContent = "Nomor Antrian " + '"' + antrianDatang3 + '"' + " Dimohon Untuk Menuju ke Kursi Antrian";
  divElement.innerHTML = newContent;
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('panggil1').addEventListener('click', function() {
      dataRef1.once('value', function(snapshot) {
          var currentValue = snapshot.val();
          dataRef1.set(currentValue + 1);
      });
  });
  document.getElementById('reset1').addEventListener('click', function() {
    dataRef1.set(0);
  });
  document.getElementById('btn-atur1').addEventListener('click', function() {
    var inputValue = parseInt(document.getElementById('atur-input1').value);
    if (!isNaN(inputValue)) {
      dataRef1.set(inputValue);
      document.getElementById('atur-input1').value='';
    } else {
      alert("Please enter a valid number.");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('panggil2').addEventListener('click', function() {
      dataRef2.once('value', function(snapshot) {
          var currentValue = snapshot.val();
          dataRef2.set(currentValue + 1);
      });
  });
  document.getElementById('reset2').addEventListener('click', function() {
    dataRef2.set(0);
  });
  document.getElementById('btn-atur2').addEventListener('click', function() {
    var inputValue = parseInt(document.getElementById('atur-input2').value);
    if (!isNaN(inputValue)) {
      dataRef2.set(inputValue);
      document.getElementById('atur-input2').value='';
    } else {
      alert("Please enter a valid number.");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('panggil3').addEventListener('click', function() {
      dataRef3.once('value', function(snapshot) {
          var currentValue = snapshot.val();
          dataRef3.set(currentValue + 1);
      });
  });
  document.getElementById('reset3').addEventListener('click', function() {
    dataRef3.set(0);
  });
  document.getElementById('btn-atur3').addEventListener('click', function() {
    var inputValue = parseInt(document.getElementById('atur-input3').value);
    if (!isNaN(inputValue)) {
      dataRef3.set(inputValue);
      document.getElementById('atur-input3').value='';
    } else {
      alert("Please enter a valid number.");
    }
  });
});
