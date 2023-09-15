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
    <section id="location">
        <div class="container">
            <div class="location-header text-center">
                <h2>Store Location</h2>
            </div>
            <div class="location-body">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0244870668025!2d110.34948307500501!3d-7.787228292232618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a593a2b8ca785%3A0xe08723f96e773afe!2sSujud%20Company!5e0!3m2!1sid!2sid!4v1694748448991!5m2!1sid!2sid"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <div class="location-footer mt-4">
                    <div class="row">
                        <div class="col-6">
                            <div class="location-footer-left">
                                <h4>Store Location</h4>
                                <p>Tegalrejo, Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55244</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="location-footer-right">
                                <h4>Store Hours</h4>
                                <p>Monday - Friday : 09.00 - 17.00</p>
                                <p>Saturday - Sunday : Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>

    @include ('partials.footer')
</body>

</html>