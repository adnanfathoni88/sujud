@include('user.layouts.main')
<section id="hero">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-sm-12 text-center">
                <h2 class="mb-3">Sujud Company</h2>
                <p> Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. </p>
                <button class="mt-4">Shop Now</button>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="d-flex justify-content-center align-itesm-end hero-img">
                    <img src="{{ asset('img/person_1.png') }}" alt="" class="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</section>

<section id="favorite">
    <div class="container">

        {{-- header --}}
        <div class="favorite-header" style="padding: 0px 20px">
            <div class="row">
                <div class="col-12">
                    <div class="text-center">
                        <h2>Favorite Item</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="favorite-group mt-2">
            <div class="row">
                <div class="col-sm-12 col-lg-4">
                    <div class="favorite-list mb-2">
                        <img src="{{ asset('img/sajadah.png') }}" alt="" class="img-fluid" />
                        <h5 class="mt-2">Sajadah</h5>
                        <h6 class="mt-1">IDR 199.000</h6>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="favorite-list mb-2">

                        <img src="{{ asset('img/sajadah-travel.png') }}" alt="" class="img-fluid" />
                        <h5 class="mt-2">Sajadah</h5>
                        <h6 class="mt-1">IDR 199.000</h6>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="favorite-list mb-2">

                        <img src="{{ asset('img/mukena.png') }}" alt="" class="img-fluid" />
                        <h5 class="mt-2">Sajadah</h5>
                        <h6 class="mt-1">IDR 199.000</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="subscribe">
    <div class="container text-center">
        <div class="subscribe-header">
            <i class="bi bi-envelope"></i>
            <h4>Join Our Journey</h4>
            <p class="opacity-75">
                Inspired by traditional Sambas weaving, we've pushed
                boundaries to create something never seen before. Join
                us in this launch and feel the spirit of our inspiring
                community.
            </p>
        </div>
        <div class="subscribe-body d-flex justify-content-center">
            <input class="form-control mx-1 w-40" type="text" placeholder="Enter Your Email" />
            <button class="btn btn-warning">Subscribe</button>
        </div>
    </div>
</section>

<section id="collection">
    <div class="container">

        {{-- header --}}
        <div class="collection-header" style="padding: 0px 20px">
            <div class="row">
                <div class="col-6">
                    <div class="text-start">
                        <h2>Sujud Collection</h3>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-end">
                        <a href="#">View All</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="collection-group mt-2">
            <div class="row">
                <div class="col-sm-12 col-lg-4">
                    <div class="collection-list mb-2">
                        <img src="{{ asset('img/sajadah.png') }}" alt="" class="img-fluid" />
                        <h5 class="mt-2">Sajadah</h5>
                        <h6 class="mt-1">IDR 199.000</h6>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="collection-list mb-2">

                        <img src="{{ asset('img/sajadah-travel.png') }}" alt="" class="img-fluid" />
                        <h5 class="mt-2">Sajadah</h5>
                        <h6 class="mt-1">IDR 199.000</h6>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="collection-list mb-2">

                        <img src="{{ asset('img/mukena.png') }}" alt="" class="img-fluid" />
                        <h5 class="mt-2">Sajadah</h5>
                        <h6 class="mt-1">IDR 199.000</h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-lg-4">
                    <div class="collection-list mb-2">
                        <img src="{{ asset('img/sajadah.png') }}" alt="" class="img-fluid" />
                        <h5 class="mt-2">Sajadah</h5>
                        <h6 class="mt-1">IDR 199.000</h6>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="collection-list mb-2">

                        <img src="{{ asset('img/sajadah-travel.png') }}" alt="" class="img-fluid" />
                        <h5 class="mt-2">Sajadah</h5>
                        <h6 class="mt-1">IDR 199.000</h6>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="collection-list mb-2">

                        <img src="{{ asset('img/mukena.png') }}" alt="" class="img-fluid" />
                        <h5 class="mt-2">Sajadah</h5>
                        <h6 class="mt-1">IDR 199.000</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="seen">
    <div class="container text-center">
        <h4>A Seen On</h4>
        <div class="row image-group">
            <div class="col-4 sponsor-list">
                <img src="{{ asset('img/logo/trans-7.png') }}" alt="" />
            </div>
            <div class="col-4 sponsor-list d-flex flex-column justify-content-center align-items-center">
                <img src="{{ asset('img/logo/liputan-6.png') }}" alt="" />
            </div>
            <div class="col-4 sponsor-list">
                <img src="{{ asset('img/logo/tribun-news.jpg') }}" alt="" />
            </div>
        </div>
        <div class="row image-group">
            <div class="col-4 sponsor-list d-flex align-items-center justify-content-center">
                <img src="{{ asset('img/logo/kumparan.png') }}" alt="" />
            </div>
            <div class="col-4 sponsor-list d-flex flex-column justify-content-center align-items-center">
                <img src="{{ asset('img/logo/media-indonesia.png') }}" alt="" />
            </div>
            <div class="col-4 sponsor-list">
                <img src="{{ asset('img/logo/radar-jogja.png') }}" alt="" />
            </div>
        </div>
    </div>

</section>

<footer>
    <div class="container">
        <div class="row">
            <div class="col-3 text-center">
                <img src="{{ asset('img/logo/sujud.png') }}" alt="" />
            </div>
            <div class="col-3 text-start">
                <h5>Contact Us</h5>
                <div class="mt-4 footer-body">
                    <p>lorem@gmail.com</p>
                    <p>
                        Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa
                        Yogyakarta
                    </p>
                    <p>0813 9371 9073</p>
                </div>
            </div>
            <div class="col-3 text-center">
                <h5>Collection</h5>
                <div class="mt-4 footer-body">
                    <p>Jaket Sport</p>
                    <p>Sajadah</p>
                    <p>Mukena</p>
                    <p>Khimar</p>
                </div>
            </div>
            <div class="col-3 text-center">
                <h5>Follow Us</h5>
                <div class="d-flex justify-content-center mt-4">
                    <div class="medsos-list">
                        <i class="bi bi-instagram"></i>
                    </div>
                    <div class="medsos-list">
                        <i class="bi bi-youtube"></i>
                    </div>
                    <div class="medsos-list">
                        <i class="bi bi-tiktok"></i>
                    </div>
                </div>
            </div>
            <hr />
            <div class="col-12 text-end copyright">
                <p>© 2021 Sujud Company. All Rights Reserved</p>
            </div>
        </div>
    </div>
</footer>