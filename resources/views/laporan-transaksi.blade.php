<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laporan Transaksi</title>
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="{{ asset('css/satoshi.css') }}">
    @vite('resources/css/style.css')

	<style>
		@media print {
			.print-hidden {
				display: none;
			}
		}
	</style>
</head>

<body>
    <form method="GET" class="mt-10 block border-b pb-10 print-hidden">
        <div class="flex flex-col md:flex-row md:justify-center md:items-center w-full gap-3">
            <div class="flex flex-col md:flex-row md:items-center">
                <select name="month" id="bulan" class="form-select border p-2 rounded">
                    <option value="01" {{ $month == '01' ? 'selected' : '' }}>Januari</option>
                    <option value="02" {{ $month == '02' ? 'selected' : '' }}>Februari</option>
                    <option value="03" {{ $month == '03' ? 'selected' : '' }}>Maret</option>
                    <option value="04" {{ $month == '04' ? 'selected' : '' }}>April</option>
                    <option value="05" {{ $month == '05' ? 'selected' : '' }}>Mei</option>
                    <option value="06" {{ $month == '06' ? 'selected' : '' }}>Juni</option>
                    <option value="07" {{ $month == '07' ? 'selected' : '' }}>Juli</option>
                    <option value="08" {{ $month == '08' ? 'selected' : '' }}>Agustus</option>
                    <option value="09" {{ $month == '09' ? 'selected' : '' }}>September</option>
                    <option value="10" {{ $month == '10' ? 'selected' : '' }}>Oktober</option>
                    <option value="11" {{ $month == '11' ? 'selected' : '' }}>November</option>
                    <option value="12" {{ $month == '12' ? 'selected' : '' }}>Desember</option>
                </select>
            </div>
            <div class="flex flex-col md:flex-row md:items-center">
                <select name="year" id="tahun" class="form-select p-2 border rounded">
                    @for ($i = 2024; $i <= date('Y') + 2; $i++)
                        <option value="{{ $i }}" {{ $year == $i ? 'selected' : '' }}>{{ $i }}
                        </option>
                    @endfor
                </select>
            </div>
            <div class="flex flex-col md:flex-row md:items-center">
                <button type="submit" class="btn bg-first px-3 text-sm rounded text-white">Tampilkan</button>
            </div>
        </div>
    </form>
    <div class="align-middle mx-auto max-w-[800px] text-black">
        <h1 class="text-black font-bold text-lg mb-5 mt-10">Laporan Transaksi, {{ $readable_month }}, {{ $year }}.</h1>
        <table class="min-w-[100%]">
            <thead>
                <tr>
                    <th class="p-3 border text-sm whitespace-nowrap text-left">No.</th>
                    <th class="p-3 border text-sm whitespace-nowrap text-left">Tanggal Pembayaran</th>
                    <th class="p-3 border text-sm whitespace-nowrap text-left">Invoice</th>
                    <th class="p-3 border text-sm whitespace-nowrap text-left">Total</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($transaksi as $key => $item)
                    <tr class="align-top">
                        <td class="p-3 border text-sm whitespace-nowrap">{{ $key + 1 }}</td>
                        <td class="p-3 border text-sm whitespace-nowrap">{{ $item->tgl_bayar }}</td>
                        <td class="p-3 border text-sm whitespace-nowrap">{{ $item->pesanan_grup }}</td>
                        <td class="p-3 border text-sm whitespace-nowrap">Rp. {{ number_format($item->total) }}</td>
                    </tr>
                @endforeach
                <tr class="align-top">
                    <td class="font-bold p-3 border text-sm whitespace-nowrap">Subtotal</td>
                    <td class="font-bold text-right p-3 border text-sm whitespace-nowrap" colspan="3">
                        Rp. {{ number_format($total) }}
					</td>
                </tr>
            </tbody>
        </table>
    	<button class="btn bg-first rounded text-white px-7 py-2 mt-5 ml-auto block print-hidden" onclick="window.print()">Cetak</button>
    </div>
</body>

</html>
