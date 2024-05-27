<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Payment Success</title>
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="{{ asset('css/satoshi.css') }}">
    @vite('resources/css/style.css')
</head>

<body>
    <div class="bg-slate-200 h-screen">
        <div class="max-w-md mx-auto h-full flex-col flex justify-center">
            @if ($error)
                <div class="bg-white rounded-xl px-4 pt-6 pb-10 text-center">
                    <div class="flex justify-center">
                        <div class="bg-red-200/25 p-2 rounded-full mb-2">
                            <div class="bg-red-200 p-3 rounded-full">
                                <div class="bg-red-300 p-4 rounded-full">
                                    <FaCheck class="text-white text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 class="font-semibold text-xl">Pembayaran Gagal</h1>
                    <hr class="text-slate-200 my-4 mx-4" />
                    <div class="text-slate-400">
                        <p>{{ $message }}</p>
                    </div>
                    <a href="/pesanan?status=dibayar&page=1&isConfirmed=true&fromReturn=true" class="block bg-sky-400 text-white mt-6 py-2 px-6 rounded-lg w-fit mx-auto">
                        Ke Home
                    </a>
                </div>
            @else
                <div class="bg-white rounded-xl px-4 pt-6 pb-10 text-center">
                    @if ($code == '00')
                        <div class="flex justify-center">
                            <div class="bg-green-200/25 p-2 rounded-full mb-2">
                                <div class="bg-green-200 p-3 rounded-full">
                                    <div class="bg-green-300 p-4 rounded-full">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 class="font-semibold text-xl">Pembayaran Berhasil</h1>
                    @elseif ($code == '01')
                        <div class="flex justify-center">
                            <div class="bg-orange-200/25 p-2 rounded-full mb-2">
                                <div class="bg-orange-200 p-3 rounded-full">
                                    <div class="bg-orange-300 p-4 rounded-full">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 class="font-semibold text-xl">Pembayaranmu Masih Diproses</h1>
                    @elseif ($code == '02')
                        <div class="flex justify-center">
                            <div class="bg-red-200/25 p-2 rounded-full mb-2">
                                <div class="bg-red-200 p-3 rounded-full">
                                    <div class="bg-red-300 p-4 rounded-full">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 class="font-semibold text-xl">Pembayaranmu Dicancel</h1>
                    @endif
                    <hr class="text-slate-200 my-4 mx-4" />
                    <div class="text-slate-400">
                        <p>
                            Terima kasih telah melakukan pembayaran. Kami akan segera
                            memproses pesanan Anda.
                        </p>
                    </div>
                    <a href="/pesanan?status=dibayar&page=1&isConfirmed=true&fromReturn=true" class="block bg-sky-400 text-white mt-6 py-2 px-6 rounded-lg w-fit mx-auto">
                        Ke Home
                    </a>
                </div>
            @endif
        </div>
    </div>;
</body>

</html>
