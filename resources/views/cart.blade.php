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
        @include ('partials/header')
        <section id="cart">
            <div class="container">
                <div class="row cart-group">
                    <div class="col-8 cart-left">
                        <div
                            class="cart-header d-flex justify-content-between mb-2"
                        >
                            <h4>Cart</h4>
                            <p>2 item</p>
                        </div>

                        <div class="cart-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                        </td>
                                        <td>
                                            <div
                                                class="cart-produk-group d-flex align-items-center"
                                            >
                                                <img
                                                    src="{{
                                                        asset(
                                                            'img/produk/geometry.png'
                                                        )
                                                    }}"
                                                    alt=""
                                                    width="60px"
                                                />
                                                <div class="cart-produk-list">
                                                    <h4>Sajadah Traveler</h4>
                                                    <p>Black</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                class="cart-quantity d-flex justify-content-start text-center align-items-center"
                                            >
                                                <a href="">-</a>
                                                <input
                                                    class="text-center"
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    value="1"
                                                />
                                                <a href="">+</a>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="cart-price">
                                                <h5>IDR 199.000</h5>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="">x</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                        </td>
                                        <td>
                                            <div
                                                class="cart-produk-group d-flex align-items-center"
                                            >
                                                <img
                                                    src="{{
                                                        asset(
                                                            'img/produk/geometry.png'
                                                        )
                                                    }}"
                                                    alt=""
                                                    width="60px"
                                                />
                                                <div class="cart-produk-list">
                                                    <h4>Sajadah Traveler</h4>
                                                    <p>Black</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                class="cart-quantity d-flex justify-content-start text-center align-items-center"
                                            >
                                                <a href="">-</a>
                                                <input
                                                    class="text-center"
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    value="1"
                                                />
                                                <a href="">+</a>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="cart-price">
                                                <h5>IDR 199.000</h5>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="">x</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-4 cart-right">
                        <div class="cart-right-group">
                            <h5>Cart Total</h5>
                            <hr />
                            <div class="">
                                <div class="d-flex justify-content-between">
                                    <p>Subtotal</p>
                                    <p>IDR 199.000</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>Shipping</p>
                                    <p>IDR 199.000</p>
                                </div>
                                <div
                                    class="d-flex justify-content-between mt-2 mb-4"
                                >
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="voucher code"
                                    />
                                    <button>Apply</button>
                                </div>
                            </div>
                            <hr />
                            <div class="cart-total">
                                <div class="d-flex justify-content-between">
                                    <p>TOTAL</p>
                                    <p>IDR 199.000</p>
                                </div>
                                <button>Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
