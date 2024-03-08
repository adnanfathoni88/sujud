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
    <section id="about-us">
        <div class="about-us-header">
            <h3 class="text-center">About Us</h3>
        </div>
        <div class="about-us-body">
            <div class="row">
                <div class="overview-visi-misi">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <div class="mb-4">
                                    <img class="mb-4" src="{{ asset('img/logo/sujud.png') }}" alt="">
                                    <h4>Overview</h4>
                                    <p>PT Sujud Global Media (Sujud Group) adalah perusahaan yang memiliki mimpi besar,
                                        dimana
                                        di
                                        dalamnya diisi anak-anak muda
                                        yang memiliki semangat tinggi dan energi positif. Sujud memiliki beberapa produk
                                        berupa
                                        perlengkapan ibadah umat muslim
                                        dan juga merambah ke bidang kecantikan atau skincare.
                                    </p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-4 row">
                                    <div class="about-us-body-left">
                                        <h4>Our Vision</h4>
                                        <p>Menjadi perusahaan global melalui produk market fit dengan
                                            pelayanan TERBAIK di dunia</p>
                                    </div>
                                    <div class="about-us-body-right mt-4">
                                        <h4>Our Mission</h4>
                                        <p> 1. Menerapkan spiritual company di lingkungan perusahaan </p>
                                        <p> 2. Membangun tim yang bahagia, berintegritas, produktif dan
                                            professional </p>
                                        <p> 3. Mempercepat pertumbuhan perusahaan dengan KAIZEN </p>
                                        <p> 4. Memberi manfaat POSITIF untuk semua stakeholder </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="value">
                    <div class="container">
                        <div class="row">
                            <div class="value-header text-center mb-4">
                                <h4>Our Value</h4>
                            </div>
                            <div class="value-group ">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-5 value-list text-start">
                                        <div>
                                            <i class="fa-solid fa-person-praying"></i>
                                            <div class="d-flex justify-content-between">
                                                <h4>Spiritual</h4>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. d-flex
                                                justify-content-center </p>
                                        </div>
                                    </div>
                                    <div class="col-5 value-list text-start">
                                        <div>
                                            <i class="fa-regular fa-face-smile"></i>
                                            <div class="d-flex justify-content-between">
                                                <h4>Happines</h4>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. d-flex
                                                justify-content-center </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-center">
                                    <div class="col-5 value-list text-start">
                                        <div>
                                            <i class="fa-solid fa-arrow-up"></i>
                                            <div class="d-flex justify-content-between">
                                                <h4>Integrity</h4>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. d-flex
                                                justify-content-center </p>
                                        </div>
                                    </div>
                                    <div class="col-5 value-list text-start">
                                        <div>
                                            <i class="fa-regular fa-clock"></i>
                                            <div class="d-flex justify-content-between">
                                                <h4>professional</h4>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. d-flex
                                                justify-content-center </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-us-footer">
                <div class="container">
                    <div class="about-header row text text-center">
                        <div>
                            <h4>Our Location</h4>
                            <p>sold in 34 countries</p>
                        </div>
                        <table class="table table-bordered mt-4">
                            <thead>
                                <tr>
                                    <th>Asia</th>
                                    <th>Europe</th>
                                    <th>Africa</th>
                                    <th>America</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex text-start justify-content-between">
                                            <div>
                                                <p>Indonesia</p>
                                                <p>Malaysia</p>
                                                <p>Brunie Ds</p>
                                                <p>Singapore</p>
                                                <p>Thailand</p>
                                                <p>Philiphines</p>
                                                <p>Timor Leste</p>
                                            </div>
                                            <div>
                                                <p>Australia</p>
                                                <p>Japan</p>
                                                <p>Oman</p>
                                                <p>UAE</p>
                                                <p>Saudi Arabia</p>
                                                <p>Qatar</p>
                                                <p>Maldives</p>
                                                <p>Pakistan</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class=" d-flex text-start">
                                            <div>
                                                <p>Turkey</p>
                                                <p>Sweden</p>
                                                <p>Netherland</p>
                                                <p>Austria</p>
                                                <p>Germany</p>
                                            </div>
                                            <div>
                                                <p>Belgium</p>
                                                <p>Spain</p>
                                                <p>France</p>
                                                <p>Ukraine</p>
                                                <p>Norway</p>
                                                <p>UK</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-start">
                                            <p>Algeria</p>
                                            <p>Tunisia</p>
                                            <p>Mauritius</p>
                                            <p>Nigeria</p>
                                            <p>South Africa</p>
                                            <p>Zambia</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="text-start">
                                            <p>USA</p>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
    </section>

    @include ('partials.footer')
</body>

</html>