<!DOCTYPE html>
<html>

<head>
    <title>javascript | Jeremy Diaz Prasetyo </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300&display=swap"
        rel="stylesheet">

    <style>
        #result {
            color: #22a6b3;
            padding-top: 20px;
        }
    </style>

</head>

<body>
    <section class="section-1">
        <div class="container">
            <p class="form-text">Masukkan nilai Anda : </p>
            <input type="let" id="nilai">
            <p class="form-text">Masukkan kkm : </p>
            <input type="let" id="kkm">
            <p id="result"></p>
            <h3 id="deskripsi"></h3>
            <button id="" onclick="hitung()">Calculate</button>
            <br>
            <button id="Reset" type="button" onclick="reload()"><i>reload</button>
            <p id="info">Silahkan klik reload untuk mengulang.</p>
        </div>

    </section>


    <!-- java convert to js -->
    <script type="text/javascript">
        function hitung() {
            var n = document.getElementById('nilai').value;
            var k = document.getElementById('kkm').value;

            document.getElementById('result').innerHTML = "Nilai anda " + n + ", KKM anda " + k;

            if (n > k) {
                description = "Selamat Anda lulus !";
            } else if (n == k) {
                description = "Selamat Anda lulus ! tapi nilainya pas-pasan";
            } else {
                description = "Mohon Maaf Anda Tidak lulus ! coba lagi jangan menyerah";
            }

            document.getElementById('deskripsi').innerHTML = description;
        }
    </script>
    <!-- reload -->
    <script>
        function reload() {
            reload = location.reload();
        }
    </script>
</body>

</html>
