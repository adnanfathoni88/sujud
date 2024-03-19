@include('user.layouts.main')

<div id="shop">

    {{-- header banner --}}
    <section id="header-banner-shop" style="padding-top: 50px">
        <div class="container">
            <div>
                <img src="{{ asset('img/shop/banner/header-banner-1.png') }}" alt="" class="img-fluid">
            </div>
        </div>
    </section>

    {{-- shop category --}}
    <section id="shop-category">
        <div class="container">
            <h4 class="mb-3">Shop By category</h4>
            <div class="row">
                <div class="col-4">
                    <div class="shop-category-item d-flex">
                        <img src="{{ asset('img/produk/geometry.png') }}" class="img-fluid" alt="">
                        <div class="d-flex flex-column justify-content-center">
                            <h5>Sajadah</h5>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="shop-category-item d-flex">
                        <img src="{{ asset('img/produk/geometry.png') }}" class="img-fluid" alt="">
                        <div class="d-flex flex-column justify-content-center">
                            <h5>Sajadah</h5>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="shop-category-item d-flex">
                        <img src="{{ asset('img/produk/geometry.png') }}" class="img-fluid" alt="">
                        <div class="d-flex flex-column justify-content-center">
                            <h5>Sajadah</h5>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {{-- top product --}}
    <section id="top-product">
        <div class="container">
            <h4>Top Product</h4>
            <div class="top-product-item">
                <img src="{{ asset('img/shop/banner/top-product-banner.png') }}" alt="" class="img-fluid">
            </div>
        </div>
    </section>

    {{--new product --}}
    <section id="new-product">
        <div class="container">
            <h4>New Product</h4>
            <div class="new-product-group pb-3">
                <div class="new-product-item">
                    <a href="#">
                        <figure class="text-center">
                            <img src="{{ asset('img/produk/geometry.png') }}" alt="" class="img-fluid">
                            <div class="new-product-overlay"></div>
                        </figure>
                        <div class="d-flex justify-content-between">
                            <div class="new-product-star">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="new-product-sold">
                                <span>(46 sold)</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <div class="new-product-name">
                                <h5>Sajadah Travel</h5>
                            </div>
                            <div class="new-product-price">
                                <span>Rp 100.000</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="new-product-item">
                    <figure class="text-center">
                        <img src="{{ asset('img/produk/geometry.png') }}" alt="" class="img-fluid">
                        <div class="new-product-overlay"></div>
                    </figure>
                    <div class="d-flex justify-content-between">
                        <div class="new-product-star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="new-product-sold">
                            <span>(46 sold)</span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="new-product-name">
                            <h5>Sajadah Travel</h5>
                        </div>
                        <div class="new-product-price">
                            <span>Rp 100.000</span>
                        </div>
                    </div>
                </div>
                <div class="new-product-item">
                    <figure class="text-center">
                        <img src="{{ asset('img/produk/geometry.png') }}" alt="" class="img-fluid">
                        <div class="new-product-overlay"></div>
                    </figure>
                    <div class="d-flex justify-content-between">
                        <div class="new-product-star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="new-product-sold">
                            <span>(46 sold)</span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="new-product-name">
                            <h5>Sajadah Travel</h5>
                        </div>
                        <div class="new-product-price">
                            <span>Rp 100.000</span>
                        </div>
                    </div>
                </div>
                <div class="new-product-item">
                    <figure class="text-center">
                        <img src="{{ asset('img/produk/geometry.png') }}" alt="" class="img-fluid">
                        <div class="new-product-overlay"></div>
                    </figure>
                    <div class="d-flex justify-content-between">
                        <div class="new-product-star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="new-product-sold">
                            <span>(46 sold)</span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="new-product-name">
                            <h5>Sajadah Travel</h5>
                        </div>
                        <div class="new-product-price">
                            <span>Rp 100.000</span>
                        </div>
                    </div>
                </div>
                <div class="new-product-item">
                    <figure class="text-center">
                        <img src="{{ asset('img/produk/geometry.png') }}" alt="" class="img-fluid">
                        <div class="new-product-overlay"></div>
                    </figure>
                    <div class="d-flex justify-content-between">
                        <div class="new-product-star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="new-product-sold">
                            <span>(46 sold)</span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="new-product-name">
                            <h5>Sajadah Travel</h5>
                        </div>
                        <div class="new-product-price">
                            <span>Rp 100.000</span>
                        </div>
                    </div>
                </div>
                <div class="new-product-item">
                    <figure class="text-center">
                        <img src="{{ asset('img/produk/geometry.png') }}" alt="" class="img-fluid">
                        <div class="new-product-overlay"></div>
                    </figure>
                    <div class="d-flex justify-content-between">
                        <div class="new-product-star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="new-product-sold">
                            <span>(46 sold)</span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="new-product-name">
                            <h5>Sajadah Travel</h5>
                        </div>
                        <div class="new-product-price">
                            <span>Rp 100.000</span>
                        </div>
                    </div>
                </div>
                <div class="new-product-item">
                    <figure class="text-center">
                        <img src="{{ asset('img/produk/geometry.png') }}" alt="" class="img-fluid">
                        <div class="new-product-overlay"></div>
                    </figure>
                    <div class="d-flex justify-content-between">
                        <div class="new-product-star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="new-product-sold">
                            <span>(46 sold)</span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="new-product-name">
                            <h5>Sajadah Travel</h5>
                        </div>
                        <div class="new-product-price">
                            <span>Rp 100.000</span>
                        </div>
                    </div>
                </div>

                {{-- button more --}}
            </div>
            <div class="text-center">
                <button class="btn-new-product">More</button>
            </div>
        </div>
    </section>

</div>

@include('partials/footer')