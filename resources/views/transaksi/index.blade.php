@extends('layouts.main') @section('content')
<div class="container-fluid">
    <h2>Transaksi</h2>
</div>
<div class="container-fluid">
    <a class="btn btn-primary" href="/add-produk">Tambah </a>
    <div class="my-4">
        @if(session('error'))
        <div class="alert alert-danger">
            {{ session('error') }}
        </div>
        @endif

        @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
        @endif

        @if(session('delete'))
        <div class="alert alert-danger">
            {{ session('delete') }}
        </div>
        @endif
    </div>
    <table id="table" class="table table-bordered table-hover" style="width: 100%;">
        <thead>
            <th>no</th>
            <th>kode</th>
            <th>Tanggal Bayar</th>
            <th>Metode</th>
            <th>Status</th>
            <th>Total</th>
            <th>Pesanan_id</th>
        </thead>
        <tbody>
            @foreach ($transaksi as $t)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ $t['kode'] }}</td>
                <td>{{ $t['tgl_bayar'] }}</td>
                <td>{{ $t['metode'] }}</td>
                <td>{{ $t['status'] }}</td>
                <td>{{ $t['total'] }}</td>
                <td>{{ $t['pesanan_id'] }}</td>
                <!-- <td>
                    @if($gambar->has($t['id']))
                    @foreach($gambar[$t['id']] as $g)
                    <img src="{{ asset('storage/img/'.$g['nama']) }}" alt="" width="50px">
                    @endforeach
                    @endif
                </td>
                <td>
                    <a class="btn btn-warning" href="/edit-produk/{{ $t['id'] }}"><i
                            class="far fa-pen-to-square"></i></a>
                    <a class="btn btn-danger" href="/hapus-produk/{{ $t['id'] }}"
                        onclick="return confirm ('Hapus Data {{ $t['nama'] }}')"><i class="far fa-trash-can"></i></a>
                </td> -->
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection