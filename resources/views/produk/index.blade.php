@extends('layouts.main') @section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-9">
            <h2>Produk</h2>
        </div>
        <div class="col-3">
            <form action="/cari-produk" method="get">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Cari Produk" name="cari"
                        value="{{ request('search') }}">
                    <button class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"
                            style="color: #ffffff;"></i></button>
                </div>
            </form>
        </div>
    </div>
</div>

<div class="container-fluid">
    <a class="btn btn-primary" href="/add-produk">Tambah </a>
    <table class="table table-bordered table-hover mt-4">
        <thead>
            <th>no</th>
            <th>Kode</th>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Gambar</th>
            <th>Aksi</th>
        </thead>
        <tbody>
            @foreach ($produk as $p)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ $p['kode'] }}</td>
                <td>{{ $p['nama'] }}</td>
                <td>{{ $p['deskripsi'] }}</td>
                <td>{{ $p['harga'] }}</td>
                <td>{{ $p['stok'] }}</td>
                <td>{{ $p['gambar'] }}</td>
                <td>
                    <a class="btn btn-warning" href="/edit-produk"><i class="far fa-pen-to-square"></i></a>
                    <a class="btn btn-danger" href="/edit-produk"><i class="far fa-trash-can"></i></a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection