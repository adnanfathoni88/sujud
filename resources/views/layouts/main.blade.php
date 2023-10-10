<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sujud Company</title>
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

    <!-- data table -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css">

    <link rel="stylesheet" href="{{ asset('css/style.css') }}" />

    <style>
        body {
            background-color: #5ec8d7;
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
    <script type="text/javascript" charset="utf8"
        src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.js"></script>

    <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>
</body>

</html>