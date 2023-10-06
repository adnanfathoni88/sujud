@extends('layouts.main') @section('content')
<div class="container-fluid">
    <h2>Transaksi</h2>
</div>
<div class="container-fluid">
    <a class="btn btn-primary" href="/add-pesanan">Tambah </a>
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
            <th>Tanggal Pesan</th>
            <th>Status Bayar</th>
            <th>Status Kirim</th>
            <th>Total</th>
            <th>Alamat</th>
            <th>Produk</th>
            <th>User</th>
            <th>Action</th>
        </thead>
        <tbody>
            @foreach ($pesanan as $p)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ $p['kode'] }}</td>
                <td>{{ $p['tgl_pesan'] }}</td>
                <td>{{ $p['status_bayar'] }}</td>
                <td>{{ $p['status_kirim'] }}</td>
                <td>{{ $p['total'] }}</td>
                <td>{{ $p['alamat'] }}</td>
                <td>{{ $p->produk['nama'] }}</td>
                <td>{{ $p->user['nama'] }}</td>
                <td>
                    <a class="btn btn-warning" href="/edit-pesanan/{{ $p['id'] }}"><i
                            class="far fa-pen-to-square"></i></a>
                    <a class="btn btn-danger" href="/delete-pesanan/{{ $p['id'] }}"
                        onclick="return confirm ('Hapus Data {{ $p['kode'] }}')"><i class="far fa-trash-can"></i></a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection