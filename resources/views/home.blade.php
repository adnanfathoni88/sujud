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
    @include('partials.header')
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

    <section id="collection">
        <div class="container">

            {{-- header --}}
            <div class="collection-header">
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

            <div class="collection-group mt-4">
                <div class="row">
                    <div class="col-4 collection-list">
                        <img src="{{ asset('img/sajadah.png') }}" alt="" />
                        <h5>Sajadah</h5>
                        <h6>IDR 199.000</h6>
                    </div>
                    <div class="col-4 collection-list">
                        <img src="{{ asset('img/sajadah-travel.png') }}" alt="" />
                        <h5>Sajadah</h5>
                        <h6>IDR 199.000</h6>
                    </div>
                    <div class="col-4 collection-list">
                        <img src="{{ asset('img/mukena.png') }}" alt="" />
                        <h5>Sajadah</h5>
                        <h6>IDR 199.000</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {{--
    <section id="collection">
        <div class="container text-center">
            <h2>Sujud Collection</h2>
            <img src="{{ asset('img/group-catalog.png') }}" alt="" />
            <div>
                <p>
                    From our community, to yours. Hear the voices of those
                    who wear Sambas with pride. Real stories, real
                    connections, and the magic of shared experiences.
                </p>
            </div>
            <div class="row">
                <div class="col-4">
                    <img src="{{ asset('img/sajadah.png') }}" alt="" width="100%" />
                </div>
                <div class="col-4">
                    <img src="{{ asset('img/mukena.png') }}" alt="" width="100%" />
                </div>
                <div class="col-4">
                    <img src="{{ asset('img/sajadah-travel.png') }}" alt="" width="100%" />
                </div>
            </div>
        </div>
    </section>

    <section id="testimony">
        <div class="container text-center">
            <h2>Testimony</h2>
            <div class="row comment-group d-flex justify-content-center">
                <div class="col-3 comment-list">
                    <div class="d-flex comment">
                        <img src="{{ asset('img/person/person-1.png') }}" alt="" width="60px" />
                        <div class="commentator text-start">
                            <h4>Mr. Amri</h4>
                            <div class="star-list">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                        </div>
                    </div>
                    <div class="comment-body text-start">
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Veniam doloremque dolor error
                            perspiciatis! Quia, consectetur est maxime
                            inventore libero maiores. Obcaecati natus
                            excepturi optio dolorem? Esse aliquam voluptatem
                            dolore est.
                        </p>
                    </div>
                </div>
                <div class="col-3 comment-list">
                    <div class="d-flex comment">
                        <img src="{{ asset('img/person/person-1.png') }}" alt="" width="60px" />
                        <div class="commentator text-start">
                            <h4>Mr. Amri</h4>
                            <div class="star-list">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                        </div>
                    </div>
                    <div class="comment-body text-start">
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Veniam doloremque dolor error
                            perspiciatis! Quia, consectetur est maxime
                            inventore libero maiores. Obcaecati natus
                            excepturi optio dolorem? Esse aliquam voluptatem
                            dolore est.
                        </p>
                    </div>
                </div>
                <div class="col-3 comment-list">
                    <div class="d-flex comment">
                        <img src="{{ asset('img/person/person-1.png') }}" alt="" width="60px" />
                        <div class="commentator text-start">
                            <h4>Mr. Amri</h4>
                            <div class="star-list">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                        </div>
                    </div>
                    <div class="comment-body text-start">
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Veniam doloremque dolor error
                            perspiciatis! Quia, consectetur est maxime
                            inventore libero maiores. Obcaecati natus
                            excepturi optio dolorem? Esse aliquam voluptatem
                            dolore est.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <i class="bi bi-circle-fill"></i>
            <i class="bi bi-circle-fill"></i>
            <i class="bi bi-circle-fill"></i>
        </div>
    </section>


    <section id="subscribe">
        <div class="container text-center">
            <div class="subscribe-header">
                <i class="bi bi-envelope"></i>
                <h4>Join Our Journey</h4>
                <p>
                    Inspired by traditional Sambas weaving, we've pushed
                    boundaries to create something never seen before. Join
                    us in this launch and feel the spirit of our inspiring
                    community.
                </p>
            </div>
            <div class="subscribe-body">
                <input type="text" placeholder="Enter Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    </section>

    <section id="favorite">
        <div class="container">
            <div class="row">
                <div class="col-3 produk-group-left text-center d-flex flex-column justify-content-center">
                    <h4>Favorite Item</h4>
                    <h5>Buy Now</h5>
                    <button>More</button>
                </div>
                <div class="col-9">
                    <div class="produk-group d-flex justify-content-center">
                        <div class="produk-list">
                            <img src="{{ asset('img/sajadah.png') }}" alt="" width="250px" />
                            <h5>Sajadah</h5>
                            <h6>IDR 199.000</h6>
                        </div>
                        <div class="produk-list">
                            <img src="{{ asset('img/sajadah.png') }}" alt="" width="250px" />
                            <h5>Sajadah</h5>
                            <h6>IDR 199.000</h6>
                        </div>
                        <div class="produk-list">
                            <img src="{{ asset('img/sajadah.png') }}" alt="" width="250px" />
                            <h5>Sajadah</h5>
                            <h6>IDR 199.000</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="explore">
        <div class="container text-center">
            <h2>Muslim Active Traveler</h2>
            <p>
                "Muslim Active Traveler is a travel community that combines
                worldly exploration with profound spiritual experiences."
            </p>
            <button class="mt-2">Explore</button>
        </div>
        <div class="background"></div>
    </section>

    <section id="lookbook">
        <div class="container text-center">
            <h2>Our latest lookbook</h2>
            <div class="row">
                <div class="col-6">
                    <div class="image-container">
                        <img src="{{ asset('img/sajadah.png') }}" alt="" />
                        <p>SAJADAH</p>
                        <div class="background-produk"></div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="image-container">
                        <img src="{{ asset('img/sajadah.png') }}" alt="" />
                        <p>SAJADAH</p>
                        <div class="background-produk"></div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-4">
                    <div class="image-container">
                        <img src="{{ asset('img/sajadah.png') }}" alt="" />
                        <p>SAJADAH</p>
                        <div class="background-produk"></div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="image-container">
                        <img src="{{ asset('img/sajadah.png') }}" alt="" />
                        <p>SAJADAH</p>
                        <div class="background-produk"></div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="image-container">
                        <img src="{{ asset('img/sajadah.png') }}" alt="" />
                        <p>SAJADAH</p>
                        <div class="background-produk"></div>
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
    </section> --}}

    @include ('partials.footer')
</body>

</html>