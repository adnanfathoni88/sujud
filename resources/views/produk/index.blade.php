@extends('layouts.main') @section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-9">
            <h2>Produk</h2>
        </div>
    </div>
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
            <th>Gambar</th>
            <th>Kode</th>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Aksi</th>
        </thead>
        <tbody>
            @foreach ($produk as $p)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>
                    @if($gambar->has($p['id']))
                    @foreach($gambar[$p['id']] as $g)
                    <img src="{{ asset('storage/img/'.$g['nama']) }}" alt="" width="50px">
                    @endforeach
                    @endif
                </td>
                <td >{{ $p['kode'] }}</td>
                <td>{{ $p['nama'] }}</td>
                <td>{!! $p['deskripsi'] !!}</td>
                <td><s>{{ $p['harga_produk'] }}</s> {{ $p['harga_diskon'] }}</td>
                <td>{{ $p['stok'] }}</td>
                <td>
                    <a class="btn btn-warning" href="/edit-produk/{{ $p['id'] }}"><i
                            class="far fa-pen-to-square"></i></a>
                    <a class="btn btn-danger" href="/hapus-produk/{{ $p['id'] }}"
                        onclick="return confirm ('Hapus Data {{ $p['nama'] }}')"><i class="far fa-trash-can"></i></a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection