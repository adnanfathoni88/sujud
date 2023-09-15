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
    @include ('partials/header')
    <section id="checkout">
        <div class="container text-center">
            <div class="row">
                <div class="col-7 checkout-left">
                    <div class="checkout-left-header">
                        <img src="{{ asset('img/logo/sujud-hitam.png') }}" alt="" width="100px" />
                        <p>cart > information > Shipping > Payment</p>
                    </div>
                    <div class="chechout-left-body text-start">
                        <div>
                            <p>Contact</p>
                            <div class="form-outline">
                                <input type="text" id="form12" class="form-control" />
                                <label class="form-label" for="form12">Email</label>
                            </div>
                        </div>
                        <div>
                            <p>Shipping Address</p>
                            <div class="form-outline">
                                <input type="text" id="form12" class="form-control" />
                                <label class="form-label" for="form12">Name</label>
                            </div>
                            <div class="form-outline">
                                <input type="text" id="form12" class="form-control" />
                                <label class="form-label" for="form12">Country</label>
                            </div>
                            <div class="form-outline">
                                <input type="text" id="form12" class="form-control" />
                                <label class="form-label" for="form12">Province</label>
                            </div>
                            <div class="form-outline">
                                <input type="text" id="form12" class="form-control" />
                                <label class="form-label" for="form12">City</label>
                            </div>
                            <div class="form-outline">
                                <input type="text" id="form12" class="form-control" />
                                <label class="form-label" for="form12">District</label>
                            </div>
                            <div class="form-outline">
                                <input type="text" id="form12" class="form-control" />
                                <label class="form-label" for="form12">Phone</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" />
                                <label for="">Save this information for next
                                    time</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-5 checkout-right">
                    <div class="chechout-right-detail text-start">
                        <h4>Your Order</h4>
                        <table class="table">
                            <thead>
                                <tr class=" ">
                                    <th>Product</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="checkout-produk-group d-flex ">
                                            <img src="{{asset('img/produk/geometry.png')}}" alt="" width="60px" />
                                            <div class="checkout-produk-list">
                                                <h4>Sajadah Traveler</h4>
                                                <p>Black</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>1</p>
                                    </td>
                                    <td>
                                        <div class="checkout-price">
                                            <p>IDR 199.000</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="checkout-produk-group d-flex ">
                                            <img src="{{asset('img/produk/geometry.png')}}" alt="" width="60px" />
                                            <div class="checkout-produk-list">
                                                <h4>Sajadah Traveler</h4>
                                                <p>Black</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>1</p>
                                    </td>
                                    <td>
                                        <div class="checkout-price">
                                            <p>IDR 199.000</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="chechout-detail">
                            <div class="d-flex justify-content-between">
                                <p>Subtotal</p>
                                <p>IDR 398.000</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Shipping</p>
                                <p>IDR 0</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h4>Total</h4>
                                <h4>IDR 398.000</h4>
                            </div>
                        </div>
                        <button>Continue To Shipping</button>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- MDB -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js"></script>
</body>

</html>