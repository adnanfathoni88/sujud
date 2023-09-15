<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>sujud company</title>
        <!-- Font Awesome -->
        <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            rel="stylesheet"
        />
        <!-- MDB -->
        <link
            href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css"
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="{{ asset('css/style.css') }}" />
    </head>
    <body>
        @include('partials/header')
        <section id="shop">
            <div class="container">
                <div
                    class="shop-header d-flex justify-content-center align-items-center"
                >
                    <h2>Shop All</h2>
                </div>
                <div class="shop-filter d-flex justify-content-between">
                    <a href="">Filter</a>
                    <a href="">Featured</a>
                </div>
                <div class="row produk-group d-flex justify-content-between">
                    <div class="col-3 produk-list">
                        <div class="detail-produk text-center">
                            <div class="background-shop">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                            <div class="produk-deskripsi text-start">
                                <h3>Sajadah Traveler</h3>
                                <p>IDR 199.000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 produk-list">
                        <div class="detail-produk text-center">
                            <div class="background-shop">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                            <div class="produk-deskripsi text-start">
                                <h3>Sajadah Traveler</h3>
                                <p>IDR 199.000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 produk-list">
                        <div class="detail-produk text-center">
                            <div class="background-shop">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                            <div class="produk-deskripsi text-start">
                                <h3>Sajadah Traveler</h3>
                                <p>IDR 199.000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row produk-group d-flex justify-content-between">
                    <div class="col-3 produk-list">
                        <div class="detail-produk text-center">
                            <div class="background-shop">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                            <div class="produk-deskripsi text-start">
                                <h3>Sajadah Traveler</h3>
                                <p>IDR 199.000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 produk-list">
                        <div class="detail-produk text-center">
                            <div class="background-shop">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                            <div class="produk-deskripsi text-start">
                                <h3>Sajadah Traveler</h3>
                                <p>IDR 199.000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 produk-list">
                        <div class="detail-produk text-center">
                            <div class="background-shop">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                            <div class="produk-deskripsi text-start">
                                <h3>Sajadah Traveler</h3>
                                <p>IDR 199.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        @include('partials/footer')
    </body>
</html>
