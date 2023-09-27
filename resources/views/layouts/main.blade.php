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
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" />

    <style>
        body {
            background-color: #f5f5f5;
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
    </style>
</head>

<body>
    @include('layouts.sidebar') @yield('content')

    <!-- MDB -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.js"></script>
</body>

</html>