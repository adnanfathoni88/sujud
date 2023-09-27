@extends('layouts.main') @section('content')
<div class="container-fluid">
    <h2>Tambah Produk</h2>
</div>
<div class="container-fluid">
    <form action="/add-produk" method="post">
        @csrf
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('kode') is-invalid @enderror" name="kode" />
            <label class="form-label" for="form12">kode</label>
            @error('kode')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('nama') is-invalid @enderror" name="nama" />
            <label class="form-label" for="form12">nama</label>
            @error('nama')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('deskripsi') is-invalid @enderror"
                name="deskripsi" />
            <label class="form-label" for="form12">deskripsi</label>
            @error('deskripsi')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('harga') is-invalid @enderror" name="harga" />
            <label class="form-label" for="form12">harga</label>
            @error('harga')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('stok') is-invalid @enderror" name="stok" />
            <label class="form-label" for="form12">stok</label>
            @error('stok')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('gambar') is-invalid @enderror" name="gambar" />
            <label class="form-label" for="form12">gambar</label>
            @error('gambar')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>

        <button class="btn btn-primary mt-2" type="submit">Simpan</button>
    </form>
</div>
@endsection