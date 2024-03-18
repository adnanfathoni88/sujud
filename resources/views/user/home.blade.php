@include('user.layouts.main')

{{-- hero --}}
<section id="hero">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-sm-12 d-flex flex-column justify-content-center text-center align-items-center">
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

{{-- top sale --}}
<section id="top-sale">
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-10 col-sm-12">
                <div class="top-sale-content text-center py-4">
                    <h4 class="text-center my-4">Top Sale</h4>
                    <div class="top-sale-group d-flex justify-content-center mb-4">
                        <div class="item-top-sale mx-2">
                            <div class="d-flex justify-content-center">
                                <figure>
                                    <img src="{{ asset('img/produk/cordoba.png') }}" alt="" height="200px">
                                </figure>
                                <div class="top-sale-body d-flex flex-column justify-content-center text-start">
                                    <span>Sajadah</span>
                                    <h6>Cordoba</h6>
                                </div>
                            </div>
                        </div>
                        <div class="item-top-sale mx-2">
                            <div class="d-flex justify-content-center">
                                <figure>
                                    <img src="{{ asset('img/produk/cordoba.png') }}" alt="" height="200px">
                                </figure>
                                <div class="top-sale-body d-flex flex-column justify-content-center text-start">
                                    <span>Sajadah</span>
                                    <h6>Cordoba</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="btn-top-sale text-center mb-4 mt-2">More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{{-- why should us --}}
<section id="why-should-we">
    <div class="container">
        <div class="ship-group">
            <h4 class="ship-judul text-center">Why Should We?</h4>
            <div class="row mt-4">
                <div class="col-6">
                    <div class="ship-item">
                        <div class="ship-item-header">
                            <i class="fa-solid fa-person-praying icon"></i>
                            <span class="mx-3">Spiritual</span>
                        </div>
                        <div class="ship-item-body mt-2">
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus, veritatis nam,
                                assumenda soluta ipsa, ea ut laudantium sit eos velit animi atque dolorum eligendi harum
                                inventore placeat dolore consequatur.</span>
                        </div>

                    </div>
                </div>
                <div class="col-6">
                    <div class="ship-item">
                        <div class="ship-item-header">
                            <i class="fa-solid fa-person-praying icon"></i>
                            <span class="mx-3">Spiritual</span>
                        </div>
                        <div class="ship-item-body mt-2">
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus, veritatis nam,
                                assumenda soluta ipsa, ea ut laudantium sit eos velit animi atque dolorum eligendi harum
                                inventore placeat dolore consequatur.</span>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-6">
                    <div class="ship-item">
                        <div class="ship-item-header">
                            <i class="fa-solid fa-person-praying icon"></i>
                            <span class="mx-3">Spiritual</span>
                        </div>
                        <div class="ship-item-body mt-2">
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus, veritatis nam,
                                assumenda soluta ipsa, ea ut laudantium sit eos velit animi atque dolorum eligendi harum
                                inventore placeat dolore consequatur.</span>
                        </div>

                    </div>
                </div>
                <div class="col-6">
                    <div class="ship-item">
                        <div class="ship-item-header">
                            <i class="fa-solid fa-person-praying icon"></i>
                            <span class="mx-3">Spiritual</span>
                        </div>
                        <div class="ship-item-body mt-2">
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus, veritatis nam,
                                assumenda soluta ipsa, ea ut laudantium sit eos velit animi atque dolorum eligendi harum
                                inventore placeat dolore consequatur.</span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

{{-- active traveler--}}
<section id="active-traveler">
    <div class="active-traveler-content text-center">
        <div class="">
            <h4>Muslim Active Traveler</h4>
            <span>"Muslim Active Traveler is a travel community that combines worldly exploration with profound
                spiritual
                experiences."</span>
        </div>
        <button class="btn-active-traveler">Explore</button>
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

<section id="subscribe">
    <div class="container text-center">
        <div class="subscribe-header">
            <h4 class="mb-4">Join Our Journey</h4>
            <p class="opacity-75" style="font-style: italic">
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

@include('user.layouts.footer')