@extends('layouts.main') @section('content')
<div class="container-fluid">
    <h2>Tambah Produk</h2>
</div>
<div class="container-fluid ">
    <form action="/add-produk" method="post" enctype="multipart/form-data">
        @csrf
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('kode') is-invalid @enderror" name="kode"
                value="{{ old('kode') }}" />
            <label class="form-label" for="form12">kode</label>
            @error('kode')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('nama') is-invalid @enderror" name="nama"
                value="{{ old('nama') }}" />
            <label class=" form-label" for="form12">nama</label>
            @error('nama')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('deskripsi') is-invalid @enderror"
                name=" deskripsi" value="{{ old('deskripsi') }}" />
            <label class="form-label" for="form12">deskripsi</label>
            @error('deskripsi')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('harga') is-invalid @enderror" name="harga"
                value="{{ old('harga') }}" />
            <label class="form-label" for="form12">harga</label>
            @error('harga')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('stok') is-invalid @enderror" name="stok"
                value="{{ old('stok') }}" />
            <label class="form-label" for="form12">stok</label>
            @error('stok')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-file">
            <input class="form-control form-control @error('gambar') is-invalid @enderror" type="file" id="formFileLg"
                name="gambar[]" multiple />
            @error('gambar')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-kategori">
            <select name="kategori_id" id="kategori_id"
                class="form-control form-control @error('kategori_id') is-invalid @enderror">
                <option value="">-- kategori --</option>
                @foreach ($kategori as $k)
                <option value="{{$k->id}}">{{$k->nama}}</option>
                @endforeach
            </select>
            <!-- notif error -->
            @error('kategori_id')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>

        <button class="btn btn-primary mt-4" type="submit">Simpan</button>
    </form>
</div>
@endsection