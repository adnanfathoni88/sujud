<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>sujud company</title>

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />

    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" />
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="{{ asset('img/logo/sujud.png') }}" alt="">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/shop">Shop All</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Collection</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About us</a>
                        </li>
                        <li class="nav-item">
                            <button class="btn-login">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- konten -->
    @yield('content')

</body>

</html>