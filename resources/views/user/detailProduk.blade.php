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
        <section id="detail">
            <div class="container">
                <div class="row d-flex">
                    <div class="col-6">
                        <div class="image-group d-flex justify-content-between">
                            <div class="image-list text-center">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                />
                            </div>
                            <div class="image-list text-center">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="image-group d-flex justify-content-between">
                            <div class="image-list text-center">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                />
                            </div>
                            <div class="image-list text-center">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-6 product-right">
                        <div class="price">
                            <h2>Sajadah geometry</h2>
                            <h4>IDR 199.000</h4>
                            <div class="color">
                                <p>Color</p>
                                <a href="#">Black</a>
                                <a href="#">Red</a>
                                <a href="#">Blue</a>
                            </div>
                            <div class="quantity">
                                <p>Quantity</p>
                                <a href="#">-</a>
                                <a href="#">1</a>
                                <a href="#">+</a>
                            </div>
                            <div class="add-to-cart text-center">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                        <div class="description">
                            <h4>Description</h4>

                            <p>- Tersedia 5 Pilihan warna</p>
                            <p>- Bahan Premium</p>
                            <p>- Bahan Halus</p>
                            <p>- Bahan Berkualitas</p>
                            <h5>
                                *Terdapat sedikit perbedaan warna akibat
                                cahaya/screen di masing-masing device yang
                                digunakan*
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="comment">
            <div class="container text-center">
                <h3>Commentary</h3>
                <div class="row d-flex justify-content-center">
                    <div class="col-4">
                        <div class="comment-left text-end">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <p>Belum Ada Ulasan</p>
                        </div>
                    </div>
                    <div class="col-4 strip"></div>
                    <div class="col-4 text-start d-flex align-items-center">
                        <div class="comment-right">
                            <a href="#">Write Comment</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="recomended">
            <div class="container text-center">
                <h2>You May Also Like</h2>
                <div class="row">
                    <div
                        class="recomended-group d-flex justify-content-between"
                    >
                        <div class="recomended-list">
                            <div class="recomended-background">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                            <div
                                class="recomended-group d-flex justify-content-between"
                            >
                                <div class="recomended-start">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <p>(82 terjual)</p>
                            </div>
                            <div class="recomended-price text-start">
                                <h4>Sajadah Geometry</h4>
                                <h5>IDR 199.000</h5>
                            </div>
                        </div>
                        <div class="recomended-list">
                            <div class="recomended-background">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                            <div
                                class="recomended-group d-flex justify-content-between"
                            >
                                <div class="recomended-start">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <p>(82 terjual)</p>
                            </div>
                            <div class="recomended-price text-start">
                                <h4>Sajadah Geometry</h4>
                                <h5>IDR 199.000</h5>
                            </div>
                        </div>
                        <div class="recomended-list">
                            <div class="recomended-background">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>

                            <div
                                class="recomended-group d-flex justify-content-between"
                            >
                                <div class="recomended-start">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <p>(82 terjual)</p>
                            </div>
                            <div class="recomended-price text-start">
                                <h4>Sajadah Geometry</h4>
                                <h5>IDR 199.000</h5>
                            </div>
                        </div>
                        <div class="recomended-list">
                            <div class="recomended-background">
                                <img
                                    src="{{ asset('img/produk/geometry.png') }}"
                                    alt=""
                                />
                            </div>
                            <div
                                class="recomended-group d-flex justify-content-between"
                            >
                                <div class="recomended-start">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </div>
                                <p>(82 terjual)</p>
                            </div>
                            <div class="recomended-price text-start">
                                <h4>Sajadah Geometry</h4>
                                <h5>IDR 199.000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        @include('partials/footer')
    </body>
</html>
    