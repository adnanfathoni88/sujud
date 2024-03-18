@include('user.layouts.main')

<div id="shop">

    {{-- header banner --}}
    <section id="header-banner-shop">
        <div class="container">
            <div class="py-4">
                <img src="{{ asset('img/shop/banner/header-banner-1.png') }}" alt="" class="img-fluid">
            </div>
        </div>
    </section>

    {{-- shop category --}}
    <section id="shop-category" class="mt-3">
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
</div>

@include('partials/footer')