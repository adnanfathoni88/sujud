<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sujud Company</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
    <!-- css -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" />

    <!-- data table -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css">

    <!-- jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- ckeditor -->
    <script src="https://cdn.ckeditor.com/ckeditor5/40.0.0/classic/ckeditor.js"></script>

    <style>
        body {
            background-color: #dadada;
        }

        .container {
            width: 75%;
            padding: 0 !important;
            margin-left: 22%;
            margin-top: 30px;
            border-radius: 10px;
        }

        .container-sub {
            background-color: #fff;
            width: 100%;
            padding: 30px;
            border-radius: 10px;
        }

        .container-fluid {
            background-color: #fff;
            width: 75%;
            padding: 30px;
            margin-left: 22%;
            margin-top: 30px;
            border-radius: 10px;
        }

        .sidebar {
            padding: 30px;
            width: 20%;
            height: 100%;
            position: fixed;
        }

        /* form */
        .form-outline,
        .form-file,
        .form-kategori {
            position: relative;
            margin-bottom: 10px;
        }

        .invalid-feedback {
            font-size: 12px;
            position: absolute;
            right: 16px;
            bottom: 8px;
        }
    </style>
</head>

<body>
    @include('layouts.sidebar') @yield('content')

    <!-- MDB -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.js"></script>


    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#table').DataTable();
        });
    </script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.js">
    </script>

    <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>


    <!-- ukuran -->
    <script>
        $(document).ready(function () {
            let inputCount = 1;
            let ukuran = <? php echo isset($ukuran) ? json_encode($ukuran) : '[]'; ?>; // Mengambil data $ukuran dari PHP jika tersedia
            let warna = <? php echo isset($warna) ? json_encode($warna) : '[]'; ?>; // Mengambil data $warna dari PHP jika tersedia

            $('#addUkuran').click(function () {
                inputCount++;
                $('#dynamic-inputs-ukuran').append(
                    ' <div class="varian mt-2">' +
                    '<div class="d-flex">' +
                    '<select class="form-control" name="ukuran_id[]" id="pilihan" onchange="handleDropdownChange(this.value)">' +
                    '<option value="input">-- ukuran--</option>' +
                    '<option value="input">Input</option>' +
                    ukuran.map(u => '<option value="' + u.id + '">' + u.nama + '</option>').join('') +
                    '</select>' +
                    '<select class="form-control mx-1" name="warna_id[]" id="pilihan" onchange="handleDropdownChange(this.value)">' +
                    '<option value="input">-- warna --</option>' +
                    '<option value="input">Input</option>' +
                    warna.map(w => '<option value="' + w.id + '">' + w.nama + '</option>').join('') +
                    '</select>' +
                    '<input type="text" name="stok[]" class="form-control" placeholder="stok">' +
                    '<button type="button" class="btn btn-danger mx-1 removeInput">-</button>' +
                    '</div>' +
                    '</div>'
                );
            })



            // Menghapus inputan dinamis
            $(document).on('click', '.removeInput', function () {
                $(this).closest('.varian').remove();
            });
        });
    </script>

    <script>
        ClassicEditor
            .create(document.querySelector('#deskripsi'))
            .catch(error => {
                console.error(error);
            });
    </script>

    <!-- add input in option -->
    <script>
        function handleDropdownChange(selectedValue) {
            if (selectedValue === "input") {
                document.getElementById("inputField").style.display = "block";
            } else {
                document.getElementById("inputField").style.display = "none";
            }
        }
    </script>

    <script>
        $(document).ready(function () {
            let inputCount = 1;
            $('#addUkuran').click(function () {
                inputCount++;
                // Salin templat ukuran dan tambahkan ke varian
                let ukuranTemplate = $('#ukuranTemplate').html();
                $('#varian').append(ukuranTemplate);
            });

            // Menghapus inputan dinamis
            $(document).on('click', '.removeInput', function () {
                $(this).closest('.ukuran').remove();
            });
        });
    </script>

</body>

</html>